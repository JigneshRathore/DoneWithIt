import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import GlobalStyles from "./GlobalStyles";
// import DetactingOrientation from "./DetactingOrientation";
// import FlexBox from "./FlexBox";
// import AbsoluteandRelativePositioning from "./AbsoluteandRelativePositioning";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import Borders from "./app/ui/Borders";
import Shadows from "./app/ui/Shadows";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <Shadows />
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}