import React,{ useEffect, useState} from 'react'
import { View, Text,TouchableOpacity,FlatList, AppState} from 'react-native'
import styles from "./styles";
import ScreenWrapper from "../../components/ScreenWrapper"
import Header from "../../components/Header"
import Input from '../../components/Input';
import Octicons from "react-native-vector-icons/Octicons";
import { width, height } from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import Category from '../../components/Category';
import axios from 'axios';
import SearchBlog from '../../components/SearchBlog';
import Loading from '../../components/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Search = ({navigation}) => {
    const [isActive,setIsActive] = useState(false);
    const [category,setCategory] = useState([]);
    const [currentCategory,setCurrentCategory] = useState(0);
    const [selectedCategories,setSelectedCategories] = useState([]);
    const [first,setFirst] = useState(true);
    const [categoryLoaded,setCategoryLoaded] = useState(false);
    const [bottomLoaded,setBottomLoaded] = useState(false);
    //UseEffect
    useEffect(()=>{
      mountData();
    },[])
    useEffect(()=>{
      mountOthers()
    },[])

    //MountData Functions
    const mountData = ()=>{
      try{
        axios.get("https://seucreditodigital.com.br/wp-json/wp/v2/categories?per_page=20").
    then((res)=>{
      const filteredData = filterCategories([...res.data]);
      setCategory(filteredData)
      mountOthers(res.data[res.data.length-1].id)
      setFirst(false)
    })
      }
    catch(e){
      console.log(e);
    }
    }
    const filterCategories = (data=[])=>{
      const temp = data[data.length-1];
      data[data.length-1] = data[0];
      data[0] = temp;
      return data 
    }
    const mountOthers = (id=null)=>{
      setBottomLoaded(false)
        axios.get(`https://seucreditodigital.com.br/wp-json/wp/v2/posts?per_page=40&categories=${id?id:category[currentCategory]?.id}`).
        then((res2)=>{
          setSelectedCategories(res2.data)
          setBottomLoaded(true)        
        }).catch((e)=>{
          console.log(e);
        })
    }
    const renderCategory = ({item,index})=>{
      return(
        <Category 
        index={index}
        onPress={()=>{
          setCurrentCategory(index)
          mountOthers(category[index].id)
        }} 
        currentCategory = {currentCategory}
        name={item.name}
        />
      )}
      const renderItem = ({item})=>{
        return(
            <SearchBlog 
            onPress={()=>navigation.navigate("BlogDetail",{id:item.id})}
            image={item?.yoast_head_json?.og_image[0].url}
            title={item?.title?.rendered}
            detail = {item.details}
            Author={item?.yoast_head_json?.schema["@graph"][6].name}
            />        
            )
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
        scrollEnabled
        headerUnScrollable={()=>(
            <Header 
            onDrawerPress={()=>navigation.toggleDrawer()}
            />
        )}
        >
        <View style={styles.mainContainer}>
        <View style={styles.container}>
        <Text style={styles.headingText}>PESQUISA</Text>
        <Text style={styles.subHeadingText}>Notícias de todo o mundo</Text>
        <View style={styles.inputContainer}>
            <TouchableOpacity 
            activeOpacity={0.6}
            onPress={()=>navigation.navigate("SearchDetail")}
            >
              <Input disabled/>
            </TouchableOpacity>
        </View>
        <FlatList
          style ={styles.categoryListStyle}
          data={category}
          horizontal
          showsHorizontalScrollIndicator = {false}
          keyExtractor={(item) => item.id}
          renderItem={renderCategory}
          ListFooterComponent={()=>{
            return(
            <View style={{marginBottom:height(2)}}/>
            )
          }}
        />
        {
          bottomLoaded ? 
          <FlatList
            data={selectedCategories}
            showsVerticalScrollIndicator = {false}
            keyExtractor={(item)=>item.id}
            renderItem={renderItem}
          />
          :
          <Loading containerStyles={styles.loadingContainer}/>
        }
        </View>
        </View>
        </ScreenWrapper>
    )
}
export default Search
