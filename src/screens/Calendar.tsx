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
  const dayListKR = ["일", "월", "화", "수", "목", "금", "토"];
  // const [toggleSwitch, setToggleSwitch] = useState(toggleSwitch);

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

      <View style={styles.calendarBody}>
        <View style={styles.calendarDayList}>
          {(false ? dayListKR : dayListEN).map((day, idx) => {
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

        {calendarDate &&
          calendarDate.map((rowDate, idx) => {
            return (
              <View style={styles.calendarRowDate} key={idx}>
                {rowDate.map((item: any, index: number) => {
                  const isToday =
                    today === item &&
                    currentMonth === month &&
                    date.getFullYear() === new Date().getFullYear();

                  return (
                    <View style={styles.calendarRowDateItems}>
                      <Text key={index} style={styles.calendarDateItem}>
                        {item !== 0 ? item : ""}
                      </Text>
                      {isToday && <Text style={styles.calendarDateItemToDay} />}
                    </View>
                  );
                })}
              </View>
            );
          })}
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
  calendarControl: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  calendarHeader: {
    marginHorizontal: 95,
  },
  calendarTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  calendarBody: {
    marginTop: 40,
  },
  calendarDayList: {
    flexDirection: "row",
  },
  calendarDayListItem: {},
  calendarDayListItemName: {
    marginHorizontal: 12.3,
    fontWeight: "bold",
    fontSize: 14,
  },
  calendarRowDate: {
    flexDirection: "row",
    margin: 5,
  },
  calendarRowDateItems: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
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
