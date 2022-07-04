import { View, TouchableHighlight, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import { Swipeable } from "react-native-gesture-handler";

export default function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable
      renderRightActions={renderRightActions}
    >
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },
  textContainer: {
    // flexDirection: "row",
  },
  title: {
    fontWeight: "400",
  },
  subTitle: {
    color: colors.medium,
  },
});
