import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home, Reservation, ReservationInquiry, QRInquiry } from '../screens';

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
          <Stack.Screen name="Login" component={Login} options = {{ headerShown : false }}/>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Reservation" component={Reservation} />
          <Stack.Screen name="ReservationInquiry" component={ReservationInquiry} />
          <Stack.Screen name="QRInquiry" component={QRInquiry} />
        </Stack.Navigator>
    );
  };

  export default StackNav;