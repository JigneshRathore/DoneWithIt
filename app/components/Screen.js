import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default function Screen ({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})

Screen.propTypes = {
  style: PropTypes.object || PropTypes.array,
  children: PropTypes.node.isRequired
}
