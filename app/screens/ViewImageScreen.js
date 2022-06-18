import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

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
    backgroundColor:"#000",
    flex: 1
  },
  image: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30
  }
});

export default ViewImageScreen;
