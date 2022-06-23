import React,{useState,useEffect} from 'react'
import { View, Text, Image,ActivityIndicator } from 'react-native'
import styles from "./styles";
import AppColors from '../../utills/AppColors';
import {width} from 'react-native-dimension';
import moment from 'moment';
const Author = ({image,name,date}) => {
    const [loaded,setLoaded] = useState(false)
    useEffect(()=>[
        setTimeout(()=>{
            setLoaded(true)
        },2000)
    ],[])
    return (
        <View style={[styles.container,!loaded && {justifyContent:"center"}]}>
        {
         loaded ?
           <>
           <Image source={{uri:image}} style={styles.image}/>
           <Text style={styles.text}>{name}</Text>
           </>
        :
        <ActivityIndicator style={{alignSelf:"center"}} color={AppColors.primary} size={width(5)}/>
        }
        </View>
    )
}

export default Author
