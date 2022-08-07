import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../config/colors'
import defaultStyles from '../../config/styles'

export default function AppTextInput ({
  value,
  onChangeText,
  // placeholder,
  style,
  icon,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons size={20} style={{ paddingHorizontal: 5 }} name={icon} color={colors.medium} />}
      <TextInput
        style={[styles.textInput, defaultStyles.text]}
        {...otherProps}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    // alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  textInput: {
    flex: 1
    // height: 30
  }
})

// AppTextInput.prototype = {
//   icon: ReactPropTypes.array
//   // style
// }

// import { PropTypes } from 'react';
// static propTypes = {
//   foo: PropTypes.string.isRequired,
//   bar: PropTypes.func,
//   baz: PropTypes.number.isRequired
// }
