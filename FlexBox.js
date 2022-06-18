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
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 300,
          alignSelf:"flex-start"
        }}
      >
        <Text>FlexBox</Text>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          width: 100,
          height: 200,
        }}
      >
        <Text>FlexBox</Text>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      >
        <Text>FlexBox</Text>
      </View>
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
