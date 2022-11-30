import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.calendarContainer}>
      <Text>Calendar</Text>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
