import { StyleSheet, Text, View } from "react-native";

export default function FlexBox() {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
        flexDirection:"row", //* horizontal : "row-reverse" && "column-reverse",
        justifyContent: "center", //* main
        alignItems: "center", //* secondary
        alignContent: "center",
        // flexWrap: "wrap"
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flexBasis: 100, //* width or height
          // flex: 1,
          
          //* flexShrink
          // flexShrink: 1,
          width: 300,
          //* or flex -1
          flex: -1,

          // width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
