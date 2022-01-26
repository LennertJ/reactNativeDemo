import React from "react";
import { tagsStyles } from "../styles/tags";
import { Text } from 'react-native';

export default function ClassTag(props){
    return <Text style={[tagsStyles.baseTag, tagsStyles.getClassTag(props.dndClass)]}>{props.dndClass}</Text>
}