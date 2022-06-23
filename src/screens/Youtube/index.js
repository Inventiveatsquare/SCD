import React, {useEffect,useRef} from 'react';
import { View, Text ,BackHandler,AppState } from 'react-native'
import { WebView } from 'react-native-webview';
import styles from './styles';
import ScreenWrapper from "../../components/ScreenWrapper"
import { height, width } from 'react-native-dimension';
import Header from "../../components/Header";
import {BannerAd ,BannerAdSize} from "@react-native-admob/admob";
const baseLink = 'https://www.youtube.com/c/SeuCr%C3%A9ditoDigital';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Youtube = ({navigation}) => {
    const webRef = useRef(null);
    useEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',backHandler)
        return ()=>{
            BackHandler.removeEventListener('hardwareBackPress',backHandler)
        }
    })


   

    const backHandler = () => {
        if(webRef.current.startUrl != baseLink){
            webRef.current.goBack();
            return true;
        }}
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
        headerUnScrollable={()=>(
            <Header
            onDrawerPress={() => navigation.toggleDrawer()} 
            onSearchPress={()=>navigation.navigate("SearchDetail")}
            image
            icon={false}
            />
        )}
        >
        <View style={styles.webViewContainer}>     
        <View style={styles.bannerContainer}>
            <BannerAd style={{alignSelf:"center",width:width(100)}} size={BannerAdSize.BANNER} unitId={"ca-app-pub-9769021838213495/6470328012"}/>
        </View>
        <WebView
        containerStyle={{marginTop:-height(5),zindex:-1}}
        ref={webRef}
        
         startInLoadingState={true}
         style={{width:width(100),height:height(90),backgroundColor:'white'}} 
         source={{uri:baseLink}}
         />
         </View>
         </ScreenWrapper>
    )
}
export default Youtube
