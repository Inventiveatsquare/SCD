import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from "../../utills/FontFamily"

const styles = StyleSheet.create({
    container:{
        height:height(80),
        width:width(100),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:AppColors.white
    },
    image:{
        width:width(30),
        height:width(30),
        resizeMode:"contain"
    }
});
export default styles