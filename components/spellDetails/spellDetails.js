import React, { Component } from 'react';
import { baseStyles } from "../../styles/base";
import { detailsStyles } from '../../styles/details';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import getSigil from "../../assets/sigils/_index";

class SpellDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        this.getSpellInfo();
    }

    async getSpellInfo() {
        try {
            const response = await fetch('https://www.dnd5eapi.co' + this.props.route.params.url);
            const json = await response.json();
            this.setState({ data: json });
        } catch (error) {
            console.log(error);
        } finally {
            this.setState({ isLoading: false });
        }
    }

    getSigil(sigilName) {
        return '../../assets/sigils/' + sigilName + '.png'
    }

    render() {
        const { data, isLoading } = this.state;
        return (<View style={[baseStyles.background, detailsStyles.container]}>
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
                    <Image style={detailsStyles.sigil} source={getSigil(data.school.name)}></Image>
                </>
            }
        </View>
        );
    }
}

export default SpellDetails;