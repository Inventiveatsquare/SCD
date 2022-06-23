import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import FontFamily from '../../utills/FontFamily';

const styles = StyleSheet.create({
  container: {
    width: width(87.5),
    alignSelf: 'center',
    marginBottom:height(1.5)
  },
  title: {
    fontFamily: FontFamily.PoppinsRegular,
    color: AppColors.sementic10,
    marginVertical: height(1),
    width: width(90),
    fontSize:width(3.2)
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: height(6),
    borderWidth: 1,
    borderColor: AppColors.primary,
    borderRadius: 5,
    paddingHorizontal: width(2.5),
  },
  input: {
    width: '94%',
    height: height(6),
    fontSize:width(3.2),
    color:AppColors.black
,    paddingVertical: 0,
    alignSelf: 'center',
  },
  prefixIconContainer: {
    width: width(8.5),
    height: height(5.75),
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  eyeContainer: {
    justifyContent: 'center',
    width: width(8.5),
    height: height(5.75),
    // alignItems: 'flex-end',
  },
  rightImage: {
    justifyContent: 'center',
    width: width(8.5),
    height: height(5.75),
    // alignItems: 'flex-end',
  },
  sufFixIcon: {
    width: width(7),
    alignSelf: 'center',
  },
});

export default styles;
