import React, { useContext, useState } from 'react';
import { FlatList, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Button } from '../components';
import { updateTime } from '../firebase';

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

const time = [];
let idx = 0;
for (let f = 9; f < 20; f++) {
  idx += 1;
  time.push({
    id: idx,
    title: `${f}:00 ~ ${f}:30`,
    description: `시간`,
    createdAt: f,
  });
  if (idx != 19) {
    idx += 1;
    time.push({
      id: idx,
      title: `${f}:30 ~ ${f + 1}:00`,
      description: `시간`,
      createdAt: f,
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

const SelectTime = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const [selectedId, setSelectedId] = useState();
  const [selectedTime, setSelectedTime] = useState();

  const renderItem = ({ item }) => {
    //id가 selectedId라면 배경색상 변경
    const backgroundColor = item.id === selectedId ? theme.gray_1 : '#ffffff';
    return (
      <Item
        item={item}
        //아이템을 클릭하면 selectedId가 변경
        onPress={() => {
          setSelectedId(item.id);
          setSelectedTime(item.title);
        }}
        style={{ backgroundColor }}
      />
    );
  };
  const _handleNextBtnPress = async () => {
    try {
      await updateTime({
        addTime: selectedTime,
      });
      navigation.push('InfoInput');
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 9 }}>
        <FlatList
          data={time}
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

export default SelectTime;
