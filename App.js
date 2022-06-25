import { SafeAreaView, View } from "react-native";
import GlobalStyles from "./GlobalStyles";
// import DetactingOrientation from "./DetactingOrientation";
// import FlexBox from "./FlexBox";
// import AbsoluteandRelativePositioning from "./AbsoluteandRelativePositioning";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// import Borders from "./app/ui/Borders";
// import Shadows from "./app/ui/Shadows";
// import AppText from "./app/components/AppText";
// import Icons from "./app/ui/Icons";
// import AppButton from "./app/components/AppButton";
// import Card from "./app/components/Card";
// import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
// import MessagesScreen from "./app/screens/MessagesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SlideUpAnimation from "./app/components/animations/SlideUpAnimation";

export default function App() {
  return (
    // <SafeAreaView style={GlobalStyles.androidSafeArea}>
    <LoginScreen
      image={require("./app/assets/images/jacket.jpg")}
      title="test"
      subTitle="$200"
    />
    // <View
    //   style={
    //     {
    //       // backgroundColor: "#f8f4f4",
    //       // padding: 20,
    //       // paddingTop: 20,
    //       // flex: 1,
    //       // alignItems: "center",
    //       // justifyContent: "center"
    //     }
    //   }
    // >
    //   <SlideUpAnimation />
    // </View>
    // </SafeAreaView>
    // <MessagesScreen />
    // <ViewImageScreen />
    // <SafeAreaView style={GlobalStyles.androidSafeArea}>
    //   {/* <WelcomeScreen /> */}
    //   {/* <View
    //     style={{
    //       flex: 1,
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <AppButton label="Submit" onClick={() => console.log("Tapped!")}/>
    //   </View> */}
    //   {/* <AppText>Organizing Styles</AppText> */}
    //   {/* <StatusBar style="auto" /> */}
    // </SafeAreaView>
  );
}
