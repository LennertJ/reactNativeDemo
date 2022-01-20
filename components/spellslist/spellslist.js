import React, { Component } from 'react';
import { StyleSheet,View,Text } from "react-native";

class Spellslist extends Component {
    render() {
        return (
            <View style={StyleSheet.home}>
                <Text style={StyleSheet.homeText}>spellslist</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        backgroundColor: '#FF29B6'
    },
    homeText: {
        color: 'white'
    } 
});
export default Spellslist;