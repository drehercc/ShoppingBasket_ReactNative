import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Txt from '../../../Components/text';

export default function Item({ item: { name, itemImg } }) {
    return <View style={styles.item}>
        <Image source={itemImg} style={styles.imgItem} />
        <Txt style={styles.name}>{name} </Txt>
    </View>

}


const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical:16,
        marginHorizontal:16,
        alignItems: "center"
    },
    imgItem: {
        width: 46,
        height: 46
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }


})