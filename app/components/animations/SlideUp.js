import { View, Text, Animated, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";

export default function SlideUp({children}) {
  const [SlideInLeft, setSlideInLeft] = useState(new Animated.Value(0));

  useEffect(() => {
    _start()
  })

  const _start = () => {
    return Animated.parallel([
      Animated.timing(SlideInLeft, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      // Animated.timing(fadeValue, {
      //   toValue: 1,
      //   duration: 500,
      //   useNativeDriver: true,
      // }),
      // Animated.timing(slideUpValue, {
      //   toValue: 1,
      //   duration: 500,
      //   useNativeDriver: true,
      // }),
    ]).start();
  };

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateY: SlideInLeft.interpolate({
              inputRange: [0, 1],
              outputRange: [Dimensions.get("window").height, 1000],
            }),
          },
        ],
        // flex: 1,
        height: 150,
        width: 200,
        // borderRadius: 12,
        // backgroundColor: "#347a2a",
        // justifyContent: "center",
      }}
    >
      {children}
    </Animated.View>
  );
}
