import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from "../../utills/FontFamily"
const styles = StyleSheet.create({
    container:{
        maxWidth:width(50),
        alignItems:"center",
        justifyContent:"center",
        borderBottomWidth:width(0.2),
        borderColor:AppColors.sementic,
    },
    containerActive:{
        borderBottomWidth:width(0.5),
        borderColor:AppColors.primary,
    },
    textStyle:{
        maxWidth:width(50),
        paddingHorizontal:width(4),
        fontSize:width(4),
        marginBottom:height(1),
        fontFamily:FontFamily.PoppinsRegular,
        color:AppColors.sementic10
    },
    textActive:{
        color:AppColors.primary
    },
});
export default styles