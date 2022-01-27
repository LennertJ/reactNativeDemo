import React, { Component } from 'react';
import { View, Text } from "react-native";
import { baseStyles } from "../../styles/base";

class SpellDetails extends Component {
    render() {
        return (
            <View style={baseStyles.background}>
                <Text>{this.props.route.params.url}</Text>
            </View>
        );
    }
}

export default SpellDetails;