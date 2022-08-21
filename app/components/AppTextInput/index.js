import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../config/colors'
import defaultStyles from '../../config/styles'
import PropTypes, { TextContentType } from '../PropTypes'

export default function AppTextInput ({
  value,
  onChangeText,
  placeholder,
  style,
  icon,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  textContentType,
  secureTextEntry
}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons size={20} style={{ paddingHorizontal: 5 }} name={icon} color={colors.medium} />}
      <TextInput
        style={[styles.textInput, defaultStyles.text]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
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

AppTextInput.propTypes = {
  style: PropTypes.object || PropTypes.array,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoCorrect: PropTypes.bool,
  keyboardType: PropTypes.string,
  textContentType: PropTypes.oneOf(TextContentType),
  secureTextEntry: PropTypes.bool
}

//   foo: PropTypes.string.isRequired,
//   bar: PropTypes.func,
//   baz: PropTypes.number.isRequired
