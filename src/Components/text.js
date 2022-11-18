import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function Txt({children, style}){

    if(style?.fontWeight === 'bold'){
        return <Text style = {[style, styles.txtBold]}>{children}</Text>
    }else{
        return <Text style = {[style, styles.txtReg]}>{children}</Text>
    }
    


}

const styles = StyleSheet.create({
    txtReg : {
        fontFamily : 'Montserrat_400Regular',
        fontWeight : 'normal'
    },
    txtBold : {
        fontFamily : 'Montserrat_700Bold',
        fontWeight : 'normal'
    }
});