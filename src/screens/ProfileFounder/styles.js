import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width,height} from "react-native-dimension"
const styles = StyleSheet.create({
  mainViewContainer: {
    width:width(100),
    alignSelf:"center",
  },
  linearGradient:{
    paddingVertical:height(10),
  },
  backButton:{
    position:"absolute",
    top:height(2),
    left:width(4),
  } ,   
  image:{
    height:height(15),
    width:height(15),
    marginTop:-height(10),
    marginLeft:width(7)
  },
  bottomContainer:{
  
  },
  detailContainer:{
    width:width(87.5),
    alignSelf:"center",
    marginTop:height(2)
  },
  nameText:{
    fontSize:width(5)
  },
  designationText:{
    fontSize:width(7),
    color:AppColors.sementic05
  },
  detailText:{
    fontSize:width(3.6),
    lineHeight:height(3),
    marginTop:height(4),
    color:AppColors.black,
  },
  headingText:{
    marginVertical:height(2),
    fontSize:width(5),
    color:AppColors.black,
    marginLeft:width(6)
  },
  blogFlatList:{
    width:width(95),
    alignSelf:"center",
    flexGrow:0,
    marginTop:height(2)
}
});
  export default styles