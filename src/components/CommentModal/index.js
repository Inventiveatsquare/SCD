import React from 'react'
import { View, Text } from 'react-native'
import Modal from "react-native-modal";
import styles from "./styles"
const commentModal = ({isVisible,onClose}) => {
    return (
        <Modal
        style={styles.modalStyles}
        isVisible={isVisible}
        onBackButtonPress={onClose}
        onBackButtonPress={onClose}
        >
        <View style={styles.container}>
            <Text></Text>
        </View>
    </Modal>
    )
}

export default commentModal
