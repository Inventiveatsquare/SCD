import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    container:{
        width:width(92),
        marginTop:height(1),
        flexDirection:"row",
        // justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:width(4)
    },
    circle:{
        width:width(8),
        height:width(8),
        borderRadius:width(20),
        borderColor:AppColors.primary,
        backgroundColor:AppColors.primary
    },
    text:{
        width:width(65),
        fontSize:width(3),
        marginLeft:width(2),
        color:AppColors.black
    },
    iconContainer:{
        position:"absolute",
        right:width(4),
        alignSelf:"flex-end"
    },
    image:{
        width:width(4),
        height:height(4),
        resizeMode:"contain"
    }
});
export default styles