import React, { Component } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { baseStyles } from "../../styles/base";
import  ClassTag  from "../classtag"
import * as RootNavigation from '../../routes/RootNavigation';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getSpellInfo();
    }

    async getSpellInfo() {
        try {
            const response = await fetch('https://www.dnd5eapi.co' + this.props.url);
            const json = await response.json();
            this.setState({ data: json });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { data, isLoading } = this.state;
        return <View  style={baseStyles.listItem}>
            {isLoading ? <ActivityIndicator /> :
            <Pressable style={baseStyles.infoButton} onPress={() => RootNavigation.navigate('SpellDetails', { url: this.props.url })}>
                <Text style={baseStyles.listTitle}> {this.props.name} </Text>
                { data.level==0 ? <Text>Cantrip </Text> : <Text> Level: {data.level} </Text> }
                <View style={baseStyles.containerRow}>
                    {data.classes.map((item) => { return (<ClassTag dndClass={item.name} key={item.name}></ClassTag>); })}
                </View>
            </Pressable>  
            }
        </View>;
    }
}

export default ListItem;