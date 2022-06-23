import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  mainContainer: {
    width: width(87.5),
    backgroundColor: AppColors.royalBlue,
    shadowColor: AppColors.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
  },
  container: {
    width:width(67),  
    paddingVertical: height(1.8),
    paddingHorizontal:width(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
  text: {
    color: AppColors.white,
  },
  image:{
      width:width(7),
      height:width(7),
      resizeMode:"contain"
  }
});

export default styles;
