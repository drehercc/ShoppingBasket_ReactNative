import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Txt from '../../../Components/text';
import Btn from '../../../Components/button';

export default function Details({name,farmLogoImg,farmName,basketDescription,price,button,buttonMsg}){
    return <>
            <Txt style = {styles.name}>{name}</Txt>
            <View style = {styles.farm}>
                <Image style = {styles.farmImg} source = {farmLogoImg}/>
                <Txt style = {styles.farmName}>{farmName}</Txt>
            </View>
            <Txt style = {styles.basketDescription}>{basketDescription}</Txt>
            <Txt style = {styles.price}>{price}</Txt>
            <Btn msgAlert = {buttonMsg}>{button}</Btn>
    </>

}


const styles = StyleSheet.create({
    name : {
        color : '#464646',
        fontSize : 26,
        lineHeight : 42,
        fontWeight : 'bold',
    },
    farm : {
        flexDirection : 'row',
        paddingVertical : 12
    },
    farmImg : {
        width : 32,
        height : 32
    },
    farmName : {
        fontSize : 16,
        lineHeight : 26,
        marginLeft : 12

    },
    basketDescription : {
        color : '#A3A3A3',
        fontSize : 16,
        lineHeight : 26
    },
    price : {
        color : '#2A9F85',
        fontWeight : 'bold',
        fontSize : 26,
        lineHeight : 42,
        marginTop : 8
    }

});