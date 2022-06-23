import React, {useEffect} from 'react';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from "../screens/Home";
import BlogDetail from '../screens/BlogDetail';
import Search from "../screens/Search";
import SearchDetail from "../screens/SearchDetail";
import About from '../screens/About';
import Contact from '../screens/Contact';
import Detail from '../screens/Detail';
import Employee from "../screens/Employee";
import Profile from "../screens/Profile";
import CustomDrawerContent from "./DrawerContent";
import Category from "../screens/Category";
import WebView from "../screens/WebView";
import Youtube from "../screens/Youtube";
import UserProfile from '../screens/UserProfile';
import RNBootSplash from 'react-native-bootsplash';
import Settings from "../screens/Settings";
import Policy from "../screens/Policy";
import Teams from "../screens/Teams";
// import Replies from '@react-native-firebase/app';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function Routes() {
  const HomeStack = ()=>{
    return(
      <Stack.Navigator initialRouteName={"Home"} headerMode="none">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BlogDetail" component={BlogDetail} />
          <Stack.Screen name="SearchDetail" component={SearchDetail} />
        </Stack.Navigator>
    )
  };
  const SearchStack = ()=>{
    return(
      <Stack.Navigator initialRouteName="Search" headerMode="none">
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="SearchDetail" component={SearchDetail} />
          <Stack.Screen name="BlogDetail" component={BlogDetail} />
        </Stack.Navigator>
    )
  };
  const EmployeeStack = ()=>{
    return(
      <Stack.Navigator initialRouteName="Employee" headerMode="none">
          <Stack.Screen name="Employee" component={Employee} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="BlogDetail" component={BlogDetail} />
          <Stack.Screen name="SearchDetail" component={SearchDetail} />
        </Stack.Navigator>
    )
  }
  const AboutStack = ()=>(
    <Stack.Navigator initialRouteName="Employee" headerMode="none">
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="SearchDetail" component={SearchDetail} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
    </Stack.Navigator>
  )
  const ContactStack = ()=>(
    <Stack.Navigator initialRouteName="Employee" headerMode="none">
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="SearchDetail" component={SearchDetail} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
    </Stack.Navigator>
  )
  const DetailStack = ()=>(
    <Stack.Navigator initialRouteName="Employee" headerMode="none">
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="SearchDetail" component={SearchDetail} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
    </Stack.Navigator>
  )
  const CategoryStack = ()=>(
    <Stack.Navigator initialRouteName="Category" headerMode="none">
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
    </Stack.Navigator>
  )
  const YoutubeStack = ()=>(
    <Stack.Navigator initialRouteName="Youtube" headerMode="none">
      <Stack.Screen name="Youtube" component={Youtube} />
    </Stack.Navigator>
  )
  const logoutMethod = ()=>{

  }
  return (
    <NavigationContainer onReady={()=>RNBootSplash.hide()}>
        <Drawer.Navigator initialRouteName={"Home"}
        drawerContent={(props) => <CustomDrawerContent logout={logoutMethod}  {...props} />}
        > 
          <Drawer.Screen name={"Home"} component={HomeStack} />
          <Drawer.Screen name="Search" component={SearchStack} />
          <Drawer.Screen name="About" component={AboutStack}/>
          <Drawer.Screen name="Contact" component={ContactStack}/>
          <Drawer.Screen name="Detail" component={DetailStack}/>
          <Drawer.Screen name="EmployeeStack" component={EmployeeStack}/>
          <Drawer.Screen name="WebView" component={WebView}/>
          <Drawer.Screen name="Youtube" component={YoutubeStack}/>
          <Drawer.Screen name="Settings" component={Settings}/>
          <Drawer.Screen name="UserProfile" component={UserProfile}/>
          <Drawer.Screen name="Policy" component={Policy}/>
          <Drawer.Screen name="Teams" component={Teams}/>
          
         
                  
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

// https://www.googleapis.com/youtube/v3/playlistItems?playlistId=&maxResults=10&part=snippet%2CcontentDetails&key=