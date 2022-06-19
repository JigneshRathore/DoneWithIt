import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
      // fontSize: 30,
      // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
      color: "dodgerblue",
      ...Platform.select({
        ios: {
          fontSize: 30,
          fontFamily: "Avenir",
        },
        android: {
          fontSize: 30,
          fontFamily: "Roboto",
        },
      }),
    },
  });
  
  export default styles;