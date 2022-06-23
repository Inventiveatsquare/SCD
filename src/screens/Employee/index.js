import React, {useEffect, useState,useCallback} from 'react';
import {View, Text, FlatList, Linking,AppState} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
import Header from '../../components/Header';
import Founder from '../../components/Founder';
import {width, height} from 'react-native-dimension';
import AppColors from '../../utills/AppColors';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setUsers} from '../../Redux/Actions/Auth';
import Loading from '../../components/Loading';
import {founder,reader,youtube,technology } from "../../utills/DummyData";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Employee = ({navigation}) => {
  //    const[employe,setEmploye] = useState([]);
  // const [founder, setFounder] = useState([]);
  const [loaded, setIsloaded] = useState(true);
  const employe = useSelector((state) => state.Auth.users);
  const dispatch = useDispatch();
  const mountData = () => {
    axios
      .get('https://seucreditodigital.com.br/wp-json/wp/v2/users?per_page=40')
      .then((res) => {
        dispatch(setUsers(res.data));
      });
  };
  const filterData = () => {
    const array = [];
    employe.forEach((item) => {
      if (item.id == '3' || item.id == '4') {
        array.push(item);
        return;
      }
    });
    setFounder([...array]);
  };
  useEffect(() => {
    // mountData();
    // setTimeout(() => {
    //   filterData();
    //   setIsloaded(true);
    // }, 2000);
  }, []);

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
  const OpenURL =async ( url ) => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }  
  };
  
  const renderItem = ({item}) => {
      return (
        <Founder
        onFaceBookPress={()=>{OpenURL("https://www.facebook.com/portaldogremista")}}
        onTwitterPress={()=>{OpenURL("https://twitter.com/portaldgremista")}}
        onMailPress={()=>{}}
          onPress={() => navigation.navigate('Profile', {id: item})}
          image={item.image}
          name={item.name}
          detail={item.detail}
          designation={item.designation}
        />
      );
  };
  // const renderEmployees = ({item}) => (
  //   <Founder
  //     employee
  //     id={item.id}
  //     onPress={() => navigation.navigate('Profile', {id: item.id})}
  //     image={item?.yoast_head_json?.og_image[0].url}
  //     name={item.name}
  //     designation={item.designation}
  //     detail={item.detail}
  //   />
  // );
  const renderEmployees = ({item}) => (
    <Founder
      employee
      id={item.id}
      onPress={() => navigation.navigate('Profile', {id: item})}
      image={item.image}
      name={item.name}
      designation={item.designation}
      detail={item.detail}
    />
  );
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <Header 
        onDrawerPress={() => navigation.toggleDrawer()} 
        image icon 
        onSearchPress={()=>navigation.navigate("SearchDetail")}
        />
      )}>
      {loaded ? (
        <View style={styles.mainViewContainer}>
          <Text style={styles.headingText}>PORTAL DO GREMISTA</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginTop: height(2)}}
            data={founder}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
          <Text
            style={[
              styles.headingText,
              {marginTop: height(2), textAlign: 'left'},
            ]}>
            REDAÇÃO
          </Text>
          <FlatList
            style={{marginTop: height(2)}}
            data={reader}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderEmployees}
          />
           <Text
            style={[
              styles.headingText,
              {marginTop: height(2), textAlign: 'left'},
            ]}>
            CANAL DO YOUTUBE
          </Text>
          <FlatList
            style={{marginTop: height(2)}}
            data={youtube}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderEmployees}
          />
           <Text
            style={[
              styles.headingText,
              {marginTop: height(2), textAlign: 'left'},
            ]}>
           TECNOLOGIA
          </Text>
          <FlatList
            style={{marginTop: height(2)}}
            data={technology}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={renderEmployees}
          />
        </View>
      ) : (
      <Loading />
        //   <View style={{justifyContent:"center",alignItems:"center",width:width(100),height:height(70)}}>
      //   <ActivityIndicator size={width(16)} color={AppColors.primary}/>  
      // </View>
      )}
    </ScreenWrapper>
  );
};

export default Employee;
