import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <View
      style={{ backgroundColor: "black", width: 70, justifyContent:"center", alignItems: "center" }}
      onPress={onPress}
    >
      {/* <Text>Text</Text> */}
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </View>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({});
