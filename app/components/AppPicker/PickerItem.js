import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  )
}

PickerItem.prototype = {
  // label: P
}

export default PickerItem

const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})
