import React, { Component } from 'react';
import { baseStyles } from "../../styles/base";
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


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
            <View style={{ flex: 1, padding: 24 }}>
                {isLoading ? <ActivityIndicator /> : data.map((item) => { return (<ListItem name={item.name} url={item.url}></ListItem>); }) }
            </View>
        );
    }
}

class ListItem extends Component {
    render() {
        return <Text>{this.props.url} {"\n"} {this.props.name}</Text>;
    }
}

export default Spellslist;