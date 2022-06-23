import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import FontFamily from "../../utills/FontFamily"
import AppColors from '../../utills/AppColors';
const styles = StyleSheet.create({
  container:{
    width:width(90),
    marginTop:height(4),
    alignSelf:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  text:{
    fontSize:width(4),
    color:AppColors.black,
    fontFamily:FontFamily.PoppinsSemiBold
  }
});
export default styles