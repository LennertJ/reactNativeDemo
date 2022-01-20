import React, { Component } from 'react';
import { StyleSheet,View,Text } from "react-native";

class SpellDetails extends Component {
    render() {
        return (
            <View style={StyleSheet.home}>
                <Text style={StyleSheet.homeText}>spellDetails</Text>
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
export default SpellDetails;