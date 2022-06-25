import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  Text,
  Animated,
  TouchableHighlight,
  Easing,
  // Button,
} from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import { Button } from "react-native-paper";

// import SlideUp from "../components/animations/SlideUp";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
      // easing: Easing.back(),
      // duration: 2000
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const SlideUp = (props) => {
  // const slideUp = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const [slideUp, setSlideInLeft] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(slideUp, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
      // easing: Easing.back(),
    }).start();
  }, [slideUp]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        position: "relative",
        // opacity: fadeAnim, // Bind opacity to animated value
        transform: [
          {
            translateY: slideUp.interpolate({
              inputRange: [0, 1],
              outputRange: [Dimensions.get("window").height, 0],
            }),
          },
        ],
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default function LoginScreen({ title, subTitle, image }) {
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  var isHidden = true;

  const [bounceValue, setBounceValue] = React.useState(new Animated.Value(100));
  const [buttonText, setButtonText] = React.useState("Show Subview");

  const _toggleSubview = () => {
    let btnText = !isHidden ? "Show Subview" : "Hide Subview";
    setButtonText(btnText);

    var toValue = 100;

    if (isHidden) {
      toValue = 0;
    }

    //This will animate the transalteY of the subview between 0 & 100 depending on its current state
    //100 comes from the style below, which is the height of the subview.
    Animated.spring(bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start();

    isHidden = !isHidden;
  };

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <AppText style={styles.welcomeText}>Welcome Back</AppText>
        <AppText style={styles.loginText}>Login to continue</AppText>
      </View>

      <View style={styles.login}>
        <SlideUp>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.image}
              source={require("../assets/images/oms-logo.png")}
            />
          </View>

          <TextInput
            label="Email"
            placeholder="Username or Email"
            value={text}
            onChangeText={(text) => setText(text)}
            mode="outlined"
            style={styles.textInput}
            autoCapitalize="none"
          />

          <TextInput
            label="Password"
            value={text2}
            onChangeText={(text) => setText2(text)}
            mode="outlined"
            type="password"
            placeholder="password"
            secureTextEntry={true}
            style={styles.textInput}
          />

          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.forgotText}>Forgot password ?</Text>
          </View>
        </SlideUp>

        <FadeInView
        // style={{ width: 250, height: 50, backgroundColor: "powderblue" }}
        >
          <Button
            style={styles.loginButton}
            mode="contained"
            textColor="#FFF"
            uppercase={false}
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ fontWeight: "500", fontSize: 16, color: "#FFF" }}>
              Login
            </Text>
          </Button>
        </FadeInView>

        <SlideUp>
          <View style={styles.createAccountDiv}>
            <Text>Not registered ? </Text>
            <Text style={[styles.forgotText, { padding: 0 }]}>
              Create Account ?
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <View style={styles.hr} />
            <View>
              <Text style={styles.orDevider}>OR</Text>
            </View>
            <View style={styles.hr} />
          </View>
        </SlideUp>

        <FadeInView>
          <Button
            icon={() => (
              <Image
                source={require("../assets/images/google-logo.png")}
                style={{ height: 25, width: 25 }}
              />
            )}
            style={styles.googleBtn}
            mode="contained"
            textColor="#FFF"
            uppercase={false}
            onPress={() => console.log("Pressed")}
          >
            <Text style={{ fontWeight: "500", fontSize: 14, color: "#333333" }}>
              Sign in with Google
            </Text>
          </Button>
        </FadeInView>

        {/* //end */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6251AD",
    marginTop: StatusBar.currentHeight || 0,
    // flex:1,
    height: Dimensions.get("window").height,
  },
  login: {
    backgroundColor: colors.white,
    height: "100%",
    // borderRadius: "16 16 0 0",
    padding: 25,
    // marginTop: 20
  },
  textInput: {
    height: 40,
    margin: 5,
    padding: 10,
    borderWidth: 1,
    justifyContent: "center",
    color: "#8F86AE",
    // fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    backgroundColor: "#F0EEF7",
    borderColor: "#E8E6F0",
    borderRadius: 6,
  },
  image: {
    width: 120,
    height: 70,
    marginVertical: 40,
  },
  detailsContainer: {
    padding: 20,
    marginTop: 70,
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 7,
    color: "#C5BFE1",
  },
  forgotText: {
    // fontFamily: 'Roboto',
    padding: 10,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    display: "flex",
    color: "#634EBD",
  },
  loginText: {
    fontSize: 24,
    // color: colors.secondary,
    color: "#FBE0B8",
    fontWeight: "bold",
    marginVertical: 5,
  },
  loginButton: {
    backgroundColor: "#6251AD",
    height: 40,
    marginVertical: 20,
  },
  googleBtn: {
    backgroundColor: "#F5F5F5",
    height: 40,
    borderRadius: 6,
    // alignContent:"center",
    // textAlignVertical: "center",
    // display: "flex",
    // alignItems: "center",
    lineHeight: 50,
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    height: 100,
  },
  touchableHighlightButton: {
    padding: 8,
  },
  buttonText: {
    fontSize: 17,
    color: "#007AFF",
  },
  createAccountDiv: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 25,
    marginVertical: 15,
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    height: 100,
  },
  orDevider: {
    width: 50,
    textAlign: "center",
    color: "#222222",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    fontStyle: "normal",
  },
  hr: {
    flex: 1,
    height: 1,
    backgroundColor: "#F5F5F5",
  },
});
