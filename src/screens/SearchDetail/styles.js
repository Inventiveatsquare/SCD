import {StyleSheet} from 'react-native';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:width(91),
        alignSelf:"center",
        marginTop:height(2),
        backgroundColor:AppColors.white
    },
    inputContainer:{
        width:width(91),
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-between"
    },
    settingContainer:{
        backgroundColor:AppColors.primary10,
        paddingHorizontal:width(5),
        paddingVertical:width(3.2),
        borderRadius:width(2),
    },
    searchResultContainer:{
        maxHeight:height(60),
        paddingVertical:height(2),
        // height:height(50),
        width:width(92),
        marginTop:-height(4),
        borderRadius:width(2),
        backgroundColor:AppColors.white,
        shadowColor: AppColors.primary,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
});
export default styles