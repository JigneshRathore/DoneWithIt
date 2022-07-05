import React from "react";
import { StyleSheet, Text, Touchable, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteAction = ({ onPress }) => {
  return ( 
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteButton}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
  deleteButton: {
    backgroundColor: "black",
    width: 70,
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
