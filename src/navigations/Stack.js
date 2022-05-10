import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import {
  SignIn,
  SignUp,
  Home,
  SelectTime,
  SelectDate,
  InfoInput,
  ReservationInquiry,
  QRInquiry,
} from '../screens';
import { theme } from '../theme';

const Stack = createStackNavigator();

const StackNav = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ navigation }) => ({
        cardStyle: { backgroundColor: '#ffffff' },
        headerStyle: {
          height: 120,
          backgroundColor: '#004898',
          shadowColor: 'transparent',
        },
        headerTitleStyle: {
          fontSize: 20,
          color: '#ffffff',
        },
        headerTitleAlign: 'center',
        headerBackTitle: '',
        headerBackTitleVisible: false,
        headerBackTitleStyle: { fontSize: 26 },
        headerTintColor: '#ffffff',
        headerRight: () => (
          <MaterialIcons
            name="home"
            size={26}
            style={{ margin: 10 }}
            color={theme.background}
            onPress={() => navigation.navigate('Home')}
          />
        ),
      })}
    >
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: '스터디룸' }}
      />
      <Stack.Screen
        name="SelectDate"
        component={SelectDate}
        options={{ headerTitle: '날짜 선택' }}
      />
      <Stack.Screen
        name="SelectTime"
        component={SelectTime}
        options={{ headerTitle: '시간 / 스터디룸 선택' }}
      />
      <Stack.Screen
        name="InfoInput"
        component={InfoInput}
        options={{ headerTitle: '기본 정보 입력' }}
      />
      <Stack.Screen
        name="ReservationInquiry"
        component={ReservationInquiry}
        options={{ headerTitle: '예약 내역 조회' }}
      />
      <Stack.Screen
        name="QRInquiry"
        component={QRInquiry}
        options={{ headerTitle: 'QR코드 조회' }}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
