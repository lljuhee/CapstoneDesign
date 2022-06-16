import React, { useState, useContext } from 'react';
import { Button, Image, Input } from '../components';
import { ThemeContext } from 'styled-components/native';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signin } from '../firebase';
import { Alert } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: ${({ theme }) => theme.background};
`;

const LOGO =
  'https://firebasestorage.googleapis.com/v0/b/capstone-7bc19.appspot.com/o/dku_logo.png?alt=media';

const Signin = ({ navigation }) => {
  const theme = useContext(ThemeContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _handleSigninBtnPress = async () => {
    try {
      const user = await signin({ email, password });
      navigation.navigate('Home', { user });
    } catch (e) {
      Alert.alert('Signin Error', e.message);
    }
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={20}
      contentContainerStyle={{ flex: 1 }}
    >
      <Container>
        <Image url={LOGO} />
        <Text style={{ color: theme.main, fontSize: 18, fontWeight: 'bold' }}>
          DKU 스터디룸 예약 시스템
        </Text>

        <Input
          //label="Email"
          placeholder="Email"
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          // label="Password"
          placeholder="Password"
          returnKeyType="done"
          isPassword={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={{ margin: 8 }}></View>
        <Button
          title="로그인"
          onPress={_handleSigninBtnPress}
          textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
        />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
          containerStyle={{ marginTop: 0, backgroundColor: 'transparent' }}
          textStyle={{ color: theme.btnTextLink, fontSize: 12 }}
        />
        <StatusBar style="auto" />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signin;
