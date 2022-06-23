import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from "../../utills/FontFamily"

const styles = StyleSheet.create({
    modal:{
        backgroundColor:"rgba(255,255,255,0.01)"
    },
    container:{
        height:height(100),
        width:width(100)
    },
});
export default styles