import React, {useEffect,useState,useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList,Platform,AppState} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import Header from '../../components/Header';
import News from '../../components/News';
import Category from '../../components/Category';
import Blog from '../../components/Blog';
import axios from 'axios';
import {width,height} from "react-native-dimension"
import {debounce,throttle} from "lodash";
import LoadingModal from "../../components/Modal";
import Loading from '../../components/Loading';
import {BannerAd ,BannerAdSize} from "@react-native-admob/admob";
import SearchBlog from '../../components/SearchBlog';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const unitID = Platform.select({
    ios: "ca-app-pub-3940256099942544/2934735716",
    android: "ca-app-pub-5416001992516754/9276670355",
  });
const Home = ({navigation}) => {
  const users = useSelector(state => state.Auth.users)
  const [posts,setPosts] = useState([]);
  const [newsOffset,setNewsOffset] = useState(10);
  const [currentCategory,setCurrentCategory] = useState(0);
  const [category,setCategory] = useState([]);
  const [selectedCategories,setSelectedCategories] = useState([]);
  const [categoryPostPage,setCategoryPostPage] = useState(1);
  const [isLoaded,setIsLoaded] = useState(false);
  const [bottomLoaded,setBottomLoaded] = useState(false);
  const [totalPages,setTotalPages] = useState(1);
  const [isVisible,setIsVisible] = useState(false);
  const [categoryPostOffset,setCategoryPostOffset] = useState(0);
    const getNewsPosts = ()=>{
      axios.get(`https://seucreditodigital.com.br/wp-json/wp/v2/posts?per_page=10&offset=${newsOffset}`)
      .then((res)=>{
        setPosts([ ...posts , ...res.data])
      })
      .catch((e)=>{
        console.log("Can'get News Posts");
      })
    }
    const getCategories = ()=>{
      axios.get(`https://seucreditodigital.com.br/wp-json/wp/v2/categories?per_page=20`)
      .then((res)=>{
        const filteredData = filterCategories([...res.data]);
        setCategory(filteredData)
        mounOthers(res.data[res.data.length-1].id)
      })
      .catch((e)=>{
        console.log("Can'get News Posts");
      })
    }
    const filterCategories = (data=[])=>{
      const temp = data[data.length-1];
      data[data.length-1] = data[0];
      data[0] = temp;
      return data 
    }
  const mounOthers = (id=null)=>{
    setBottomLoaded(false)
    axios.get(`https://seucreditodigital.com.br/wp-json/wp/v2/posts?per_page=40&offset=${categoryPostOffset}&categories=${id?id:category[currentCategory]?.id}`)
      .then((res2)=>{
        if(res2.status!=400){
          setTotalPages(res2?.headers["x-wp-totalpages"]);
          setSelectedCategories(res2.data)
          setIsLoaded(true)
          setBottomLoaded(true)
        }
      }
    ).catch((e)=>{
        console.log("Others Posts Request Failes");
        console.log(e);
      })
    }

  // Debouncing Defination
  debounceMountOthers = debounce(mounOthers,1000)
  debounceSetCategoryPostPage = debounce(useCallback(()=>{setCategoryPostPage((prev)=>{
    if(prev==1)
    return 2
    else
    return (prev+1)
  } )},[]),1000)
  const checkBackGroundMessages = async()=>{
    const postId = await AsyncStorage.getItem("postId")
    if(postId){
      navigation.navigate("BlogDetail",{id:postId});
    } 
    await AsyncStorage.removeItem("postId")
  }
  //UseEffect for News Posts
  useEffect(()=>{
    checkBackGroundMessages();
    getNewsPosts();
  },[newsOffset])
  useEffect(()=>{
    getCategories()     
  },[]);
  const renderItem = ({item,index}) => {
    if(item){
      return (
        <News
        index={index}
          onPress={()=>navigation.navigate("BlogDetail",{id:item.id})}
          image={item?.yoast_head_json?.og_image?item?.yoast_head_json?.og_image[0]?.url:"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
          title={item?.title?.rendered}
          date = {item?.date?.split("T")[0]}
        />
      );
      } 
  };
  const renderCategory = ({item,index})=>{
    return(
    <Category
    index={index}
    onPress={()=>{
      setCurrentCategory(index)
      mounOthers(category[index].id)
    }} 
    currentCategory = {currentCategory}
    name={item.name}
    />
    )}
  const renderBlogs = ({item,index})=>{
    if(selectedCategories.length==index){
      setBottomLoaded(true)
    }
    return(
    <SearchBlog
      index={index} 
      onPress={()=>navigation.navigate("BlogDetail",{id:item.id})}  
      image={item?.yoast_head_json?.og_image[0]?.url?item?.yoast_head_json?.og_image[0].url:"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"}
      title={item?.title?.rendered}
      date = {item?.date?.split("T")[0]}
      containerStyles={styles.containerStyles}
      Author={item?.yoast_head_json?.schema["@graph"][6].name}
     />
  )
}
  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    // if(layoutMeasurement.height + contentOffset.y >= contentSize.height-height(0.4)){
    //   if(bottomLoaded && (categoryPostPage < totalPages)){
    //     setBottomLoaded(false)
    //     debounceSetCategoryPostPage()
    //     setTimeout(()=>{
    //       debounceMountOthers();  
    //     },1000)
    //   }
    // }
  };
  return (
    <ScreenWrapper
    // transclucent
    footerUnScrollable={()=>(
      <BannerAd style={{alignSelf:"center",width:width(100)}} size={BannerAdSize.BANNER} unitId={"ca-app-pub-9769021838213495/6470328012"} />
    )}
    scrollEnabled
    onScroll={({nativeEvent})=>isCloseToBottom(nativeEvent)}
      headerUnScrollable={() => (
        <Header 
        onDrawerPress={() => navigation.toggleDrawer()} 
        onSearchPress={()=>navigation.navigate("SearchDetail")}
        image
        icon
        />
      )}>
        {isLoaded ?
      (
        <View style={styles.container}>
          <BannerAd style={{alignSelf:"center",width:width(100)}} size={BannerAdSize.BANNER} unitId={"ca-app-pub-9769021838213495/1268234112"} />
        <View style={styles.heading}>
          <Text style={styles.h1}>NOTÍCIAS</Text>
          <TouchableOpacity activeOpacity={0.6}>
          </TouchableOpacity>
        </View>
        <FlatList
          style ={styles.newsFlatList}
          data={posts}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item,index) => {return item.id+index+(Math.random()*1000)}}
          onEndReached={()=>{
            setNewsOffset(newsOffset+10)
          }}
          renderItem={renderItem}
        />
        <View style={styles.heading}>
          <Text style={styles.h1}>RECOMENDADOS</Text>
          <TouchableOpacity activeOpacity={0.6}>
          </TouchableOpacity>
        </View>
        <FlatList
          style ={styles.categoryListStyle}
          data={category}
          horizontal
          showsHorizontalScrollIndicator = {false}
          keyExtractor={(item,index) => {return item.id+index+(Math.random()*1000)}}
          renderItem={renderCategory}
        />
        {
          bottomLoaded ?
          <FlatList
          style ={styles.blogFlatList}
          data={selectedCategories}
          extraData={selectedCategories}
          showsVerticalScrollIndicator= {false}
          keyExtractor={(item,index) => {return item.id+index+(Math.random()*1000)}}
          renderItem={renderBlogs}
          onEndReached={()=>{
            // setCategoryPostOffset(categoryPostOffset+10)
            // mounOthers()
          }}
          ListFooterComponent={()=>{
            return(
            <View style={{marginBottom:height(2)}}/>
            )
          }}
        />
        :
        <Loading containerStyles={{height:height(45)}}/>
        }
      </View>   
      )
      :
      <Loading />
      }
      <LoadingModal 
        isVisible={isVisible}      
      />
    </ScreenWrapper>
  );
};

export default Home;
