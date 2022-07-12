import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
      // fontSize: 30,
      // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    //   color: "dodgerblue",
      ...Platform.select({
        ios: {
          fontSize: 18,
          fontFamily: "Avenir",
        },
        android: {
          fontSize: 18,
          fontFamily: "Roboto",
        },
      }),
    },
  });
  
  export default styles;