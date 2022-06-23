import React from 'react'
import { View, Text } from 'react-native'
import Modal from "react-native-modal"
import styles from './styles'
const LoadingModal = ({isVisible}) => {
    return (
       <Modal 
       isVisible={isVisible}
        style ={styles.modal}
       >
           <View style={styles.container}>

           </View>
       </Modal>
    )
}

export default LoadingModal
