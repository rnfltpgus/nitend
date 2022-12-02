import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import CalendarRowDateItem from "../components/CalendarRowDateItem";

import Icon from "react-native-vector-icons/MaterialIcons";

const Calendar = () => {
  const [date] = useState(new Date());
  const [today] = useState<number>(date.getDate());
  const [currentMonth] = useState<number>(date.getMonth());
  const [currentYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [calendarDate, setCalendarDate] = useState<Array<number[]> | null>(
    null,
  );
  const dayListEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [selectedDay, setSelectedDay] = useState("");

  useEffect(() => {
    date.setDate(1);
    settingMonth();
  }, []);

  const prevMonth = () => {
    date.setMonth(date.getMonth() - 1);
    date.setDate(1);
    setMonth(date.getMonth());
    settingMonth();
    setSelectedDay("");
  };

  const nextMonth = () => {
    date.setMonth(date.getMonth() + 1);
    date.setDate(1);
    setMonth(date.getMonth());
    settingMonth();
    setSelectedDay("");
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

        {calendarDate &&
          calendarDate.map((rowDate, idx) => {
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
                  const color =
                    renderItemKey === selectedDay ? "white" : "black";
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
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
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
  calendarBody: {
    marginTop: 40,
  },
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
  calendarRowDate: {
    marginHorizontal: 5,
    marginTop: 10,
  },
});
