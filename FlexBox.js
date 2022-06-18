import { StyleSheet, Text, View } from "react-native";

export default function FlexBox() {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          flex: 2,
        }}
      >
        <Text>FlexBox</Text>
      </View>
      <View
        style={{
          backgroundColor: "glod",
          flex: 1,
        }}
      >
        <Text>FlexBox</Text>
      </View>
      <View
        style={{
          backgroundColor: "tomato",
          flex: 1,
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
