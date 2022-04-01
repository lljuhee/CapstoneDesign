import React from 'react';
import MyButton from '../component/MyButton';
import { TextInput, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

const Login = ({ navigation }) => {
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
    
          { /* <TouchableOpacity></TouchableOpacity> */ }
          <MyButton title = "Sign In" onPress={() => navigation.push('Home')}/>
          <StatusBar style="auto" />
        </View>
      );
   
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
    export default Login;