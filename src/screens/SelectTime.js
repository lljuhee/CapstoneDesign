import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Button } from '../components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const SelectTime = ({ navigation }) => {
  return (
    <Container>
      <Text>시간 선택</Text>
      <Button
        title="다음"
        onPress={() => navigation.push('InfoInput')}
        textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
      />
      <StatusBar style="auto" />
    </Container>
  );
};

export default SelectTime;
