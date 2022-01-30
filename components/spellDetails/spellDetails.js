import React, { Component } from 'react';
import { baseStyles } from "../../styles/base";
import { detailsStyles } from '../../styles/details';
import { ActivityIndicator, Image, Text, ScrollView, View } from 'react-native';
import getSigil from "../../assets/sigils/_index";
import  ClassTag  from "../classtag"

class SpellDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.setState({ data: this.props.route.params.data });
        this.setState({ isLoading: false });
    }

    getSigil(sigilName) {
        return '../../assets/sigils/' + sigilName + '.png'
    }

    render() {
        const { data, isLoading } = this.state;
        return (<ScrollView style={[baseStyles.background, detailsStyles.container]}>
            {isLoading ? <ActivityIndicator /> :
                <>
                    <Text style={detailsStyles.h1}> {data.name} </Text>
                    <Text> <Text style={[baseStyles.bold]}> Range: </Text> {data.range} </Text>
                    <Text> <Text style={[baseStyles.bold]}> Components: </Text> {data.components} </Text>
                    <Text> <Text style={[baseStyles.bold]}> Material: </Text> {(data.hasOwnProperty("material") ) ? data.material : "None"} </Text>
                    <Text> <Text style={[baseStyles.bold]}> Ritual: </Text> {(data.ritual) ? "Yes" : "No"} </Text>
                    <Text> <Text style={[baseStyles.bold]}> Concentration: </Text> {(data.concentration) ? "Yes" : "No"} </Text>
                    <Text> <Text style={[baseStyles.bold]}> Casting Time: </Text> {data.casting_time} </Text>
                    <Text> <Text style={[baseStyles.bold]}> Level: </Text> {data.level} </Text>
                    { data.hasOwnProperty("attack_type") ? <Text> <Text style={[baseStyles.bold]}> Attack type: </Text> {data.attack_type} </Text> : <></>}
                    { data.hasOwnProperty("damage") ? <Text> <Text style={[baseStyles.bold]}> Damage type: </Text>{data.damage.damage_type.name} </Text> : <></>}
                    <Text style={[baseStyles.bold]}> Description: </Text>
                    <Text style={[detailsStyles.boxedField]}>{data.desc} </Text>
                    <Text style={[baseStyles.bold]}> At higher level: </Text>
                    <Text style={[detailsStyles.boxedField]}>{data.higher_level}</Text>
                    <View  style={baseStyles.containerRow}> 
                        <Text style={[baseStyles.bold]}> (Sub-)classes: </Text> 
                        {data.classes.map((item) => { return (<ClassTag dndClass={item.name} key={item.name}></ClassTag>); })}
                        {data.subclasses.map((item) => { return (<ClassTag dndClass={item.name} key={item.name}></ClassTag>); })}
                    </View>

                    <Image style={detailsStyles.sigil} source={getSigil(data.school.name)}></Image>
                </>
            }
        </ScrollView>
        );
    }
}

export default SpellDetails;