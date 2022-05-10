import React, { useContext, useState } from 'react';
import { Text, FlatList, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Button } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
for (let idx = 9; idx < 20; idx++) {
  time.push({
    id: idx,
    title: `${idx}:00 ~ ${idx}:30`,
    description: `시간`,
    createdAt: idx,
  });
  if (idx != 19) {
    time.push({
      id: idx,
      title: `${idx}:30 ~ ${idx + 1}:00`,
      description: `시간`,
      createdAt: idx,
    });
  }
}

const Item = React.memo(({ item: { title, description, onPress, style } }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <ItemContainer>
        <ItemTextContainer>
          <ItemTitle>{title}</ItemTitle>
          {/* <ItemDesc>{description}</ItemDesc> */}
        </ItemTextContainer>
      </ItemContainer>
    </TouchableOpacity>
  );
});

const SelectTime = ({ navigation }) => {
  const theme = useContext(ThemeContext);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 9 }}>
        <FlatList
          data={time}
          renderItem={({ item }) => {
            const backgroundColor =
              item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
            return (
              <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
              />
            );
          }}
          windowSize={5}
          extraData={selectedId}
        />
      </View>
      <View style={{ flex: 1, margin: 10 }}>
        <Button
          title="다음"
          onPress={() => navigation.push('InfoInput')}
          textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

export default SelectTime;
