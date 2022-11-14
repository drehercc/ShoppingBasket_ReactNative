import { StyleSheet, View} from 'react-native';

import Txt from '../../Components/text';

import Top from './Components/top';
import Details from './Components/details';

export default function Basket({top,details}){

    return <>
        <Top{...top} ></Top>
        <View style = {styles.basket}>
            <Details{...details}></Details>
        </View>
    </>

}

//largura 768
//altura 568


const styles = StyleSheet.create({
    basket : {
        paddingVertical : 8,
        paddingHorizontal : 16
    }
});