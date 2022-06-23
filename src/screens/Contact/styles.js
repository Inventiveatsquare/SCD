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
        fontSize:width(3.2),
        lineHeight:height(3),
        marginTop:height(2),
        color:AppColors.black,
    },
    emaiText:{
        color:AppColors.primary
    }
});
export default styles