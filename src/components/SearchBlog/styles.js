import {StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
  container: {
    width: width(90),
    marginTop: height(2),
    borderRadius:width(3),
    flexDirection: 'row',
    backgroundColor: AppColors.white,
    shadowColor: AppColors.primary,
    shadowOffset: {
        width: 0,
        height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    
    elevation: 13,
  },
  image: {
    width: width(40),
    height: width(30),
    borderRadius: width(30) / 6,
  },
  detailContainer: {
      paddingVertical:height(1),
    marginLeft: width(2.5),
    marginTop: height(0.7),
  },
  reponseContainer: {
    marginTop: height(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    width: width(42),
    fontSize: width(3.8),
    fontWeight: 'bold',
    lineHeight: height(2.5),
    color: AppColors.black,
  },
  responseText: {
    marginLeft: width(0.5),
    fontSize: width(2.7),
  },
  eyeIcon: {
   marginRight:width(1),
  },
  authorText:{
    marginRight:width(3)
  },
  dateText:{
    fontSize:width(2.6),
    color:AppColors.sementic
  },
  personIcon:{
    marginRight:width(1),
    marginBottom:height(0.3)
  }
});
export default styles;
