import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import GlobalStyles from "./GlobalStyles";
// import DetactingOrientation from "./DetactingOrientation";
// import FlexBox from "./FlexBox";
// import AbsoluteandRelativePositioning from "./AbsoluteandRelativePositioning";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import Borders from "./app/ui/Borders";
// import Shadows from "./app/ui/Shadows";
import AppText from "./app/components/AppText";
// import Icons from "./app/ui/Icons";

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <AppText>Custom Text - Platform specifc css code</AppText>
      {/* <Icons /> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}
