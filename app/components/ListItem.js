import { View, TouchableHighlight, StyleSheet, Image } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import {
  GestureHandlerRootView,
  Swipeable
} from 'react-native-gesture-handler'

export default function ListItem ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.textContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && (
                <AppText style={styles.subTitle}>{subTitle}</AppText>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // margin: 15,
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12
  },
  textContainer: {
    // flexDirection: "row",
    justifyContent: 'center',
    marginLeft: 10
  },
  title: {
    fontWeight: '400'
  },
  subTitle: {
    color: colors.medium
  }
})
