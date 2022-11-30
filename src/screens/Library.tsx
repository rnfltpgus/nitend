import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Library = () => {
  return (
    <View style={styles.libraryContainer}>
      <Text>Library</Text>
    </View>
  );
};

export default Library;

const styles = StyleSheet.create({
  libraryContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
