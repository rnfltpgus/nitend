import React from "react";
import { View, StyleSheet } from "react-native";

export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 15,
    borderBottomColor: "#9e9d9d",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
