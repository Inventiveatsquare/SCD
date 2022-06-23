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
          <Header onDrawerPress={() => navigation.toggleDrawer()} image icon />
        );
      }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Anuncie no Portal Gremista</Text>
        <Text style={styles.text}>
          We are an independent news vehicle about the Grêmio Foot-Ball Porto
          Alegrense, with millions of pageviews every month, predominantly male
          audience, being more than 80% of the South and Southeast regions of
          Brazil. To receive a personalized proposal, according to your
          company's needs, download our Media Kit,and then send an email to
          marketing@portaldogremista.com.br.
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default Detail;
