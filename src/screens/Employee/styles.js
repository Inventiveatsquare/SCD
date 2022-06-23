import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width,height} from "react-native-dimension"
const styles = StyleSheet.create({
  mainViewContainer: {
    width:width(92),
    marginTop:height(2),
    alignSelf:"center",
  },
  headingText:{
    fontSize:width(5),
    fontWeight:"bold",
    textAlign:"center",
    color:AppColors.black,
  },    
});
  export default styles