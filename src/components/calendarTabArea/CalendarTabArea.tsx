import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const CalendarTabArea = () => {
  return (
    <View style={styles.calendarTabArea}>
      <View style={styles.calendarTabButton}>
        <Button
          title="식단 0"
          color="#ffffff"
          onPress={() => Alert.alert("There are currently no features!")}
        />
      </View>
      <View style={styles.calendarTabButton}>
        <Button
          title="운동 0"
          color="#ffffff"
          onPress={() => Alert.alert("There are currently no features!")}
        />
      </View>
      <View style={styles.calendarTabButton}>
        <Button
          title="신체 0"
          color="#ffffff"
          onPress={() => Alert.alert("There are currently no features!")}
        />
      </View>
    </View>
  );
};

export default CalendarTabArea;

const styles = StyleSheet.create({
  calendarTabArea: {
    flexDirection: "row",
    justifyContent: "center",
  },
  calendarTabButton: {
    width: 100,
    backgroundColor: "#7379e7",
    borderRadius: 5,
    marginHorizontal: 2,
  },
});
