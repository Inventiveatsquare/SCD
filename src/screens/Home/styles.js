import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from "../../utills/FontFamily"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:AppColors.white
    },
    heading:{
        width:width(100),
        paddingHorizontal:width(5),
        marginTop:height(2),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    h1:{
        fontSize:width(6),
        color:AppColors.black,
        fontFamily:FontFamily.PoppinsSemiBold
    },
    h3:{
        fontSize:width(6),
        fontFamily:FontFamily.PoppinsSemiBold,
        color:AppColors.black
    },
    seeAllText:{
        fontSize:width(3.5),
        marginTop:height(1),
        fontFamily:FontFamily.PoppinsMedium,
        color:AppColors.primary,
    },
    newsFlatList:{
        flexGrow:0
    },
    categoryListStyle:{
        flexGrow:0,
        paddingHorizontal:width(4),
        marginTop:height(2),
    },
    blogFlatList:{
        width:width(100),
        marginLeft:-width(6),
        alignSelf:"center",
        flexGrow:0,
        marginTop:height(2)
    },
    containerStyles:{
        width:width(94),
        marginLeft:width(5)
    }
});
export default styles