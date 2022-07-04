import React from "react";
import { FlatList, StyleSheet, StatusBar, Platform } from "react-native";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    description: "D1",
    image: require("../assets/images/mosh.jpg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    description: "D2",
    image: require("../assets/images/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  const handleDelete = () => {
    console.log("Dlete Press");
  };
  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      image={item.image}
      subTitle={item.description}
      onPress={() => console.log("item", item)}
      renderRightActions={() => <ListItemDeleteAction onPress={handleDelete} />}
    />
  );
  return (
    <Screen>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
