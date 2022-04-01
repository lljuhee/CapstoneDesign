import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home, Reservation, ReservationInquiry, QRInquiry } from '../screens';

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Reservation" component={Reservation} />
          <Stack.Screen name="ReservationInquiry" component={ReservationInquiry} />
          <Stack.Screen name="QRInquiry" component={QRInquiry} />
        </Stack.Navigator>
    );
  };

  export default StackNav;