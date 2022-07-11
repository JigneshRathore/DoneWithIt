import React from 'react'
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native'
import Card from '../components/Card'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'
import colors from '../config/colors'

const items = [
  {
    id: 1,
    title: 'RED mustang for sale',
    price: 30100,
    image: require('../assets/images/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch',
    price: 100,
    image: require('../assets/images/couch.jpg')
  }
]
function ListingScreen (props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={item.price}
              image={item.image}
            />
          )}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    backgroundColor: colors.light
  },
  container: {
    marginVertical: 20
  }
})

export default ListingScreen
