import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    container:{
        width:width(72),
        height:height(6),
        paddingHorizontal:width(2),
        marginVertical:height(5),
        borderRadius:width(2),
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:AppColors.primary10
    },
    Input:{
        fontSize:width(3.2),
        color:AppColors.black,
        height:height(5),
        marginLeft:height(1),
        width:width(60),
    }
});
export default styles