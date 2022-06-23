import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height } from 'react-native-dimension';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: width(5),
    backgroundColor: AppColors.green,
    height: height(6),
    width: width(87.5),
    alignSelf: 'center',
    shadowColor: AppColors.primary,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 8,
  },
  text: {
    color: AppColors.white,
    fontSize: width(4),
  }
});
export default styles;
