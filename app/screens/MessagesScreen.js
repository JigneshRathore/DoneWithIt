import React, { useState } from "react";
import { FlatList, StyleSheet, StatusBar, Platform } from "react-native";
import ListItem from "../components/ListItem";
import Swipabletest from "../components/Swipabletest";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    description: "J1",
    image: require("../assets/images/mosh.jpg"),
  },
  {
    id: "3ac68afc-48J3-a4f8-a4f8-fbJ91aa97f63",
    title: "SeconJ Item",
    description: "J2",
    image: require("../assets/images/mosh.jpg"),
  },
  {
    id: "3ac68afc-c605-c605-48J3-fjygfrt4r97f6",
    title: "ThirJ",
    description: "J3",
    image: require("../assets/images/mosh.jpg"),
  },
];

export default function MessagesScreen() {
  const [messasges, setMessages] = useState(DATA);
  const [refeshing, setRefeshing] = useState(false);

  const handleDelete = (id) => {
    let filter = messasges.filter((data) => data.id !== id);
    setMessages(filter);
  };

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      image={item.image}
      subTitle={item.description}
      onPress={() => console.log("item", item)}
      renderRightActions={() => (
        <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
      )}
    />
  );
  return (
    <Screen>
      <FlatList
        data={messasges}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refeshing}
        onRefresh={(item) => {
          let newMsg = {
            id: `75468afc-1343-54-48J3-${Math.random(1111)}`,
            title: "New message",
            description: "J4",
            image: require("../assets/images/mosh.jpg"),
          };
          const exist = messasges.find((row) => row.id === newMsg.id);
          if (!exist) setMessages([...messasges, newMsg]);
        }}
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
