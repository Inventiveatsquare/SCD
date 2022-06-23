import React, {useRef,useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import ModalWrapper from '../ModalWrapper/index';
import Button from '../Button';
import { height, width } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import Ionicons from "react-native-vector-icons/Ionicons";
import {Input} from "react-native-elements";

export default ModalWithTextInput = ({
  isVisible,
  onBtnPress,
  onClose,
  text = '',
  title,
  onChangeText,
  value,
  btnTitle,
  keyboardType,
  titleStyle,
  btncontainerStyle,
  inputContainerStyle={},
  message= false,
  isLoading
}) => {
  const numberRef = useRef(null);
  return (
    <ModalWrapper 
    isVisible={isVisible} 
    onClose={onClose}
    onBackdropPress={onClose}
    >
      <View
      style={styles.container}>
      {/* <Text style={styles.bottomText}>Please check your email and use the link to reset your password</Text> */}
      <Text style={styles.bottomText}>Digite seu e-mail e enviaremos um link para redefinir sua senha</Text>
      <Input
        placeholder={title}
        onChangeText={onChangeText}
        value={value}
        style={{color:AppColors.whiteSmoke}}
        inputContainerStyle={[inputContainerStyle,{marginBottom:0,marginTop:height(2)}]}
        keyboardType={keyboardType}
      />
      <Button isLoading={isLoading} textStyle={{fontSize:width(3.7)}} title={btnTitle} onPress={onBtnPress} containerStyle={btncontainerStyle} />
      </View>
    </ModalWrapper>
  );
};
export const SuccessModal = ({
  isVisible,
  onBtnPress,
  onClose,
  message = '',
  title,
  btnTitle,
  titleStyle = "Continue",
  btncontainerStyle,
  inputContainerStyle={},
  payment=false,
}) => {
  return (
    <ModalWrapper isVisible={isVisible} onClose={onClose}>
        <View style={[styles.container]}>
          <Ionicons
            name={'ios-checkmark-circle-sharp'}
            size={width(14)}
            color={AppColors.white}
            style={{alignSelf:"center"}}
          />
        <Text style={[styles.sucessMessage]}>{message}</Text>
      <Button textStyle={{fontSize:width(3.7)}} title={btnTitle} withoutIcon={true} onPress={onBtnPress} containerStyle={[styles.button,btncontainerStyle]} />
      </View>
    </ModalWrapper>
  );
};