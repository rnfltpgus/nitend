import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";

const Calendar = () => {
  const [date] = useState(new Date());
  const [today] = useState<number>(date.getDate());
  const [currentMonth] = useState<number>(date.getMonth());
  const [currentYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [calendarDate, setCalendarDate] = useState<any[] | null>(null);
  const dayListEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    date.setDate(1);
    settingMonth();
  }, []);

  const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    date.setDate(1);
    setMonth(date.getMonth());
    settingMonth();
  };

  const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    date.setDate(1);
    setMonth(date.getMonth());
    settingMonth();
  };

  const settingMonth = () => {
    const lastDate = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0,
    ).getDate();

    let allDate = [];
    let rowDate = [];

    if (date.getDay() > 1) {
      for (let i = 0; i < date.getDay(); i++) {
        rowDate.push(0);
      }
    }

    for (let i = 1; i <= lastDate; i++) {
      rowDate.push(i);

      if (rowDate.length === 7) {
        allDate.push(rowDate);
        rowDate = [];
      }
    }

    if (rowDate.length > 0) {
      allDate.push(rowDate);
    }

    setCalendarDate(allDate);
  };

  return (
    <View style={styles.calendarContainer}>
      <View style={styles.calendarHeader}>
        <View style={styles.calendarControl}>
          <TouchableOpacity onPress={prevMonth}>
            <Icon name="chevron-left" size={25} />
          </TouchableOpacity>
          <View style={styles.calendarTitle}>
            <Text>
              {month + 1 < 10 ? `0${month + 1}` : month + 1} / {currentYear}
            </Text>
          </View>
          <TouchableOpacity onPress={nextMonth}>
            <Icon name="chevron-right" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.calendarBody}>
        <View style={styles.calendarDay}>
          {dayListEN.map((day, idx) => {
            return (
              <View
                key={day}
                style={
                  (styles.calendarDayItem, idx === 0 && { marginLeft: 0 })
                }>
                <Text style={styles.calendarDayName}>{day}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.calendarBody}>
        <View style={styles.calendarDate}>
          {calendarDate &&
            calendarDate.map((rowDate, idx) => {
              return (
                <View style={styles.calendarRowDate} key={idx}>
                  {rowDate.map((item: any, index: number) => {
                    return (
                      <View
                        style={
                          (styles.calendarDateItemWrapper,
                          index === 0 && { marginLeft: 0 })
                        }
                        key={index}>
                        <>
                          <View style={styles.calendarDateItem}>
                            <Text key={index} style={styles.calendarDateItems}>
                              {item}
                            </Text>
                          </View>
                        </>
                      </View>
                    );
                  })}
                </View>
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    alignItems: "center",
  },
  calendarHeader: {},
  calendarControl: {
    flexDirection: "row",
    alignItems: "center",
    top: 10,
  },
  calendarTitle: {
    textAlign: "center",
    marginHorizontal: 110,
  },
  calendarBody: {
    top: 30,
  },
  calendarDay: {
    flexDirection: "row",
    width: "100%",
  },
  calendarDayItem: {},
  calendarDayName: {
    marginHorizontal: 12.5,
    fontWeight: "bold",
    fontSize: 14,
    color: "#7a51ed",
  },
  calendarDate: {},
  calendarRowDate: {
    flexDirection: "row",
    margin: 5,
  },
  calendarDateItemWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: 47,
    height: 47,
  },
  calendarDateItem: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  calendarDateItems: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
