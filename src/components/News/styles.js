import {StyleSheet} from 'react-native';
import {width, height} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from '../../utills/FontFamily';
const styles = StyleSheet.create({
  container: {
    marginTop: height(2),
    marginHorizontal: width(2),
    // shadowColor: AppColors.black,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    
    elevation: 24,
  },
  imageBackground: {
    width: width(47),
    height: height(32),
    flexDirection: 'row',
    resizeMode: 'contain',
  },
  imageStyle: {
    width: width(50),
    height: height(32),
    borderRadius: width(3),
  },
  heart: {
    position: 'absolute',
    right: width(4),
    top: height(1.5),
  },
  bottomContainer: {
    backgroundColor: AppColors.black70,
    alignSelf: 'flex-end',
    width: width(50),
    paddingLeft: width(4),
    position:"absolute",
    bottom:0,
    // marginBottom:height(0.5),
    paddingVertical: height(1),
    borderBottomRightRadius: width(3),
    borderBottomLeftRadius: width(3),
  },
  titleText: {
    color: AppColors.white,
    width: width(45),
    fontSize: width(3),
    fontFamily: FontFamily.PoppinsRegular,
  },
  detailContainer: {
    width: width(70),
    flexDirection: 'row',
    alignItems: 'center',
  },
  ownerText: {
    color: AppColors.primary,
    fontSize: width(3.5),
  },
  dateText: {
    color: AppColors.white,
    marginLeft: width(2),
    fontSize: width(3.5),
  },
});
export default styles;
