import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  const BackgroundImage = require("../assets/background.jpg");
  const logo = require("../assets/logo-red.png");
  return (
    <ImageBackground style={styles.background} source={BackgroundImage}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text  style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton label={"Login"} onClick={() => console.log("login clicked!")} />
        <AppButton label={"Register"} color="secondary" onClick={() => console.log("login clicked!")} />
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems:"center"
  },
  buttonContainer: {
    padding: 20,
    width: "100%"

  },
  registerbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "500",
    paddingVertical: 10
  }
});

export default WelcomeScreen;
