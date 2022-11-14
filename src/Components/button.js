import {StyleSheet, Alert, TouchableOpacity} from 'react-native';

import Txt from './text';
export default function Btn({msgAlert,children}){
    return <>
    <TouchableOpacity style = {styles.button} onPress={() => Alert.alert(msgAlert)}>
            <Txt style = {styles.buttonText}>{children}</Txt>
    </TouchableOpacity>
    </>

}

const styles = StyleSheet.create({
    button : {
        marginTop : 16,
        backgroundColor : '#2A9F85',
        paddingVertical : 16,
        borderRadius : 6
    },
    buttonText : {
        color : 'white',
        textAlign : 'center',
        fontWeight : 'bold',
        fontSize : 16,
        lineHeight : 26
    }
});