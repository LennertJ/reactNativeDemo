import { StyleSheet } from "react-native";

export const detailsStyles = StyleSheet.create({
    container: {
        margin: 10
    },
    sigil:  {
        position: "absolute",
        right: 20,
        top: 0,
        resizeMode: 'cover', 
        width: 50, 
        height: 50
    },
    h1: {
        fontSize: 20,
        color: "#FFD700"
    },
    boxedField: {
        borderWidth: 1,
        padding: 10,
    }
});
