import { Image, StyleSheet, Dimensions} from 'react-native';
import Txt from '../../../Components/text';
import top from '../../../../assets/topo.png';
const width = Dimensions.get('screen').width;
export default function Top({title}){
    return <>
        <Image source = {top} style={styles.top}/>
        <Txt  style = {styles.title}>{title}</Txt>
    </>

}


const styles = StyleSheet.create({
    top : {
        width : '100%',
        height : 568/768 * width
    },
    title : {
        width : '100%',
        position : 'absolute',
        textAlign : 'center',
        fontSize : 16,
        lineHeight : 26,
        color : 'white',
        fontWeight : 'bold',
        padding : 16
    },


});