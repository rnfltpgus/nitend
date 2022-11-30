import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MyPage = () => {
  return (
    <View style={styles.myPageContainer}>
      <Text>MyPage</Text>
    </View>
  );
};

export default MyPage;

const styles = StyleSheet.create({
  myPageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
