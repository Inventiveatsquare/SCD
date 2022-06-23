import React, { forwardRef, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { width } from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import AppColors from '../../utills/AppColors';
import styles from './Styles';

const Input = ({
  title,
  prefixIcon,
  hidden = false,
  dropDown = false,
  placeholder,
  containerStyles = {},
  multiline = false,
  inputStyle = {},
  inputContainerStyles,
  textAlignVertical,
  rightIcon = false,
  source,
  value=null,
  onChangeText=null,
  maxLength=200,
  disable = true,
  nummeric = false,
  alphabets = false,
  setText = ()=>{}
},ref ) => {
  const [eye, setEye] = useState(hidden);
  const [inputText , setInputText] = useState();
  return (
    <View style={[styles.container, ,containerStyles]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.inputContainer, !disable && {backgroundColor:AppColors.primary},inputContainerStyles]}>
        {prefixIcon && (
          <View style={styles.prefixIconContainer}>{prefixIcon()}</View>
        )}
        <TextInput
          ref ={ref}
          keyboardType ={nummeric?"numeric":"default"}
          value = {value!=null?value:inputText}
          multiline={multiline}
          textAlignVertical
          textAlignVertical={textAlignVertical}
          maxLength = {maxLength}
          onChangeText = {(text)=>{
              let regex = /^[a-zA-Z ]*$/
              if(alphabets &&  regex.test(text)){
                setInputText(text)
              }
              else if(!alphabets){
                setText(text)
                setInputText(text)
              }            
          }}
          editable = {disable}
          style={[
            styles.input,
            inputStyle,
            hidden && {width: '90%'},
            dropDown && {width: '90%'},
            prefixIcon && {width: '90%'},
            hidden && prefixIcon && {width: '80%'},
            dropDown && prefixIcon && {width: '80%'},
            {color:AppColors.black}
          ]}
          placeholder={placeholder}
          placeholderTextColor={!disable ?AppColors.grey60:AppColors.sementic10}
          secureTextEntry={eye}
        />
        {hidden && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setEye(!eye)}
            style={styles.eyeContainer}>
            <Entypo
              name={eye ? 'eye' :'eye-with-line'}
              size={width(6)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        )}
        {rightIcon && (
          <TouchableOpacity
            // onPress={() => setEye(!eye)}
            style={styles.rightImage}>
            <Image source={source} />
          </TouchableOpacity>
        )}
        {dropDown && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {}}
            style={styles.eyeContainer}>
            <AntDesign
              name={'caretdown'}
              size={width(3)}
              color={AppColors.black}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default forwardRef(Input);
