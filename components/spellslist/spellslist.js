import React, { Component } from 'react';
import { ActivityIndicator, ScrollView} from 'react-native';
import ListItem from './listItem'

class Spellslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true
        };
    }

    componentDidMount() {
        this.getSpells();
    }

    async getSpells() {
        try {
            const response = await fetch('https://www.dnd5eapi.co/api/spells/');
            const json = await response.json();
            this.setState({ data: json.results });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }
    render() {
        const { data, isLoading } = this.state;
        return (
            <ScrollView>
                {isLoading ? 
                    <ActivityIndicator /> : 
                    data.map((item) => { return (<ListItem key={item.url} name={item.name} url={item.url}></ListItem>); }) 
                }
            </ScrollView>
        );
    }
}


export default Spellslist;