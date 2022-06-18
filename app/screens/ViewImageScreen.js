import React from "react";
import { StyleSheet, View, Image } from "react-native";
import colors from "../config/colors";

function ViewImageScreen(props) {
  const chairImage = require("../assets/chair.jpeg");
  return (
   <View style={styles.container}>
      <View style={styles.closeIcon}>
      </View>
      <View style={styles.deleteIcon}>
      </View>
     <Image style={styles.image} source={chairImage} resizeMode={"contain"}  />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  image: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30
  }
});

export default ViewImageScreen;
