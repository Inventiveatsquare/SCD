import {StyleSheet} from 'react-native';
import {width, height} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from '../../utills/FontFamily';

const styles = StyleSheet.create({
    container:{
        maxHeight:height(90),
        paddingVertical:height(3),
        paddingHorizontal:width(5),
        borderTopRightRadius:width(5),
        borderTopLeftRadius:width(5),
        backgroundColor:AppColors.white 
    },
    loginText: {
        fontFamily: FontFamily.PoppinsRegular,
        fontSize: width(4),
      },
      button: {
        backgroundColor: AppColors.primary,
        marginVertical: height(2),
      },
      tipContainer:{
        paddingBottom:height(1),
        marginBottom:height(2),
      },
      textContainer:{
        flexDirection:"row",
        width:width(85),
      },
      tipText:{
        marginTop:height(1),
        fontSize:width(3.5),
        fontFamily:FontFamily.PoppinsRegular,
      },
      commentTextContainer:{
        width:width(70),
        borderRadius:width(4),
        marginLeft:width(2),
        paddingHorizontal:width(2),
        paddingVertical:height(3),
        backgroundColor:AppColors.whiteSmoke
      },
      nameText:{
        position:"absolute",
        left:width(2),
        top:height(1),
        color:AppColors.primary
      } , 
      numberText:{
        fontFamily:FontFamily.PoppinsRegular,
        marginRight:width(2),
        fontSize:width(4)
    },
    crossIcon:{
        position:"absolute",
        right:height(1),
        top:height(1),
        zIndex:2
    },
    editContainer:{
      marginLeft:width(4),
    },
    editText:{
      fontFamily:FontFamily.PoppinsRegular,
      color:AppColors.primary
    },
    profileImage:{
      width:width(9),
      height:width(9),
      borderRadius:width(9)/2,
      marginTop:height(0.5),
    }
});
export default styles