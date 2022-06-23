import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import {width, height} from 'react-native-dimension';
const styles = StyleSheet.create({
  container: {
    width: width(43),
    paddingVertical: height(2),
    borderRadius: width(2),
    // height:height(3),
    backgroundColor: AppColors.primary20,
    marginLeft: width(2),
    marginBottom: height(2),
  },
  image: {
    width: width(18),
    height: width(18),
    marginLeft: width(3),
    borderRadius:width(4)
    // alignSelf: 'center',
    // borderRadius: width(18) / 2,
  },
  activeImage:{
    alignSelf:"flex-start",
    marginLeft:width(3.5),
    borderRadius:width(4)
  },
  name: {
    marginTop: height(1),
    marginLeft: width(3),
    color: AppColors.white,
    fontSize: width(3.5),
    fontWeight: 'bold',
  },
  designation: {
    marginLeft: width(3),
    color: AppColors.white,
    fontSize: width(2.7),
  },
  detail: {
    marginTop: height(2),
    marginLeft: width(3),
    color: AppColors.white,
    fontSize: width(2.5),
    lineHeight: height(2),
  },
  bottom: {
    width: width(20),
    marginTop: height(1),
    marginLeft: width(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  facebookStyles: {
    width: width(5),
    height: width(5),
    borderRadius: width(5) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.white,
  },
});
export default styles;
