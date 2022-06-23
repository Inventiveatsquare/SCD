import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainViewContainer: {
    height:height(100),
    marginTop:height(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white
  },
  namesContainer:{
    width:width(87.5),
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },
  nameInput:{
    width:width(40),
  },
  input:{
    width:width(87.5)
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
});
export default styles;
