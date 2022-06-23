import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Alert,AppState} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
import Header from '../../components/Header';
import Input from '../../components/Input';
import {width} from 'react-native-dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppColors from '../../utills/AppColors';
import SearchResult from '../../components/SearchResult';
import axios from 'axios';
import {BannerAd ,BannerAdSize} from "@react-native-admob/admob";
import AsyncStorage from '@react-native-async-storage/async-storage';
const SearchDetail = ({navigation}) => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState();
  useEffect(() => {}, []);
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
  const search = (searchKey) => {
    axios
      .get(
        `https://seucreditodigital.com.br/index.php/wp-json/wp/v2/search?search=${searchKey}&per_page=9&page=1`,
      )
      .then((res) => {
        setSearchResults(res.data);
      })
      .catch((e) => {
        Alert.alert('Something went wrong');
      });
  };
  const renderItem = ({item}) => {
    return (
      <SearchResult
        onPress={() => navigation.navigate('BlogDetail', {id: item.id})}
        onArrowPress={() => setInputValue(item.title)}
        title={item.title}
      />
    );
  };
  return (
    <ScreenWrapper
      scrollEnabled
      headerUnScrollable={() => (
        <Header menu={false} image onBackPress={() => navigation.goBack()} />
      )}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            icon
            value={inputValue}
            onChangeText={(text) => {
              setInputValue(text);
              search(text);
            }}
            autoFocus
          />
          <TouchableOpacity
            onPress={() => setIsActive(!isActive)}
            activeOpacity={0.6}
            style={[
              styles.settingContainer,
              isActive && {backgroundColor: AppColors.primary},
            ]}>
            <AntDesign name="arrowright" size={width(6)} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchResultContainer}>
          <FlatList
            data={searchResults}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default SearchDetail;
