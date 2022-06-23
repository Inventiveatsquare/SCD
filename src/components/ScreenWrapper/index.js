import { useIsFocused } from '@react-navigation/native';
import React, { forwardRef } from 'react';
import {
  Image, ImageBackground,
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AppColors from '../../utills/AppColors';
import styles from './styles';
// const backgroundImageUri = require('../../assets/images/background.png');
const ScreenWrapper = (
  {
    children,
    statusBarColor = AppColors.white,
    transclucent = false,
    scrollEnabled = false,
    backgroundImage,
    image,
    headerUnScrollable = () => null,
    footerUnScrollable = () => null,
    barStyle = 'dark-content',
  },
  ref,
) => {
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }
  const content = () => {
    return (
      <View style={styles.container}>
        <FocusAwareStatusBar
          barStyle={barStyle}
          backgroundColor={statusBarColor}
          translucent={transclucent}
        />
        {!transclucent && (
          <SafeAreaView
            style={(styles.container, {backgroundColor: statusBarColor})}
          />
        )}
        {headerUnScrollable()}
        {scrollEnabled ? (
          <KeyboardAwareScrollView
            ref={ref}
            style={styles.container}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            {children}
          </KeyboardAwareScrollView>
        ) : (
          children
        )}
        {footerUnScrollable()}
      </View>
    );
  };
  return backgroundImage ? (
    <ImageBackground
      source={backgroundImage}
      style={styles.container}
      resizeMode={'cover'}>
      {content()}
    </ImageBackground>
  ) : image ? (
    <View style={{flex: 1}}>
      {/* <Image source={backgroundImageUri} style={styles.image} /> */}
      {content()}
    </View>
  ) : (
    content()
  );
};

export default forwardRef(ScreenWrapper);
