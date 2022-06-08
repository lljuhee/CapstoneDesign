import React, { useContext, useEffect, useState } from 'react';
import { Text, View, FlatList, Alert } from 'react-native';
import { Button } from '../components';
import { ThemeContext } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { deleteReservation } from '../firebase';
import { initializeApp } from 'firebase/app';
import config from '../../firebase.json';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.itemBorder};
  padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const ItemDesc = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: ${({ theme }) => theme.itemDesc};
`;

const ItemTime = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.itemTime};
`;

const channels = [];
channels.push({
  id: '0',
  title: `2022-03-19`,
  description: `스터디룸 5-3`,
  //createdAt: idx,
});
channels.push({
  id: '1',
  title: `2022-04-15`,
  description: `스터디룸 4-1`,
  // createdAt: idx,
});
channels.push({
  id: '2',
  title: `2022-06-02`,
  description: `스터디룸 6-3`,
  //createdAt: idx,
});
/* for (let idx = 3; idx < 30; idx++) {
  channels.push({
    id: idx,
    title: `YYYY-MM-DD`,
    description: `스터디룸 번호`,
    createdAt: idx,
  });
} */

const Item = React.memo(({ item: { title, description } }) => {
  return (
    <ItemContainer>
      <ItemTextContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDesc>{description}</ItemDesc>
      </ItemTextContainer>
    </ItemContainer>
  );
});

const ReservationInquiry = ({ navigation }) => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [room, setRoom] = useState();

  const getDate = async () => {
    const app = initializeApp(config);
    const db = getFirestore(app);
    const reservationCollection = collection(db, 'Reservations');
    const ReservationRef = doc(reservationCollection, '1');
    const docSnap = await getDoc(ReservationRef);

    if (docSnap.exists()) {
      setDate(docSnap.data().Date);
      setTime(docSnap.data().Time);
      setRoom(docSnap.data().StudyRoom);
    } else {
      setTime('현재 예약 내역이 없습니다.');
    }
  };

  useEffect(async () => {
    await getDate();
  }, []);

  const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: theme.main }}>
      <View
        style={{
          flex: 4,
          borderColor: theme.main,
          borderRadius: 5,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          backgroundColor: theme.background,
        }}
      >
        <View
          style={{ margin: 10, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text></Text>
          <Text style={{ fontSize: 20, margin: 5, fontWeight: 'bold' }}>
            {date}
          </Text>
          <Text style={{ fontSize: 20, margin: 5, fontWeight: 'bold' }}>
            {time}
          </Text>
          <Text style={{ fontSize: 20, margin: 5, fontWeight: 'bold' }}>
            {room}
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: 100, flex: 1, margin: 10 }}>
            <Button
              title="예약 변경"
              textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
              containerStyle={{ backgroundColor: '#FFC115' }}
              onPress={() => navigation.navigate('SelectDate')}
            />
          </View>
          <View style={{ width: 100, flex: 1, padding: 10 }}>
            <Button
              title="예약 취소"
              textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
              containerStyle={{ backgroundColor: '#FFC115' }}
              onPress={() =>
                Alert.alert('예약이 취소되었습니다.', '', [
                  {
                    text: 'OK',
                    onPress: () => {
                      navigation.navigate('Home'), deleteReservation();
                    },
                  },
                ])
              }
            />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 40,
          backgroundColor: theme.gray_0,
          justifyContent: 'center',
          padding: 10,
        }}
      >
        <Text>지난 예약 내역</Text>
      </View>

      <View style={{ flex: 8, backgroundColor: theme.background }}>
        <FlatList
          data={channels}
          renderItem={({ item }) => <Item item={item} />}
          // keyExtractor={(item) => item['id'].toString()}
          windowSize={5}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default ReservationInquiry;
