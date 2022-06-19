import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

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