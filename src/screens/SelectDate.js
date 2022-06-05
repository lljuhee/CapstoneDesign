import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../components';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';
import { updateDate } from '../firebase';

const SelectDate = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  const markedDates = {
    [selectedDate]: {
      selected: true,
    },
  };

  const _handleReservationBtnPress = async () => {
    try {
      await updateDate({
        addDate: selectedDate,
      });
      navigation.push('SelectRoom');
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <Calendar
        minDate={format(new Date(), 'yyyy-MM-dd')}
        maxDate={'2023-03-01'}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        markedDates={markedDates}
        monthFormat={'yyyy MM'}
        onMonthChange={(월) => {
          console.log('변경된 월', 월);
        }}
      />
      <View style={{ margin: 10 }}></View>
      <Button
        title="다음"
        onPress={_handleReservationBtnPress}
        textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default SelectDate;
