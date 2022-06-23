import React from 'react'
import { View, Text, Image , TouchableOpacity} from 'react-native'
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import {width,height} from "react-native-dimension";
import AppColors from '../../utills/AppColors';
import Entypo from "react-native-vector-icons/Entypo";
const Logo = require("../../assets/images/Logo.png");
const Header = ({
    onDrawerPress=null,
    image = false,
    icon = false,
    menu = true,
    onBackPress,
    onSearchPress
}) => {
    return (
        <View style={[styles.mainContainer,!image&&{paddingVertical:height(1)}]}>
        <View style={styles.container} >
            {
                menu ?
                <TouchableOpacity
                onPress={onDrawerPress}
                activeOpacity={0.6}
                >
                    <Ionicons name="menu-outline" size={width(10)} color={AppColors.black}/>
                </TouchableOpacity>
            :
            <TouchableOpacity
            activeOpacity={0.6}
            onPress={onBackPress}
            >
            <Entypo name={"chevron-small-left"} size={width(8)}/>    
            </TouchableOpacity>
                
        }
            {
                image ?
                null
            // <Image source={Logo} style={styles.image}/>
            :
            <View/>    
            }
            {
                icon ?
                <TouchableOpacity
                onPress={onSearchPress}
                >
                <Feather name="search" size={width(8)} color={AppColors.black   }/>
                </TouchableOpacity>
                :
                <View />
            }
        </View>
        </View>
    )
}

export default Header
