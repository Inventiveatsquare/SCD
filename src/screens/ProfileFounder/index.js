import React,{useState,useEffect} from 'react';
import {View, Image, Text, AppState,TouchableOpacity,FlatList} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
import Header from '../../components/Header';
import {founder, employee} from '../../utills/DummyData';
import Founder from '../../components/Founder';
import {height} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../../utills/AppColors';
import Ionicons from "react-native-vector-icons/Ionicons";
import {width} from "react-native-dimension";
import axios from 'axios';
import Blog from '../../components/Blog';
const founder02 = require('../../assets/images/founder02Squre.png');
import AsyncStorage from '@react-native-async-storage/async-storage';

const profile = ({route,navigation}) => {
  const id = route.params.id;
  console.log(id);
  const[employe,setEmploye] = useState([])
  const [posts,setPosts] = useState([])
  const mountData = (()=>{
    axios.get(`https://seucreditodigital.com.br/wp-json/wp/v2/users/${id}`).
    then((res)=>{
        setEmploye(res.data)
    })
    axios.get(`https://seucreditodigital.com.br/wp-json/wp/v2/posts?author=${id}`).
    then((postsRes)=>{
        setPosts(postsRes.data)
    })
})
useEffect(()=>{
    mountData()
},[])
const renderBlogs = ({item})=>{
  return(
  <Blog 
    onPress={()=>navigation.navigate("BlogDetail",{id:item.id})}  
    image={item?.yoast_head_json?.og_image[0].url}
    title={item?.title?.rendered}
      // owner={item.owner}
      // date={item.date}
   />
)}
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
  const renderItem = ({item}) => null;
  return (
    <ScreenWrapper scrollEnabled>
      <View style={styles.mainViewContainer}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={[AppColors.sementic50, AppColors.black]}
          style={styles.linearGradient}>
          <TouchableOpacity
          onPress={()=>navigation.goBack()}
          activeOpacity={0.6}
          style={styles.backButton}
          >
          <Ionicons
            name="ios-arrow-back-outline"
            size={width(6)}
            color={AppColors.white}
          />       
          </TouchableOpacity>
          </LinearGradient>
        <View style={styles.bottomContainer}>
          <Image source={{uri:employe?.yoast_head_json?.og_image[0].url}} style={styles.image} />
          <View style={styles.detailContainer}>
            <Text style={styles.nameText}>{employe.name}</Text>
            <Text style={styles.designationText}>
            REVISORA
              {/* CO-FOUNDER / HEAD OF TECHNOLOGY */}
            </Text>
            <Text style={styles.detailText}>
              {employe?.yoast_head_json?.description}            </Text>
          </View>
          <Text style={styles.headingText}>Posts</Text>
          <FlatList
          style={styles.blogFlatList}
          data={posts}
          numColumns={2}
          keyExtractor={(item)=>item.id}
          renderItem={renderBlogs}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default profile;
