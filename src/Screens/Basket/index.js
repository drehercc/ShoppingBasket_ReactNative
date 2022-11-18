import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';


import Item from './Components/item';
import Top from './Components/top';
import Details from './Components/details';
import Txt from '../../Components/text';

export default function Basket({ top, details, items }) {


    return <>

        <FlatList
            data={items.list}
            renderItem={Item}
            keyExtractor={({ name }) => name}
            ListHeaderComponent={() => {
                return <>
                    <Top{...top} ></Top>
                    <View style={styles.basket}>
                        <Details{...details}></Details>
                        <Txt style={styles.title}>{items.title}</Txt>
                    </View>
                </>
            }}
        /*{list.map(({ name, itemImg }) => {
            return <>
                <View key={name} style={styles.item}>
                    <Image source={itemImg} style={styles.imgItem} />
                    <Txt style={styles.name}>{name} </Txt>

                </View>
            </>
        })}*/
        />




    </>

}

//largura 768
//altura 568


const styles = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
});