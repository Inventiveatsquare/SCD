import React,{useState} from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import AppColors from '../../utills/AppColors';
import styles from "./styles";
const Category = ({name,onPress,index,currentCategory}) => {
    return (
        <TouchableOpacity
        onPress={onPress} 
        activeOpacity={0.6}
        style={[styles.container,(currentCategory==index) && styles.containerActive]}>
            <Text numberOfLines={1} style={[styles.textStyle,(currentCategory==index) && styles.textActive]}>{name}</Text>
        </TouchableOpacity>
    )
}

export default Category
