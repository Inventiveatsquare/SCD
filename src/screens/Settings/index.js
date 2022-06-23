import React,{useState,useEffect} from 'react';
import { View, Text, Switch } from 'react-native';
import Header from '../../components/Header';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './styles';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const pushMethod = async()=>{
    const push = await AsyncStorage.getItem("push")
    if(push==null){
    await AsyncStorage.setItem("push","true")
      setIsEnabled(true);
  }
  else{
    const push = await AsyncStorage.getItem("push")
    if(push=="true"){
      setIsEnabled(true);
    }  
    else{
      setIsEnabled(false);
    }
  }
}
  useEffect(()=>{
    pushMethod()
  },[])
  return (
    <ScreenWrapper
    headerUnScrollable={()=>(
      <Header 
      image
      onDrawerPress = {()=>navigation.toggleDrawer()}
      />
    )}
    >
    <View style={styles.container}>
    <Text style={styles.text}>Ativar notificações push</Text>
    <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#767577" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
    </ScreenWrapper>

  )
}

export default Settings