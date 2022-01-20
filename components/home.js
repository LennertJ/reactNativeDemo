import React from "react";
import { Button, ImageBackground, Image, Text, View } from "react-native";
import { homeStyles } from "../styles/home";
import { baseStyles } from "../styles/base";
import image from '../assets/background.jpg';

const IMAGE = Image.resolveAssetSource(image).uri;

export default function Home({ navigation }){
    return (
        <View style={baseStyles.background}>
            <ImageBackground source={{uri: IMAGE}} style={baseStyles.backgroundImage}>
            <Text style={homeStyles.homeText}>Welcome Lennert</Text>
            <Button
                    title="See all spells"
                onPress={() => navigation.navigate('Spellslist')}
            />
            </ImageBackground>
        </View>
    )
}
