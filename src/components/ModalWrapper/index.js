import React, {Fragment} from 'react';
import {Pressable, View} from 'react-native';
import styles from './styles';
import Modal from 'react-native-modal';
// import LinearGradient from 'react-native-linear-gradient';
// import AppColors from '../../utills/AppColors';
const ModalWrapper = ({children, isVisible, onClose}) => {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modalContainer}
      backdropColor={'transparent'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      avoidKeyboard={true}>
      <View>
        <Pressable onPress={()=>console.log("pressable ka on press")}>
        {/* <LinearGradient
          colors={[AppColors.whiteOpacity, '#E5E2E2', '#CBCBCB']}
          style={styles.shadow}></LinearGradient> */}
          </Pressable>
        <View style={styles.modalInnerContainer}>{children}</View>
      </View>
    </Modal>
  );
};

export default ModalWrapper;
