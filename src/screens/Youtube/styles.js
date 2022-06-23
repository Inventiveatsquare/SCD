import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from "../../utills/FontFamily"

const styles = StyleSheet.create({
    webViewContainer:{
       height:height(100),
       width:width(100)
    },
    bannerContainer:{
        position:"absolute",
        backgroundColor:AppColors.white,
        bottom:height(7.1),
        width:width(100),
        zIndex:2,
    }
});
export default styles; 