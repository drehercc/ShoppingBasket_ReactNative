import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Txt from '../../../Components/text';

export default function Item({ title, list }) {
    return <>
        <Txt style={styles.title}>{title}</Txt>
        {list.map(({ name, itemImg }) => {
            return <>
                <View key={name} style={styles.item}>
                    <Image source={itemImg} style={styles.imgItem} />
                    <Txt style={styles.name}>{name} </Txt>

                </View>
            </>
        })}
    </>

}


const styles = StyleSheet.create({
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
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