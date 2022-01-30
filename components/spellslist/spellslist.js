import React, { Component } from 'react';
import { ActivityIndicator, Button, ScrollView, TextInput, Text, View } from 'react-native';
import ListItem from './listItem'
import { baseStyles } from "../../styles/base";

class Spellslist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
            search: "",
            page: 0,
            pageCount:0
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
            this.setState({ pageCount: this.state.data.length})
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
        let pageNr = 0;
        this.state.page = 0;
        this.setState({ search: searchTerm })
        for(let i = 0; i < this.state.data.length; i++){
            if(this.state.data[i].name.toLowerCase().includes(String(searchTerm).toLowerCase())){
                this.state.data[i].display = true;
                this.state.data[i].page = Math.floor(pageNr++/20);
            }else
            {
                this.state.data[i].display = false;
                this.state.data[i].page = Math.floor(100);
            }
        }
        this.setState({ pageCount: pageNr })
    }
    
    render() {
        const { data, isLoading } = this.state;
        return (
            <ScrollView>
                <TextInput
                    style={[baseStyles.input,baseStyles.margin10]}
                    onChangeText={this.onChangeText}
                    placeholder="Search..."
                />
                <View style={[baseStyles.flexSpaceBetween, baseStyles.margin10]}>
                    <Button disabled={this.state.page<=0} title="< prev" onPress={()=> this.setState({ page: Math.max(0,--this.state.page) }) }></Button> 
                    <Text style={[baseStyles.bold, baseStyles.padding10]}>Page: {(this.state.page)+1} / {Math.floor(this.state.pageCount/20)+1}</Text>
                    <Button disabled={this.state.page>=Math.floor(this.state.pageCount/20)} title="next >" onPress={()=> this.setState({ page: Math.min(++this.state.page, Math.floor(this.state.data.length/20))}) }></Button> 
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