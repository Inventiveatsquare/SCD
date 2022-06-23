import React from 'react';
import { View, Text } from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Header from '../../components/Header';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
const Development = ({navigation}) => {
    return (
        <ScreenWrapper
        headerUnScrollable={()=>(
            <Header
            onDrawerPress={() => navigation.toggleDrawer()} 
            onSearchPress={()=>navigation.navigate("SearchDetail")}
            image
            icon={false}
            />
        )}
        >
        <View style={{width:width(100),height:height(90),backgroundColor:AppColors.white,justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:width(7)}}>Under Development</Text>
        </View>
        </ScreenWrapper>
    )
}

export default Development
