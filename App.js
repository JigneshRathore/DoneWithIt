import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  Dimensions
} from "react-native";
import GlobalStyles from "./GlobalStyles";

export default function App() {
  //get screen dimensions
  // console.log(Dimensions.get('screen'))
  console.log(useDimensions())

  // get device orientation
  const { landscape } = useDeviceOrientation()
  // console.log(useDeviceOrientation()) 
  
  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>
      <View style={{
        backgroundColor:'dodgerblue',
        width: landscape ? '30%' : '100%',
        // width: '100%',
        height:'30%'
      }}>
        <Text>Hello There</Text>
      </View>

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
