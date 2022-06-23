import { StyleSheet } from 'react-native';
import AppColors from '../../utills/AppColors';
import { width, height, totalSize } from 'react-native-dimension';
import FontFamily from '../../utills/FontFamily';
const styles = StyleSheet.create({
  heading: {
    paddingHorizontal: width(5),
    alignSelf: 'center',
    fontSize: width(5),
    fontWeight:"bold",
    color: AppColors.black,
    marginTop: height(1),
    marginBottom: height(2),
    fontFamily: 'OpenSauceSans-Bold'
  },
  phoneInputContainer: {
    width: width(90),
    backgroundColor: AppColors.white,
    alignSelf: 'center',
    height: height(7.5),
    borderWidth: width(0.5),
    borderRadius: width(2),
    borderColor: AppColors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width(2)
  },
  mainViewContainer:{
    height:height(100),
    backgroundColor:"rgba(255,255,255,40)"
  },
  container:{
    borderTopLeftRadius:width(5),
    borderTopRightRadius:width(5),
    paddingVertical:height(4),
    backgroundColor:AppColors.white,
  },
  bottomText:{
    width:width(70),
    fontSize:width(3.6),
    alignSelf:"center",
    textAlign:"center",
    color:AppColors.white
  },
  phoneNumberContainer: {
    width: width(86)
  },
  phoneNumberText: {
    fontSize: width(3.25),
    marginBottom: height(0.5),
    color: AppColors.grey
  },
  textInput: {
    backgroundColor: AppColors.white,
    height: height(7),
    marginVertical: height(2)
  },
  iconContainer:{
    justifyContent:"center",
    alignItems:"center"
  },
  payment:{
    paddingVertical:height(4)
  },
  sucessMessage:{
    fontSize:width(4),
    marginTop:height(3),
    marginBottom:height(2),
    fontWeight:"bold",
    alignSelf:'center',
    color:AppColors.white,
  },
  paymentMessageText:{
    fontSize:width(5),
    marginTop:height(0.1),
    marginBottom:height(4),
    fontWeight:"bold",
    alignSelf:'center',
    color:AppColors.textColor,
  },
  button:{
    width:width(70),
    backgroundColor:AppColors.primary
  },
  bottomRow:{
    width:width(90),
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    alignSelf:"center",
  },
  qrCodeContainer:{
    marginTop:height(4),
    marginBottom:height(10),
    alignSelf:"center",
  },
  buttonTextStyle:{
    fontSize:width(3.7),
    fontFamily:FontFamily.RobotoBold,
    color:AppColors.white,
  }
});
export default styles;
