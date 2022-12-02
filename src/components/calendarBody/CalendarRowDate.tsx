import React from "react";
import { StyleSheet, FlatList } from "react-native";

import CalendarRowDateItem from "../calendarBody/CalendarRowDateItem";

interface CalendarRowDateProps {
  calendarDate: Array<number[]> | null;
  selectedDay: string;
  today: number;
  currentMonth: number;
  month: number;
  date: Date;
  setSelectedDay: (renderItemKey: string) => void;
}

const CalendarRowDate = ({
  calendarDate,
  selectedDay,
  today,
  currentMonth,
  month,
  date,
  setSelectedDay,
}: CalendarRowDateProps) => {
  return (
    <>
      {calendarDate?.map((rowDate, idx) => {
        return (
          <FlatList
            key={idx}
            data={rowDate}
            extraData={selectedDay}
            horizontal
            style={styles.calendarRowDate}
            renderItem={({ item, index }) => {
              const renderItemKey = `${today}${idx}${index}`;
              const backgroundColor =
                renderItemKey === selectedDay ? "#7379e7" : "#fff";
              const color = renderItemKey === selectedDay ? "white" : "black";
              const isToday =
                today === item &&
                currentMonth === month &&
                date.getFullYear() === new Date().getFullYear();

              return (
                <CalendarRowDateItem
                  item={item}
                  onPress={() => setSelectedDay(renderItemKey)}
                  backgroundColor={{ backgroundColor }}
                  textColor={{ color }}
                  isToday={isToday}
                />
              );
            }}
          />
        );
      })}
    </>
  );
};

export default CalendarRowDate;

const styles = StyleSheet.create({
  calendarRowDate: {
    marginHorizontal: 5,
    marginTop: 10,
  },
});
