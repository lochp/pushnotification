import { View, Text, Alert } from 'react-native'
import React, { useEffect } from 'react'
/* import {PermissionsAndroid} from 'react-native' */
import messaging from '@react-native-firebase/messaging';

/* PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS); */

async function requestUserPermission(){
    const authStatus = await messaging().requestPermission();
    const enabled = 
        authStatus == messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus == messaging.AuthorizationStatus.PROVISIONAL;
    
    if (enabled){
        console.log('Authorization status: ', authStatus);
    }else {
        console.log('Authorization Failed');
    }
}

async function getToken(){
    const deviceToken = await messaging().getToken();
    console.log('Device token: ', deviceToken);
}

const Notification = () => {

    useEffect( () => {
        const notificationHandler = async()=>{
            await requestUserPermission();
            await getToken();

            messaging().onNotificationOpenedApp( remoteMessage => {
                Alert.alert('Open notification!');
                console.log("Remote message: ", remoteMessage);
            })

            const unsubscribe = messaging().onMessage( async remoteMessage => {
                console.log('Foreground: ', remoteMessage);
                Alert.alert("Notification in Forceground");
            });
            return unsubscribe;
        }
        notificationHandler();
    }, []);

  return (
    <View>
      <Text>Notification</Text>
    </View>
  )
}

export default Notification