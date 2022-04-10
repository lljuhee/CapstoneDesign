import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import {Button, Image, Input} from '../components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const SelectDate = ({ navigation }) => {
  return (
    <Container>
      <Text>날짜 선택</Text>
      <Button title = "다음" onPress={() => navigation.push('SelectTime')}/>
      <StatusBar style="auto" />
    </Container>
  );
};
  
export default SelectDate;