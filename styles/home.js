import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    home: {
        backgroundColor: '#ADD8E6'
    },
    homeText: {
        position: 'absolute',
        top: 25,
        color: 'black',
        alignSelf: 'center',
        fontSize: 48,
        fontFamily: "Old_Englished_Boots"// DK_Blackminster Cooed Old_Englished_Boots Wendell
    },
    homeButton: {
        position: 'absolute',
        right:0,
        top: 100,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius:25,
        backgroundColor: '#e0886c',
    },
    homeButtonText: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 16,
        fontFamily: "Wendell"
    }
});
