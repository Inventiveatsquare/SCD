import React from 'react';
import {View, TouchableOpacity, Text, Image, ActivityIndicator} from 'react-native';
import styles from './styles';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AppColors from '../../utills/AppColors';
import {width} from 'react-native-dimension';
const googleIcon = require('../../assets/images/google.png');
const FaceBookButton = ({
  onPress,
  title = '',
  containerStyles = {},
  textStyles,
  google = false,
  isLoading = false
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.mainContainer, containerStyles]}>
      <View style={[styles.container,isLoading&&{width:width(50)}]}>
        {google ? (
          <Image source={googleIcon} style={styles.image}/>
        ) : (
          <EvilIcons
            name={'sc-facebook'}
            color={AppColors.white}
            size={width(8)}
          />
        )}
        {
          isLoading ?
          <ActivityIndicator color={google?AppColors.primary:AppColors.white} size="large" />
          :
          <Text style={[styles.text, textStyles]}>{title}</Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default FaceBookButton;
