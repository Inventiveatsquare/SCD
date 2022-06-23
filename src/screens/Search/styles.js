import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    mainContainer:{
        width:width(100),
        backgroundColor:AppColors.white
    },
    container:{
        width:width(91),
        alignSelf:"center",
        // marginTop:height(2),
        backgroundColor:AppColors.white
    },
    headingText:{
        fontSize:width(7),
        color:AppColors.black,
    },
    subHeadingText:{
        fontSize:width(3.7),
        color:AppColors.black,
       
    },
    inputContainer:{
        width:width(91),
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between"
    },
    settingContainer:{
        backgroundColor:AppColors.sementic30,
        paddingHorizontal:width(4),
        paddingVertical:width(2),
        borderRadius:width(2),
    },
    indicatorContainer:{
        height:height(50),
        justifyContent:"center",
        alignItems:"center"
    },
    loadingContainer:{
        height:height(55),
        width:width(90)
    }
});
export default styles