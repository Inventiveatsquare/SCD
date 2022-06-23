import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import { height } from 'react-native-dimension';
import {setRoute} from "../../Redux/Actions/Auth"
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/images/Glogo.png';
import WheeldLogo from '../../assets/images/Logo.png';
import ScreenWrapper from '../../components/ScreenWrapper';
import AppColors from '../../utills/AppColors';
import styles from './styles';
export default function Splash({navigation}) {
  const user = useSelector((state) => state.Auth.user);
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const imageSize = useRef(new Animated.Value(height(20.5))).current;
  const logoVisible = useRef(new Animated.Value(height(0))).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0.55,
      duration: 1500,
    }).start();
    Animated.timing(imageSize, {
      toValue: height(72.5),
      duration: 1500,
    }).start();
  };
  useEffect(() => {
    fadeIn();
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0.2,
        duration: 1500,
      }).start();
      Animated.timing(imageSize, {
        toValue: height(72.5) + height(72.5),
        duration: 1500,
      }).start();
      Animated.timing(logoVisible, {
        toValue: height(6),
        duration: 1500,
      }).start();
    }, 1500);
    setTimeout(() => {
      dispatch(setRoute("Login"))
      navigation.navigate('Login',{from:"Splash"});
    }, 3500);
  }, []);
  return (
    <ScreenWrapper statusBarColor={AppColors.transparent} transclucent={false}>
      <View style={styles.mainViewContainer}>
        <Animated.Image
          source={logo}
          style={[
            styles.logoImage,
            {opacity: fadeAnim, height: imageSize, width: imageSize},
          ]}
        />
        <Animated.Image
          source={WheeldLogo}
          style={[styles.wheeldLogo, {height: logoVisible}]}
        />
      </View>
    </ScreenWrapper>
  );
}
