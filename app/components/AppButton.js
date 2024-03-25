import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'
import PropTypes from 'prop-types'

export default function AppButton ({ label, onClick, color = 'primary' }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onClick}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
})


AppButton.propTypes = {
  label: PropTypes.object || PropTypes.array,
  onClick: PropTypes.object || PropTypes.array,
  color: PropTypes.object || PropTypes.array,
}
// AppTextInput.propTypes = {
//   style: PropTypes.object || PropTypes.array,
//   value: PropTypes.string,
//   onChangeText: PropTypes.func,
//   placeholder: PropTypes.string,
//   icon: PropTypes.string,
//   autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
//   autoCorrect: PropTypes.bool,
//   keyboardType: PropTypes.string,
//   textContentType: PropTypes.oneOf(TextContentType),
//   secureTextEntry: PropTypes.bool
// }
