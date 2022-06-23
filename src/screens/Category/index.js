import React,{useState,useEffect} from 'react'
import { View, Text,FlatList,AppState } from 'react-native'
import axios from 'axios';
import ScreenWrapper from "../../components/ScreenWrapper";
import Header from '../../components/Header';
import styles from './styles';
import Blog from '../../components/Blog';
import {useSelector} from 'react-redux';
import Loading from "../../components/Loading";
import {width} from "react-native-dimension"
import {BannerAd ,BannerAdSize} from "@react-native-admob/admob";
import SearchBlog from '../../components/SearchBlog';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Category = ({navigation}) => {
    const categoryId = useSelector(state => state.Auth.categoryId)
    const [selectedCategories,setSelectedCategories] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);
    const [detail,setDetail] = useState("");
    const mountOthers = ()=>{
        axios.get(`https://seucreditodigital.com.br/wp-json/wp/v2/posts?per_page=40&categories=${categoryId.id}`).
          then((res2)=>{
            setSelectedCategories(res2.data);
            let str = res2?.data[0]?.excerpt?.rendered;
            str = str.replace(/<[^>]+>/g, '');
            setDetail(str)        
          }).catch((e)=>{
            console.log(e);
          })
      }
      useEffect(()=>{
        mountOthers()
        setTimeout(()=>{
          setIsLoaded(true)
        },3000)
      },[categoryId])
      const renderBlogs = ({item},index)=>{
        console.log(item?.yoast_head_json?.schema["@graph"][6].name);
        return(
          <SearchBlog
          onPress={()=>navigation.navigate("BlogDetail",{id:item.id})}  
          image={item?.yoast_head_json?.og_image[0].url}
          title={item?.title?.rendered}
          date = {item?.date?.split("T")[0]}
          containerStyles={styles.containerStyles}
          Author={item?.yoast_head_json?.schema["@graph"][6].name}
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
    return (
        <ScreenWrapper
        footerUnScrollable={()=>(
          <BannerAd style={{alignSelf:"center",width:width(100)}} size={BannerAdSize.BANNER} unitId={"ca-app-pub-9769021838213495/6470328012"} />
        )}
        scrollEnabled
        headerUnScrollable={() => (
          <Header 
          onDrawerPress={() => navigation.toggleDrawer()} 
          onSearchPress={()=>navigation.navigate("SearchDetail")}
          image
          />
        )}
        >
          {
          isLoaded ?
          <>
      <BannerAd style={{alignSelf:"center",width:width(100)}} size={BannerAdSize.BANNER} unitId={"ca-app-pub-9769021838213495/1268234112"} />
          <Text style={styles.headingText}>{categoryId.category}</Text>
          <Text style={styles.detailText}>
            {detail.split("[&hellip;]")[0]}
          </Text>
          <FlatList
          removeClippedSubviews = {true}
          initialNumToRender={5}
          style ={styles.blogFlatList}
          data={selectedCategories}
          keyExtractor={(item) => item.id}
          renderItem={renderBlogs}
        />
        </>
        :
        <Loading />  
          }
        </ScreenWrapper>
    )
}

export default Category
