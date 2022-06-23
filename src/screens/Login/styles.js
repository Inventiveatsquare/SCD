import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    height:height(90),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:height(10),
    backgroundColor: AppColors.white
  },
  input:{
    width:width(87.5)
  },
  signupText:{
  },
  button:{
    width:width(87.5),
    marginTop:height(2),
    backgroundColor:AppColors.primary
  },
  signupContainer:{
    width:width(87.5),
    marginTop:height(2),
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
  },
  createNewAccount:{
    marginTop:height(4)
  },
  text:{
    color:AppColors.black,
    fontSize:width(3.5)
  },
  loginText:{
    color:AppColors.primary,
    fontSize:width(3.5)
  },
  googleButtton:{
    backgroundColor:AppColors.white
  },
  googleButtonText:{
    color:AppColors.black
  },
  forgetPasswordContainer:{
    width:width(87),
    marginTop:height(1),
    alignSelf:"center",
    alignItems:"flex-end",
  },
  forgetText:{
    color:AppColors.primary,
    fontSize:width(3)
  },
});
export default styles;
