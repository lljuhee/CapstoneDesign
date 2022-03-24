import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { TextInput,StyleSheet, Text, View, Image, Button} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import {firebase_db} from "./firebaseConfig"

function HomeScreen({ navigation }){
/*   const db = getDatabase();
  const ref = firebase_db.ref(db);
  console.log(ref);
 */
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
      <Button 
        color="#004898" title = "Sign In"
        onPress={() => navigation.push('Second')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image 
        source={require('./dku_logo.png')}
        style={{width:300, height:300}}
      />
      <Text>DKU 스터디룸</Text>
      <Button 
        color="#004898" title ="예약하기"
        onPress={() => navigation.push('Reservation')}/>
      <Button color="#004898" title ="예약조회"/>
      <Button color="#004898" title ="QR코드조회"/>
    </View>
  );
}

function ReservationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>날짜 선택</Text>     
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Reservation" component={ReservationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
