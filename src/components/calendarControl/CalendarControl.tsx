import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

interface CalendarControlProps {
  prevMonth: () => void;
  currentYear: number;
  month: number;
  nextMonth: () => void;
}

const CalendarControl = ({
  prevMonth,
  currentYear,
  month,
  nextMonth,
}: CalendarControlProps) => {
  return (
    <View style={styles.calendarControl}>
      <TouchableOpacity onPress={prevMonth}>
        <Icon name="chevron-left" size={25} />
      </TouchableOpacity>
      <View style={styles.calendarHeader}>
        <Text style={styles.calendarTitle}>
          {currentYear} / {month + 1 < 10 ? `0${month + 1}` : month + 1}
        </Text>
      </View>
      <TouchableOpacity onPress={nextMonth}>
        <Icon name="chevron-right" size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default CalendarControl;

const styles = StyleSheet.create({
  calendarControl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  calendarHeader: {
    flex: 1,
    marginHorizontal: 95,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarTitle: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
  },
});
