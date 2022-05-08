import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Button } from '../components';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';
import { theme } from '../theme';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const SelectDate = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd')
  );
  const markedDates = {
    [selectedDate]: {
      selected: true,
    },
  };

  return (
    <View style={{ margin: 10 }}>
      <Calendar
        // 처음에 보이는 월. Default = now
        //current={}

        // 선택할 수 있는 최소 날짜, minDate 이전 날짜는 회색으로 표시됩니다. Default = undefined
        minDate={format(new Date(), 'yyyy-MM-dd')}
        // 선택할 수 있는 최대 날짜, maxDate 이후 날짜는 회색으로 표시됩니다. Default = undefined
        maxDate={'2023-03-01'}
        // 당일 프레스에 실행되는 핸들러. 기본값 = 정의되지 않음
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
        }}
        // 길게 누르면 실행되는 핸들러. 기본값 = 정의되지 않음
        // onDayLongPress={(day) => {
        //   console.log('선택한 요일', 요일);
        // }}
        markedDates={markedDates}
        // 캘린더 제목의 월 형식. 값 형식 지정: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MM'}
        // 달력에서 보이는 월이 변경될 때 실행되는 핸들러. 기본값 = 정의되지 않음
        onMonthChange={(월) => {
          console.log('변경된 월', 월);
        }}
      />

      <View style={{ margin: 10 }}></View>
      <Button
        title="다음"
        onPress={() => navigation.push('SelectTime')}
        textStyle={{ fontWeight: 'bold', fontSize: 18, margin: 5 }}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default SelectDate;
