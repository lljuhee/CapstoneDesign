import React, { useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

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
for (let idx = 0; idx < 30; idx++) {
  channels.push({
    id: idx,
    title: `YYYY-MM-DD`,
    description: `스터디룸 번호`,
    createdAt: idx,
  });
}

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

const ReservationInquiry = ({}) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: theme.main }}>
      <View
        style={{
          flex: 3,
          borderColor: theme.main,
          borderRadius: 5,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
          backgroundColor: theme.background,
        }}
      >
        <Text style={{ fontSize: 16 }}>현재 예약 내역이 없습니다. </Text>
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
