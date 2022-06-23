import React, {useEffect,useRef} from 'react';
import { View, Text ,BackHandler ,AppState} from 'react-native'
import { WebView } from 'react-native-webview';
import styles from './styles';
import ScreenWrapper from "../../components/ScreenWrapper"
import { height, width } from 'react-native-dimension';
import Header from "../../components/Header"
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseLink = 'https://seucreditodigital.com.br/quemsomos_apppage_notpublished'
const index = ({navigation}) => {
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
        }
    }

    
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
        <WebView
        ref={webRef}
         style={{height:height(80),width:width(80)}}
         startInLoadingState={true}
         style={{width:width(100),height:height(90),backgroundColor:'white'}} 
         source={{uri:baseLink}}
         />
         </ScreenWrapper>
    )
}
export default index
