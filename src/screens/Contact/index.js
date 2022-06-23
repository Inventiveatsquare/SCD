import React,{useEffect} from 'react';
import {View, Text,AppState} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Detail = ({navigation}) => {
  const checkBackGroundMessages = async()=>{
    const postId = await AsyncStorage.getItem("postId")
    if(postId){
      navigation.navigate("BlogDetail",{id:postId});
    } 
    await AsyncStorage.removeItem("postId")
  }
  //UseEffect for News Posts
  useEffect(()=>{
    AppState.addEventListener("focus",()=>{
    checkBackGroundMessages();
    });
  },[])
  return (
    <ScreenWrapper
      headerUnScrollable={() => {
        return (
          <Header onDrawerPress={() => navigation.toggleDrawer()} image icon 
          onSearchPress={()=>navigation.navigate("SearchDetail")}
          />
        );
      }}>
      <View style={styles.container}>
        <Text style={styles.heading}>FALE CONOSCO</Text>
        <Text style={styles.text}>
        ISN - Incorporacao de Sites LTDA
        CNPJ 21,356,904/0001-24
        Avenida João Wallig 660/804
        Porto Alegre - RS
        ZIP Code 91340-000
</Text>
        <Text style={styles.heading}>Editorial:</Text> 
        <Text style={styles.emaiText}>jadre@seucreditodigital.com.br</Text>
        <Text style={styles.heading}>Direct Advertising:</Text> 
        <Text style={styles.emaiText}>comercial@seucreditodigital.com.br</Text>
       
      </View>
    </ScreenWrapper>
  );
};

export default Detail;
