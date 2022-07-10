import React, { Component } from "react";
import { Animated, StyleSheet, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../config/colors";

export default class AppleStyleSwipeableRow extends Component {
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton
        style={{
          width: 100,
          height: 200,
          backgroundColor: colors.medium,
        }}
        onPress={this.close}
      >
        <Animated.Text
          style={[
            {
              width: 100,
              height: 200,
              backgroundColor: colors.medium,
            },
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          Archive
        </Animated.Text>
      </RectButton>
    );
  };
  render() {
    return (
      <Swipeable renderLeftActions={this.renderLeftActions}>
        <Text>hello</Text>
      </Swipeable>
    );
  }
}
