import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

export default function ListingDetailsScreen({ title, subTitle, image }) {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} >{title}</AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
