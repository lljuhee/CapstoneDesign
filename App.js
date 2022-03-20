import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { TextInput,StyleSheet, Text, View, Image, Button} from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAdN3flr7ERb3BqrOiesA1fvRGPXRQuG4A",
  authDomain: "capstone-7bc19.firebaseapp.com",
  projectId: "capstone-7bc19",
  storageBucket: "capstone-7bc19.appspot.com",
  messagingSenderId: "874632972413",
  appId: "1:874632972413:web:beb94fbd629467a829c914",
  measurementId: "G-CBQDZNE2BD"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function storeHighScore(userId, password) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  set(reference, {
    password : password ,
  });
}

export default function App() {


  storeHighScore('32183538',1111);

  return (
    <View style={styles.container}>
      <Image 
        source={require('./dku_logo.png')}
        style={{width:300, height:300}}
      />
      <Text>DKU 스터디룸 예약 시스템 </Text>
      <View style={{padding : 50}}>
        <TextInput style={{borderBottomColor:'#eee',borderBottomWidth: 1,padding:1,margin:1}} placeholder="id" />
        <TextInput style={{borderBottomColor:'#eee',borderBottomWidth: 1,padding:1,margin:1}} placeholder="password" />
      </View>
      <Button color="#004898" title = "Sign In"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSize:{
    margin : 10
  },
  button:{
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 10
  }
});
