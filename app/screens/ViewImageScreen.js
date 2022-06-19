import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  const chairImage = require("../assets/chair.jpeg");
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
      <Image style={styles.image} source={chairImage} resizeMode={"center"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    // backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    // backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
