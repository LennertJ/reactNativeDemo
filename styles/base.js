import { StyleSheet } from "react-native";

export const baseStyles = StyleSheet.create({
    background: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    listTitle : {
        fontSize: 20,
        padding: 3,
        fontWeight: 'bold',
    },
    listItem : {
        padding: 10,
        borderBottomWidth: 1,
    }
});