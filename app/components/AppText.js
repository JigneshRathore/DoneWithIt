import { View, Text, Platform, StyleSheet } from "react-native";
import React from "react";

export default function AppText({ children }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
