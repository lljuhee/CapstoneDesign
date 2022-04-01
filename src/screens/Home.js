import React from 'react';
import MyButton from '../component/MyButton';
import { Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

const Home = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Image 
          source={require('./dku_logo.png')}
          style={{width:300, height:300}}
        />
        <Text>DKU 스터디룸</Text>
        <MyButton title = "예약하기" onPress={() => navigation.push('Reservation')}/>
        <MyButton title = "예약조회" onPress={() => navigation.push('ReservationInquiry')}/>
        <MyButton title = "QR코드조회" onPress={() => navigation.push('QRInquiry')}/>
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

  export default Home;