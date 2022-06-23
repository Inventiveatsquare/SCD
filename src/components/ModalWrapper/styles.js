import { Platform, StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { height, width } from 'react-native-dimension'
const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    padding: 0,
    margin: 0,
   
  },
  shadow:{
    height:height(12),
    width:width(100),
    position: 'absolute',
    top: -height(7)
  },
  modalInnerContainer:{
    backgroundColor: AppColors.white,
    elevation:5,
    borderTopRightRadius: width(7),
    borderTopLeftRadius: width(7),
    paddingTop:height(1),
    paddingBottom:Platform.OS=='ios'? height(5):height(2),
  },
});
export default styles;
