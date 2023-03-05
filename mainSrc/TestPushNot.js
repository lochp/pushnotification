import { View, Text } from 'react-native'
import React from 'react'
import {PermissionsAndroid} from 'react-native'
import messaging from '@react-native-firebase/messaging';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

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


const TestPushNot = () => {
  return (
    <View>
      <Text>TestPushNot</Text>
    </View>
  )
}

export default TestPushNot