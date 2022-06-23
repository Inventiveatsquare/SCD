import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import styles from "./styles";
import moment from 'moment';
const Blog = ({image,title,owner="Me",date="12 December 2021",onPress}) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6} style={styles.container}>
            <Image source={{uri:image}} style={styles.image}/>
            <View style={styles.textContainer}>  
                <Text numberOfLines={3} ellipsizeMode='clip' style={styles.ownerText}>{title}</Text>
                <Text style={styles.dateText}>{moment(date).format('MMM DD YYYY')}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Blog
