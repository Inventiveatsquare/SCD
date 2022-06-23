import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    container:{
        width:width(92),
        alignSelf:"center",
        marginTop:height(4)
    },
    heading:{
        fontSize:width(4.5),
        color:AppColors.black,
        fontWeight:"bold"
    },
    text:{
        fontSize:width(3.7),
        lineHeight:height(3),
        marginTop:height(2),
        color:AppColors.black,
    },
});
export default styles