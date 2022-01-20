import React from "react";
import { Button, Text, View } from "react-native";
import { homeStyles } from "../styles/home"

export default function Home({ navigation }){
    return (
        <View style={homeStyles.home}>
            <Text style={homeStyles.homeText}>Welcome Lennert</Text>
            <Button
                    title="See all spells"
                onPress={() => navigation.navigate('Spellslist')}
            />
        </View>
    )
}

