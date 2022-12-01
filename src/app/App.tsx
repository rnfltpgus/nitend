import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";
import Calendar from "../screens/Calendar";
import Library from "../screens/Library";
import MyPage from "../screens/MyPage";

import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Calendar"
          screenOptions={{
            tabBarActiveTintColor: "#625cfd",
            headerShown: false,
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
              tabBarLabel: "Calendar",
              tabBarIcon: ({ color, size }) => (
                <Icon name="calendar-today" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Library"
            component={Library}
            options={{
              tabBarLabel: "Library",
              tabBarIcon: ({ color, size }) => (
                <Icon name="directions-run" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{
              tabBarLabel: "MyPage",
              tabBarIcon: ({ color, size }) => (
                <Icon name="face" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: { flex: 1 },
});
