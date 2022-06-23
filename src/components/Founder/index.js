import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
const index = ({designation,name,image,detail,employee=false,onPress,onFaceBookPress,onTwitterPress,onMailPress,id=0}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.6} 
        style={[styles.container,employee&&{marginBottom:height(2)},]}
        >
            <Image source={{uri:image}} style={[styles.image, employee&& styles.activeImage]}
            />
            <Text numberOfLines={1} style={styles.name}>{name}</Text>
            {
                !employee ?
                <Text style={styles.designation}>CO-FOUNDER</Text>
                :
                <View>
                    {
                    ( id != 3 || id!=4) &&
                    <Text style={styles.designation}>{designation}</Text>
                    }
                </View>
            
             }
            
            {
                !employee &&
                <Text style={styles.detail}>{detail}</Text>
            }
            <View style={styles.bottom}>
            {
                !employee&&
                <>
                <TouchableOpacity 
                onPress={onFaceBookPress}
                style={styles.facebookStyles}>
                <EvilIcons name={"sc-facebook"} size={width(5)} color={AppColors.primary20}/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={onTwitterPress}
            >
                <EvilIcons name={"sc-twitter"} size={width(7)} color={AppColors.white}/>
            </TouchableOpacity>
                </>
            }
            <TouchableOpacity
            onPress={onMailPress}
            >
                <Feather name={"mail"} size={width(5)} color={AppColors.white}/>
            </TouchableOpacity>
            </View>
        </TouchableOpacity>
    
        ) 
    }

export default index
