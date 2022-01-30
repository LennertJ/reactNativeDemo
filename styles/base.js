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
    },
    containerRow : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    flexSpaceBetween : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bold : {
        fontWeight: 'bold',
        fontSize: 16
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
    padding10:{
        padding: 10,
    },
    margin10: {
        margin: 10
    }
});