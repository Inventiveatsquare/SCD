import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    container:{
        width:width(40),
        marginVertical:height(2),
        marginLeft:width(2),
        paddingVertical:height(1),
        paddingHorizontal:width(3),
        borderRadius:width(30)/6,
        backgroundColor:AppColors.black,
        flexDirection:"row",
        alignItems:"center",
        shadowColor: AppColors.primary,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 20,
    },
    image:{
        width:width(7),
        height:width(7),
        borderRadius:width(7)/2
    },
    text:{
        color:AppColors.white,
        marginLeft:width(3)
    },
    dateText:{
        position:"absolute",
        fontSize:width(3),
        color:AppColors.sementic,
        bottom:height(1.8),
        left:width(12),
      },
});
export default styles