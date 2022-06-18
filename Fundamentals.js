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
  Platform
} from "react-native";
import GlobalStyles from "./GlobalStyles";

export default function Fundamentals() {
  const handlePress = () => {
    console.log("handlePress");
  };

  // let imgSrc = require('./assets/images/democopy.jpeg');
  let imgSrc = require("./assets/images/PNG_500kB.png");

  return (
    <SafeAreaView style={GlobalStyles.androidSafeArea}>

      {/* Text API */}
      <Text onPress={handlePress} numberOfLines={1}>
        Expo1 Client line one! - A really really long text A really really long
      </Text>

      {/* Button API */}
      <Button title="Click" color={'orange'} onPress={() => Alert.alert("button clicked", "My message", [
        { text:"Yesss", onPress:() => console.log('yes clicked')},
        { text:"Nooo", onPress:() => console.log("it's nope")},
      ])} />


      {/* Image API */}
      {/* <Image style={styles.image}  source={require('./assets/icon.png')} /> */}
      {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      /> */}

      {/* Image + Touchable API */}
      <TouchableHighlight onPress={() => console.log("image touch")}>
        <Image blurRadius={2} fadeDuration={1000} source={imgSrc} />
      </TouchableHighlight>

      <Image blurRadius={5} source={{ uri: "https://picsum.photos/200" }} />

      <StatusBar style="auto" />
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
