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
                
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                        <listItem url = {item.url} name={item.name}></listItem>
                        //<Text>{item.name}, {item.url}</Text>
                        )}
                    />
                )}
            </View>
        );
    }
}
export default Spellslist;