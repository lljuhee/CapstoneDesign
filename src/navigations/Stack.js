import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn, SignUp, Home, SelectTime, SelectDate, InfoInput, ReservationInquiry, QRInquiry } from '../screens';

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            cardStyle: { backgroundColor : '#ffffff'},
            headerStyle: {
              height : 120,
              backgroundColor :'#004898',
            },
          headerTitleStyle : {
            fontSize : 24,
            color: '#ffffff',
          },
          headerTitleAlign : 'center',

          headerBackTitle : '',
          headerBackTitleVisible : false,
          headerBackTitleStyle: {fontSize:26},
          headerTintColor : '#ffffff',
    
          }}
        
        >
          <Stack.Screen name="SignIn" component={SignIn} options = {{ headerShown : false }}/>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SelectDate" component={SelectDate} />
          <Stack.Screen name="SelectTime" component={SelectTime} />
          <Stack.Screen name="InfoInput" component={InfoInput} />
          <Stack.Screen name="ReservationInquiry" component={ReservationInquiry} />
          <Stack.Screen name="QRInquiry" component={QRInquiry} />
        </Stack.Navigator>
    );
  };

  export default StackNav;