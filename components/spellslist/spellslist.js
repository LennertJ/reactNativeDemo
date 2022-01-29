import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, TextInput, Text, View } from 'react-native';
import ListItem from './listItem'
import { baseStyles } from "../../styles/base";

class Spellslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            search: "",
            page: 2
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
            for(let i = 0; i < this.state.data.length; i++) {
                this.state.data[i].display = true;
                this.state.data[i].page = Math.floor(i/20);
            }
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    onChangeText = (searchTerm) => {
        this.setState({ search: searchTerm })
        for(let i = 0; i < this.state.data.length; i++){
            this.state.data[i].display = this.state.data[i].name.toLowerCase().includes(this.state.search.toLowerCase());
        }
    }
    
    render() {
        const { data, isLoading } = this.state;
        return (
            <ScrollView>
                <TextInput
                    style={baseStyles.input}
                    onChangeText={this.onChangeText}
                    onBlur={this.onChangeText}
                    placeholder="Search..."
                />
                <View style={baseStyles.containerRow}>
                    <Text>Page: {this.state.page}</Text>
                </View>
                {isLoading ? 
                    <ActivityIndicator /> : 
                    data.map((item) => { 
                        if(item.display && item.page == this.state.page){
                            return (<ListItem key={item.url} name={item.name} url={item.url}></ListItem>)
                        }
                    }) 
                }
            </ScrollView>
        );
    }
}


export default Spellslist;