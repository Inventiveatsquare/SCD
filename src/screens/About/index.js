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
          <Header onDrawerPress={() => navigation.toggleDrawer()} image icon 
          onSearchPress={()=>navigation.navigate("SearchDetail")}
          />
        );
      }}>
      <View style={styles.container}>
        <Text style={styles.heading}>SOBRE THE GREMISTAPORTAL</Text>
        <Text style={styles.text}>
          The Portal do Gremista was born as a result of the passion of a
          fanatical fan, who already worked as a website writer, but dreamed of
          writing about what he loves most: Football and Grêmio. In 2019,
          finally this dream came out of the paper, and the Portal do Gremista
          gained a space in this gigantic world of the internet specialized in
          bringing current information in an authentic way to the tricolor fan.
          And for all this quality in bringing information about our beloved
          club, the Portal do Gremista grew rapidly, coming up among the largest
          news sites gremistas. The mission of the Gremista Portal is to keep
          the fan well informed and on top of everything that happens with
          grêmio on the pitch and behind the scenes of football. Passionate fan
          of grêmio since he knows himself by people, content writer of the
          Portal do Gremista. Cássio Coelho - Editor-in-Chief and Founder
        </Text>
      </View>
    </ScreenWrapper>
  );
};

export default Detail;
