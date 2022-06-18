import { StyleSheet, Text, View } from "react-native";
import {
  useDeviceOrientation,
} from "@react-native-community/hooks";

export default function FlexBox() {
  const { landscape } = useDeviceOrientation();
  return (
    <View
      style={{
        backgroundColor: "dodgerblue",
        width: landscape ? "30%" : "100%",
        height: "30%",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Text>Detacting orientation changes</Text>
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
