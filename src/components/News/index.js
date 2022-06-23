import React from 'react'
import {View,Text,TouchableOpacity,ImageBackground } from 'react-native'
import styles from "./styles";
import {width} from "react-native-dimension"
import FastImage from 'react-native-fast-image';

const News = ({image,title="EX-CRAQUE DO GRÊMIO ESTÁ",index,owner="PG Essay",date="December19,2021",onPress}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        activeOpacity={0.6}
        style={[styles.container,index!=0&&{marginLeft:width(5)}]}
        >
            <FastImage
            style={styles.imageStyle}
            imageStyle ={styles.imageStyle}
            source={image?{uri:image}:""}
            >
            <View style={styles.bottomContainer}>
                <Text numberOfLines={2} ellipsizeMode='tail' style={styles.titleText}>{title}</Text>
                {/* <View style={styles.detailContainer}>
                    <Text style={styles.ownerText}>{owner}</Text>
                    <Text style={styles.dateText}>{moment(date).format('MMM DD YYYY')}</Text>
                </View> */}
            </View>
            </FastImage>
        </TouchableOpacity>
    )
}

export default News
