import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface CalendarRowDateItemProps {
  item: number;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  isToday: boolean;
}

const CalendarRowDateItem = ({
  item,
  onPress,
  backgroundColor,
  textColor,
  isToday,
}: CalendarRowDateItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.calendarRowDateItems, backgroundColor]}>
      <Text key={item} style={[styles.calendarDateItem, textColor]}>
        {item !== 0 ? item : ""}
      </Text>
      {isToday && <Text style={styles.calendarDateItemToDay} />}
    </TouchableOpacity>
  );
};

export default CalendarRowDateItem;

const styles = StyleSheet.create({
  calendarRowDateItems: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  calendarDateItem: {
    fontSize: 14,
    fontWeight: "bold",
  },
  calendarDateItemToDay: {
    zIndex: 99,
    height: 4,
    width: 25,
    backgroundColor: "#aced51",
  },
});
