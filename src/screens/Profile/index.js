import React,{useState,useEffect} from 'react';
import {View, Image, Text, TouchableOpacity,AppState} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
// import Header from '../../components/Header';
// import {founder, employee} from '../../utills/DummyData';
// import Founder from '../../components/Founder';
// import {height} from 'react-native-dimension';
import LinearGradient from 'react-native-linear-gradient';
import AppColors from '../../utills/AppColors';
import Ionicons from "react-native-vector-icons/Ionicons";
import {width} from "react-native-dimension";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import Blog from '../../components/Blog';
// import { useDispatch, useSelector } from 'react-redux';
// import {reader,youtube,technology } from "../../utills/DummyData"
// const founder02 = require('../../assets/images/founder02Squre.png');

const Profile = ({route,navigation}) => {

  // const id = route.params.id;
  let item = route.params.id;
  // const[employe,setEmploye] = useState([])
  // const [posts,setPosts] = useState([])
  // const employe = useSelector((state) => state.Auth.users);
  const [loaded,setLoaded] = useState(true)
//   const mountData = (()=>{
//     axios.get(`https://portaldogremista.com.br/wp-json/wp/v2/users/${id}`).
//     then((res)=>{
//         setEmploye(res.data)
//     })
//     axios.get(`https://portaldogremista.com.br/wp-json/wp/v2/posts?author=${id}`).
//     then((postsRes)=>{
//       setPosts(postsRes.data)
//     })
// })
// useEffect(()=>{
//     mountData()
//     setLoaded(true)
// },[])
// const renderBlogs = ({item})=>{
//   return(
//   <Blog 
//     onPress={()=>navigation.navigate("BlogDetail",{id:item.id})}  
//     image={item?.yoast_head_json?.og_image[0].url}
//     title={item?.title?.rendered}
//       // owner={item.owner}
//       date={item.date}
//    />
// )}
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
          <Image source={{uri:item.image}} style={styles.image} />
          <View style={styles.detailContainer}>
            <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.designationText}>
                  {item.designation}
                </Text>
           </View>
          </View> 
      </View>
      </ScreenWrapper>
      )
};

export default Profile;
// {
//   loaded ?
//   (<>
//   <View style={styles.mainViewContainer}>
//   <LinearGradient
//     start={{x: 0, y: 0}}
//     end={{x: 1, y: 1}}
//     colors={[AppColors.sementic50, AppColors.black]}
//     style={styles.linearGradient}>
//     <TouchableOpacity
//     onPress={()=>navigation.goBack()}
//     activeOpacity={0.6}
//     style={styles.backButton}
//     >
//     <Ionicons
//       name="ios-arrow-back-outline"
//       size={width(6)}
//       color={AppColors.white}
//     />       
//     </TouchableOpacity>
//     </LinearGradient>
//   <View style={styles.bottomContainer}>
//   <Image source={{uri:employe?.yoast_head_json?.og_image[0].url}} style={styles.image} />
//     <Image source={{uri:employe?.yoast_head_json?.og_image[0].url}} style={styles.image} />
//     <View style={styles.detailContainer}>
//       <Text style={styles.nameText}>{employe.name}</Text>
//       {
//           ( id == 3 || id==4) ?
//           <>
//           <Text style={styles.designationText}>
//           {/* REVISORA */}
//             CO-FOUNDER / HEAD OF TECHNOLOGY
//           </Text>
//           <Text style={styles.designationText}>
//             REVISORA
//             {/* CO-FOUNDER / HEAD OF TECHNOLOGY */}
//           </Text>
//           </>
//           :
//           <Text style={styles.designationText}>
//             REDATOR
//             {/* CO-FOUNDER / HEAD OF TECHNOLOGY */}
//           </Text>
//       }
      
//       <Text style={styles.detailText}>
//         {employe?.yoast_head_json?.description}            
//         </Text>
//     </View>
//     {/* <Text style={styles.headingText}>Posts</Text>
//     <FlatList
//     style={styles.blogFlatList}
//     data={posts}
//     numColumns={2}
//     keyExtractor={(item)=>item.id}
//     renderItem={renderBlogs}
//     /> */}
//   </View>
// </View>
// </>
// )
// :
// <ActivityIndicator color={"#000"} size={width(10)}/>
// }