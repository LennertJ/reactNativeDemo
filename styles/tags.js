import { StyleSheet } from "react-native";

export const tagsStyles = StyleSheet.create({
    baseTag: {
        margin: 2,
        padding: 4,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
    },
    getClassTag(className){
        switch(className){
            case("Bard"): 
                return { backgroundColor: '#C73032', color: '#FFD700' }
            case("Cleric"):
                return { backgroundColor: '#dd0000', color: '#a0e0ff' }
            case("Druid"):
                return { backgroundColor: '#964B00', color: '#5DBB63' }
            case("Paladin"):
                return { backgroundColor: '#0000FF', color: '#FFD700' }
            case("Ranger"):
                return { backgroundColor: '#02BA0F', color: '#FFD700' }
            case("Sorcerer"):
                return { backgroundColor: '#FF0000', color: '#FFD700' }
            case("Warlock"):
                return { backgroundColor: '#222222', color: '#C585F7' }
            case("Wizard"):
                return { backgroundColor: 'purple', color: '#FFD700' }
        }
    },
});