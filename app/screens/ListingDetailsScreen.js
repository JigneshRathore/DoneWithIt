import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";``

export default function ListingDetailsScreen({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} >{title}</AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // borderRadius: 20,
    // backgroundColor: colors.white,
    // marginBottom: 15,
    // overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 15,
  },
  title:{
    fontSize: 24,
    fontWeight:"500",
    marginBottom: 7
  },
  price:{
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5
  },
});
