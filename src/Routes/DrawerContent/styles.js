import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from '../../utills/FontFamily';
const styles = StyleSheet.create({
    menuContainer1:{
        backgroundColor:AppColors.logocolor

    },
    menuContainer:{
        flex:1,
        backgroundColor:AppColors.logocolor
    },
    image:{
        width:width(30),
        height:width(30),
        marginTop:-height(0),
        alignSelf:"center",
        resizeMode:'contain'
    },
    container:{
        width:width(75),
        alignSelf:"center",
        marginTop:-height(0)
    },
    row:{
        width:width(60),
        paddingVertical:height(0),
        borderRadius:width(60)/3,
        flexDirection:"row",
        alignItems:"center"
    },
    labelText:{
        marginLeft :width(4),
        fontSize:width(4),
        fontFamily:FontFamily.PoppinsRegular,
        paddingTop:height(1),
        color:AppColors.white
    },
    categoriesContainer:{
        width:width(60),
        marginLeft:width(4),
        marginTop:height(2),
    },
    labelHeading:{
        fontFamily:FontFamily.PoppinsMedium,
        color:AppColors.primary,
        fontSize:width(4.5)
    },
    bottomRow:{

    },
    categoryRow:{
        width:width(60),
        paddingVertical:height(0.5),
        borderRadius:width(60)/3,
        marginLeft:-width(4)
    },
    categoryInnerRow:{
        flexDirection:"row",
        alignItems:"center",
        marginLeft:width(4),
    },
    categoryLabelText:{
        marginLeft :width(4),
        fontSize:width(3.2),
        fontFamily:FontFamily.PoppinsRegular,
        paddingTop:height(1),
        color:AppColors.white
    },
    logoutContainer:{
        width:width(72),
        paddingVertical:height(2),
        backgroundColor:AppColors.black,
        alignItems:"center",
    },
    logoutText:{
        color:AppColors.white,
        fontFamily:FontFamily.PoppinsRegular,
        fontSize:width(3.7),
        marginRight:width(7),
    }
});
export default styles