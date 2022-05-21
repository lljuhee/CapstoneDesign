import React, { useContext, useState } from 'react';
import { FlatList, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Button } from '../components';
import { updateRoom } from '../firebase';

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

const room = [];
let idx = 0;
for (let f = 4; f < 7; f++) {
  for (let n = 1; n < 5; n++) {
    idx += 1;
    room.push({
      id: idx,
      title: `스터디룸 ${f}-${n}`,
      description: `시간`,
      //createdAt: idx,
    });
  }
}

const Item = React.memo(({ item: { title, description }, onPress, style }) => {
  return (
    <ItemContainer onPress={onPress} style={style}>
      <ItemTextContainer>
        <ItemTitle>{title}</ItemTitle>
        {/* <ItemDesc>{description}</ItemDesc> */}
      </ItemTextContainer>
    </ItemContainer>
  );
});

const SelectRoom = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState();

  const renderItem = ({ item }) => {
    //id가 selectedId라면 배경색상 변경
    const backgroundColor = item.id === selectedId ? theme.gray_1 : '#ffffff';

    return (
      <Item
        item={item}
        //아이템을 클릭하면 selectedId가 변경
        onPress={() => {
          setSelectedId(item.id);
          setSelectedRoom(item.title);
        }}
        style={{ backgroundColor }}
      />
    );
  };

  const _handleNextBtnPress = async () => {
    try {
      await updateRoom({
        addRoom: selectedRoom,
      });
      navigation.push('SelectTime');
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 9 }}>
        <FlatList
          data={room}
          renderItem={renderItem}
          windowSize={5}
          extraData={selectedId}
        />
      </View>
      <View style={{ flex: 1, margin: 10 }}>
        <Button
          title="다음"
          onPress={_handleNextBtnPress}
          textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default SelectRoom;
