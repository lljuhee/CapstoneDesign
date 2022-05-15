import React, { useState } from 'react';
import { Button, Input } from '../components';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import firestore from '../firebase';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const InfoInput = ({ navigation }) => {
  const [addName, setAddName] = useState('');
  const [addStudentid, setAddStudentid] = useState('');
  const addCollection = firestore().collection('users');

  const addText = async () => {
    try {
      await addCollection.add({
        name: addName,
        studentid: addStudentid,
      });
      setAddName('');
      setAddStudentid('');
      console.log('Create Complete!');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Input
          label="예약자 이름"
          placeholder="이름"
          value={addName}
          onChangeText={(e) => setAddName(e.nativeEvent.text)}
        />
        <Input
          label="학번"
          placeholder="학번"
          value={addStudentid}
          onChangeText={(e) => setAddStudentid(e.nativeEvent.text)}
        />
        <Input label="핸드폰번호" placeholder="핸드폰번호" />
        <Input label="사용 인원 수" placeholder="사용 인원 수" />
        <Input
          label="사용 목적"
          placeholder="사용 목적"
          style={{ height: 180 }}
          returnKeyType="next"
        />
        <Button
          title="예약하기"
          onPress={() => {
            navigation.push('');
            addText;
          }}
          textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
        />
        <StatusBar style="auto" />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default InfoInput;
