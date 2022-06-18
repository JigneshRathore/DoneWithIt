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

          //* shadow for I-Phone
          shadowColor: "grey",
          shadowOpacity: 1,
          shadowOffset: { height: 10, width: 0 },
          shadowRadius: 10,

          //* shadow for android
          // elevation: 40,
        }}
      ></View>
    </View>
  );
}
