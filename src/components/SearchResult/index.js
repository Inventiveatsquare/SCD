import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import { width } from 'react-native-dimension';
import styles from './styles';
const arrow = require("../../assets/images/Arrow.png")
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
const SearchResult = ({title,onPress,onArrowPress}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6} 
        style={styles.container}>
            <View style={styles.circle}><Text></Text></View>
            <Text numberOfLines={1} ellipsizeMode='clip' style={styles.text}>{title}</Text>
            <TouchableOpacity
            onPress={onArrowPress}
            activeOpacity={0.6}
            style={styles.iconContainer}
            >
                <Image source={arrow} style={styles.image}/>
                {/* <MaterialCommunityIcons name={"arrow-top-left"} size={width(8)} style={{fontWeight:"normal"}}/> */}
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default SearchResult
