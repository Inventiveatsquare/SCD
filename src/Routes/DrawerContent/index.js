import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {height, width} from 'react-native-dimension';
import Feather from 'react-native-vector-icons/Feather';
import AppColors from '../../utills/AppColors';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import {setCategoryId} from '../../Redux/Actions/Auth';
import { useDispatch} from 'react-redux';
const Logo = require('../../assets/images/Logo.png');
const Row = ({focused = false, title = 'title', Icon}) => {
  return (
    <View style={[styles.row,focused&&{backgroundColor:AppColors.primary10}]}>
      <View style={[styles.row,{paddingVertical:height(0),marginLeft:width(5)}]}>
      {Icon(focused)}
      <Text style={[styles.labelText, focused && {color: AppColors.primary}]}>
        {title}
      </Text>
      </View>
    </View>
  );
};
const CategoryRow = ({focused = false, title = 'title', Icon,containerStyles={}}) => {
  return (
    <View style={[styles.categoryRow,containerStyles,focused&&{backgroundColor:AppColors.primary10,borderRadius:width(5)}]}>
      <View style={[styles.categoryInnerRow,{paddingVertical:height(0)}]}>
      {Icon(focused)}
      <Text style={[styles.categoryLabelText, focused && {color: AppColors.primary}]}>
        {title}
      </Text>
      </View>
    </View>
  );
};
const CustomDrawerContent = (props) => {
  const dispatch = useDispatch()
  return (
    <DrawerContentScrollView {...props} style={styles.menuContainer1}>
      <View style={styles.menuContainer}>
        <Image source={Logo} style={styles.image} />
        <View style={styles.container}>
          <DrawerItem
          style ={{marginVertical:-height(0)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ===
                    props.state.routes.findIndex((e) => e.name === 'Home')
                  }
                  title="noticias"
                  Icon={(focused) => (
                    <Feather
                      travel
                      name="home"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
          style ={{marginTop:-height(1)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'Search')
                  }
                  title="PESQUISA"
                  Icon={(focused) => (
                    <Feather
                      travel
                      name="search"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('Search');
            }}
          />
           {/* <DrawerItem
           style ={{marginTop:-height(3)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'About')
                  }
                  title="SOBRE"
                  Icon={(focused) => (
                    <Feather
                      travel
                      name="info"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('About');
            }}
          />
          <DrawerItem
          style ={{marginTop:-height(3)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'Contact')
                  }
                  title="FALE CONOSCO"
                  Icon={(focused) => (
                    <AntDesign
                      travel
                      name="contacts"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('Contact');
            }}
          />
           <DrawerItem
           style ={{marginTop:-height(3)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'Detail')
                  }
                  title="ANUNCIE CONOSCO"
                  Icon={(focused) => (
                    <MaterialCommunityIcons
                      travel
                      name="details"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('Detail');
            }}
          /> */}
          <DrawerItem
          style ={{marginTop:-height(3)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'WebView')
                  }
                  title="Quem Somos"
                  Icon={(focused) => (
                    <AntDesign
                      travel
                      name="table"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('WebView');
            }}
          />
         
          <DrawerItem
          style ={{marginTop:-height(3)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'Teams')
                  }
                  title="EQUIPE DO SEU CRÉDITO DIGITAL"
                  Icon={(focused) => (
                    <AntDesign
                      travel
                      name="table"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('Teams');
            }}
          />

          <DrawerItem
          style ={{marginTop:-height(3)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'Policy')
                  }
                  title="POLITICA DE PRIVACIDADE"
                  Icon={(focused) => (
                    <AntDesign
                      travel
                      name="table"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('Policy');
            }}
          />
          <DrawerItem
          style ={{marginTop:-height(3)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'Youtube')
                  }
                  title="Youtube"
                  Icon={(focused) => (
                    <AntDesign
                      travel
                      name="youtube"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('Youtube');
            }}
          />
          {/* <DrawerItem
          style ={{marginTop:-height(3)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'Settings')
                  }
                  title="Settings"
                  Icon={(focused) => (
                    <AntDesign
                      travel
                      name="setting"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('Settings');
            }}
          /> */}
          {/* <DrawerItem
          style ={{marginTop:-height(3)}}
            label={() => {
              return (
                <Row
                  focused={
                    props.state.index ==
                    props.state.routes.findIndex((e) => e.name === 'UserProfile')
                  }
                  title="Profile"
                  Icon={(focused) => (
                    <SimpleLineIcons
                      travel
                      name="user"
                      size={25}
                      color={focused ? AppColors.white : AppColors.white}
                    />
                  )}
                />
              );
            }}
            onPress={() => {
              props.navigation.navigate('UserProfile');
            }}
          /> */}
        </View>
      </View>


      {/* <TouchableOpacity 
      activeOpacity={0.6}
      style={styles.logoutContainer}
      onPress={props.logout}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity> */}
     
      
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;
