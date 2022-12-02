import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CalendarDayListProps {
  dayListEN: string[];
}

const CalendarDayList = ({ dayListEN }: CalendarDayListProps) => {
  return (
    <View style={styles.calendarDayList}>
      {dayListEN.map((day, idx) => {
        return (
          <View
            key={day}
            style={
              (styles.calendarDayListItem,
              (idx === 0 && {
                marginLeft: 0,
                backgroundColor: "#ef7878",
              }) ||
                (idx === 6 && {
                  marginLeft: 0,
                  backgroundColor: "#72a6ff",
                }))
            }>
            <Text style={styles.calendarDayListItemName}>{day}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default CalendarDayList;

const styles = StyleSheet.create({
  calendarDayList: {
    flexDirection: "row",
    marginHorizontal: 5,
  },
  calendarDayListItem: {
    flex: 1,
  },
  calendarDayListItemName: {
    marginHorizontal: 12,
    fontWeight: "bold",
  },
});
