import React,{forwardRef} from 'react'
import { View, Text,TextInput } from 'react-native'
import styles from './styles'
import Feather from "react-native-vector-icons/Feather";
import { width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
const Input = ({
    disabled = false,
    autoFocus=false,
    onChangeText,
    value,
    icon=false
},ref) => {
    return (
        <View style={!icon&&{width:width(87)}}>
        <View style={[styles.container,!icon&&{alignSelf:"center"}]}>
            <Feather name="search" size={width(8)} color={AppColors.black }/>
            <TextInput
            value={value}
            autoFocus = {autoFocus}
            placeholder='PESQUISA'
            ref={ref} 
            onChangeText={onChangeText}
            style={styles.Input}
            editable = {!disabled}
            />
        </View>
        </View>
    )
}

export default forwardRef(Input)
