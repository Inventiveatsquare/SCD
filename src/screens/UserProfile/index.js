import React, {useEffect} from 'react';
import {View, Text, Image, AppState} from 'react-native';
import styles from './styles';
import ScreenWrapper from '../../components/ScreenWrapper';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import {Input} from "react-native-elements";
const UserProfile = ({navigation}) => {
  const users = useSelector((state) => state.Auth.users);
  const checkBackGroundMessages = async () => {
    const postId = await AsyncStorage.getItem('postId');
    if (postId) {
      navigation.navigate('BlogDetail', {id: postId});
    }
    await AsyncStorage.removeItem('postId');
  };
  //UseEffect for News Posts
  useEffect(() => {
    AppState.addEventListener('focus', () => {
      checkBackGroundMessages();
    });
    if(users.user.user==undefined){

    }
  }, []);
  console.log(users.user.user);
  return (
    <ScreenWrapper
      headerUnScrollable={() => {
        return (
          <Header
            onDrawerPress={() => navigation.toggleDrawer()}
            image
            icon
            onSearchPress={() => navigation.navigate('SearchDetail')}
          />
        );
      }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6',
          }}
        />
        <Text style={styles.nameText}>{users.user.user!=null?users.user.user.displayname:users.user.name}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.labelText}>Email</Text>
          <Input
            editable={false}
            containerStyle={styles.input}
            placeholder={users.user.user!=null?users.user.user.email:users.user.email}
            returnKeyType="done"
          />
          <Text style={styles.labelText}>UserName</Text>
          <Input
            editable={false}
            containerStyle={styles.input}
            placeholder={users.user.user!=null?users.user.user.username:users.user.username}
            returnKeyType="done"
          />
          <Text style={styles.labelText}>Name</Text>
          <Input
            editable={false}
            containerStyle={styles.input}
            placeholder={users.user.user!=null?users.user.user.displayname:users.user.name}
            returnKeyType="done"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default UserProfile;
