import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from '../../utills/FontFamily';
const styles = StyleSheet.create({
  container: {
    width:width(45),
    marginLeft:width(5),
    marginBottom:height(2),
    borderRadius:width(40)/7,
    backgroundColor: AppColors.white,
    shadowColor: AppColors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image:{
    width:width(45),
    height:width(30),
    borderTopRightRadius:width(40)/7,
    borderTopLeftRadius:width(40)/7,
  },
  textContainer:{
    marginVertical:height(2),
    paddingHorizontal:width(2)
  },
  ownerText:{
      fontSize:width(2.8),
      fontFamily:FontFamily.PoppinsRegular,
      color:AppColors.black,
  },
  dateText:{
    fontSize:width(3),
    color:AppColors.sementic
  }, 
});
export default styles;
