import {StyleSheet,Platform} from 'react-native';
import { width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
const styles = StyleSheet.create({
    mainContainer:{
        width:width(100),
        backgroundColor:AppColors.white,
        zIndex:1,
    },
    container:{
        width:width(100),
        paddingHorizontal:width(4),
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:AppColors.white
    },
    image:{
        width:width(45),
        height:width(15),
        marginLeft:-width(5.5),
        resizeMode:"contain"
    },

});
export default styles