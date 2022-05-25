import React, { useState } from 'react';
import { Button, Input } from '../components';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { updateInfo } from '../firebase';
import { Alert } from 'react-native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const InfoInput = ({ navigation }) => {
  const [addName, setAddName] = useState('');
  const [addStudentId, setAddStudentId] = useState('');
  const [addPhoneNum, setAddPhoneNum] = useState('');
  const [addPeople, setAddPeople] = useState('');
  const [addPurpose, setAddPurpose] = useState('');

  const _handleReservationBtnPress = async () => {
    try {
      await updateInfo({
        addName: addName,
        addStudentId: addStudentId,
        addPhoneNum: addPhoneNum,
        addPeople: addPeople,
        addPurpose: addPurpose,
      });
      setAddName('');
      setAddStudentId('');
      setAddPhoneNum('');
      setAddPeople('');
      setAddPurpose('');
      Alert.alert('예약이 완료되었습니다.', '', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
      //Alert.alert('예약이 완료되었습니다.');
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <Container>
        <Input
          label="예약자 이름"
          placeholder="이름"
          value={addName}
          onChangeText={(text) => setAddName(text)}
        />
        <Input
          label="학번"
          placeholder="학번"
          value={addStudentId}
          onChangeText={(text) => setAddStudentId(text)}
        />
        <Input
          label="핸드폰번호"
          placeholder="핸드폰번호"
          value={addPhoneNum}
          onChangeText={(text) => setAddPhoneNum(text)}
        />
        <Input
          label="사용 인원 수"
          placeholder="사용 인원 수"
          value={addPeople}
          onChangeText={(text) => setAddPeople(text)}
        />
        <Input
          label="사용 목적"
          placeholder="사용 목적"
          style={{ height: 180 }}
          returnKeyType="next"
          value={addPurpose}
          onChangeText={(text) => setAddPurpose(text)}
        />
        <Button
          title="예약하기"
          onPress={_handleReservationBtnPress}
          textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
        />
        <StatusBar style="auto" />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default InfoInput;
