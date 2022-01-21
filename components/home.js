import React from "react";
import { Button, ImageBackground, Image, Text, View } from "react-native";
import { homeStyles } from "../styles/home";
import { baseStyles } from "../styles/base";
import image from '../assets/background.jpg';
import { useFonts } from 'expo-font';

const IMAGE = Image.resolveAssetSource(image).uri;

export default function Home({ navigation }){
    const [loaded] = useFonts({
        DK_Blackminster: require('../assets/fonts/DK_Blackminster.otf'),
        Cooed: require('../assets/fonts/cooed.ttf'),
        Old_Englished_Boots: require('../assets/fonts/Old_Englished_Boots.ttf'),
        Wendell: require('../assets/fonts/Wendell.ttf')
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={baseStyles.background}>
            <ImageBackground source={{uri: IMAGE}} style={baseStyles.backgroundImage}>
            <Text style={homeStyles.homeText}>Welcome Lennert</Text>
            <Button title="See all spells" onPress={() => navigation.navigate('Spellslist')}/>
            </ImageBackground>
        </View>
    )
}
