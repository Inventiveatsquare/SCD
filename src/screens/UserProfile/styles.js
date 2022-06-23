import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from '../../utills/FontFamily';

const styles = StyleSheet.create({
  container: {
    width: width(92),
    alignSelf: 'center',
    marginTop: height(4),
  },
  image:{
    width:width(30),
    height:width(30),
    alignSelf:"center",
    resizeMode:"contain"
  },
  nameText:{
    fontSize:width(4),
    color:AppColors.primary,
    fontFamily:FontFamily.PoppinsBold,  
    alignSelf:"center",
  },
  bottomContainer:{
    marginTop:height(4),
  },
  labelText:{
    marginLeft:width(3.5),
    fontSize:width(4),
    color:AppColors.black,
    fontFamily:FontFamily.PoppinsMedium,
  },
  input:{
    // width:width(65),
},
  heading: {
    fontSize: width(4.5),
    color: AppColors.black,
    fontWeight: 'bold',
  },
  text: {
    fontSize: width(3.7),
    lineHeight: height(3),
    marginTop: height(2),
    color: AppColors.black,
  },
});
export default styles;
