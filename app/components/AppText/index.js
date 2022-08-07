import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
// import styles from './styles'
import defaultStyles from '../../config/styles'

export default function AppText ({ children, style }) {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>
}

AppText.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object || PropTypes.array
}
