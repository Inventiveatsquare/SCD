import React from 'react'
import { View,Image } from 'react-native'
import styles from "./styles";
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
  import AppColors from '../../utills/AppColors';
const Loading = ({containerStyles={}}) => {
    return (
        <View style={[styles.container,containerStyles]}>
            <BarIndicator color={AppColors.primary} style={styles.image}/>
        </View>
    )
}

export default Loading
