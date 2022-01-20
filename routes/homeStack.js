import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from "../components/home";
import Spellslist from "../components/spellslist/spellslist";
import SpellDetails from "../components/spellDetails/spellDetails";

const Stack = createStackNavigator()

export default function Navigator() {
    return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{ title: ''}}/>
            <Stack.Screen name='Spellslist' component={Spellslist} options={{ title: 'Look at all these spells'}}/>
            <Stack.Screen name='SpellDetails' component={SpellDetails} options={{ title: 'Spellname, soon™'}}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
}