import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from "../../utills/FontFamily";
const styles = StyleSheet.create({
  container: {},
  loadingContainer: {
    height: height(100),
    justifyContent: 'center',
  },
  imageBackGround: {
    width: width(100),
    height: height(50),
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  backButtonContainer: {
    position: 'absolute',
    left: width(4),
    top: height(5),
    width: width(9),
    height: width(9),
    borderRadius: width(10) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.white,
  },
  bottomContainer: {
    width: width(100),
    paddingHorizontal: width(4),
    justifyContent: 'flex-end',
  },
  headingText: {
    width: width(70),
    fontSize: width(6),
    fontFamily:FontFamily.PoppinsBold,
    color: AppColors.black,
  },
  subTitleText: {
    width: width(90),
    fontSize: width(4),
    fontFamily:FontFamily.PoppinsRegular,
    color: AppColors.black,
  },
  mainBottomContainer: {
    width: width(100),
    borderTopRightRadius: width(10),
    borderTopLeftRadius: width(10),
    marginTop: -height(5),
    backgroundColor: AppColors.white,
  },
  detailContainer: {
    marginTop: height(5),
    width: width(100),
    paddingRight: width(7),
    paddingLeft: width(4.5),
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  bottomHeadingText: {
    marginTop: height(2),
    marginLeft: width(3),
    fontSize: width(4),
    fontWeight: 'bold',
    color: AppColors.black,
  },
  blodDetailText: {
    fontSize: width(3.5),
    lineHeight: height(3),
    marginTop: height(2),
    paddingHorizontal: width(2.9),
  },
  blogFlatList: {
    width: width(95),
    alignSelf: 'center',
    flexGrow: 0,
    marginTop: height(2),
  },
  image: {
    width: width(40),
    height: width(50),
    marginLeft: width(5),
    marginBottom: height(2),
    borderRadius: width(40) / 7,
  },
  htmlContainer: {
    width: width(90),
    marginLeft: width(5),
    // paddingHorizontal:width(20),
    alignItems: 'center',
  },
  commentContainer: {
    position: 'absolute',
    right: width(4),
    bottom: height(8),
    width: width(13),
    height: width(13),
    borderRadius: width(13) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.black,
    shadowColor: AppColors.primary,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  shareComment: {
    width: width(11),
    height: width(11),
    borderRadius: width(11) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    shadowColor: AppColors.primary,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  dateText:{
    marginLeft:width(4),
    fontSize:width(4),
    fontWeight:"bold"
  }
});
export default styles;
