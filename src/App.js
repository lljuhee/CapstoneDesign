import React from 'react';
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './navigations';
//import {firebase_db} from "./firebaseConfig"


export default function App() {
  return <Navigation/>
};


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
