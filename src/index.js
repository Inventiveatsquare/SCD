import React,{useEffect} from 'react';
import Routes from './Routes/index';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './Redux/index';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';
import Base64 from './components/BTOA/Base64';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { firebase } from '@react-native-firebase/firebase';
PushNotification.createChannel(
  {
    channelId: 'channel-786**', // (required)
    channelName: 'Gremista-notification-Channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: true, // (optional) default: true
    // soundName: 'notification.mp3', // (optional) See `soundName` parameter of `localNotification` function
    // importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
  },
  (created) => console.log(`------------createChannel returned-----------'${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);
if (!global.btoa) {
  global.btoa = Base64.btoa;
}
if (!global.atob) {
  global.atob = Base64.atob;
}
LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="bottom" icon = "auto"/>
    </Provider>
  );
};
