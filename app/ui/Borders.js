import { View, Text } from "react-native";
import React from "react";

export default function Borders() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          height: 100,
          width: 100,
          borderWidth: 10,
          borderColor: "royalblue",
          borderRadius: 50
        }}
      ></View>
    </View>
  );
}
