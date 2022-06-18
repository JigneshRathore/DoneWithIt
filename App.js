import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import GlobalStyles from "./GlobalStyles";
// import DetactingOrientation from "./DetactingOrientation";
import FlexBox from "./FlexBox";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <FlexBox />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
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
