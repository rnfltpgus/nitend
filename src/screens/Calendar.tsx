import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

import CalendarControl from "../components/calendarControl/CalendarControl";
import CalendarDayList from "../components/calendarBody/CalendarDayList";
import CalendarRowDate from "../components/calendarBody/CalendarRowDate";
import CalendarTabArea from "../components/calendarTabArea/CalendarTabArea";
import { Separator } from "../components/common/Separator";

const dayListEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [date] = useState(new Date());
  const [today] = useState<number>(date.getDate());
  const [currentMonth] = useState<number>(date.getMonth());
  const [currentYear] = useState<number>(date.getFullYear());
  const [month, setMonth] = useState<number>(date.getMonth());
  const [calendarDate, setCalendarDate] = useState<Array<number[]> | null>(
    null,
  );
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
      <CalendarControl
        prevMonth={prevMonth}
        currentYear={currentYear}
        month={month}
        nextMonth={nextMonth}
      />
      <View style={styles.calendarBody}>
        <CalendarDayList dayListEN={dayListEN} />
        <CalendarRowDate
          calendarDate={calendarDate}
          selectedDay={selectedDay}
          today={today}
          currentMonth={currentMonth}
          date={date}
          month={month}
          setSelectedDay={setSelectedDay}
        />
      </View>
      <Separator />
      <CalendarTabArea />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
    marginHorizontal: 15,
  },
  calendarBody: {
    marginTop: 40,
  },
});
