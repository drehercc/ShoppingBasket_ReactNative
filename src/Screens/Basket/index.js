import { ScrollView, StyleSheet, View } from 'react-native';


import Item from './Components/items';
import Top from './Components/top';
import Details from './Components/details';

export default function Basket({ top, details,items }) {

    return <ScrollView>
        <Top{...top} ></Top>
        <View style={styles.basket}>
            <Details{...details}></Details>
            <Item {...items}/>
        </View>
    </ScrollView>

}

//largura 768
//altura 568


const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
});