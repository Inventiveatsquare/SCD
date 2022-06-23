import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from '../../utills/FontFamily';
const styles = StyleSheet.create({
    menuContainer:{
        flex:1,
    },
    headingText:{
        fontSize:width(6),
        marginBottom:height(2),
        alignSelf:"center",
        fontFamily:FontFamily.PoppinsBold,
        color:AppColors.black,
    },
    blogFlatList:{
        width:width(100),
        marginLeft:-width(6),
        alignSelf:"center",
        flexGrow:0,
        marginTop:height(2)
    },
    detailText:{
        width:width(90),
        fontSize:width(3.2),
        lineHeight:height(3),
        fontFamily:FontFamily.PoppinsRegular,
        alignSelf:"center",
        color:AppColors.sementic60
    },
    containerStyles:{
        width:width(94),
        marginLeft:width(5)
    }
});
export default styles