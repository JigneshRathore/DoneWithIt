import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  FlatList
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../config/colors'
import defaultStyles from '../../config/styles'
import AppText from '../AppText'
import AppButton from '../AppButton'
import Screen from '../Screen'
import PickerItem from './PickerItem'

export default function AppPicker ({
  selectedItem,
  setSelectedItem,
  value,
  items,
  placeholder,
  // onChangeText,
  // style,
  icon,
  ...otherProps
}) {
  const [modelOpen, setModelOpen] = useState(false)
  return (
    <View style={{
      backgroundColor: 'lightgray',
      borderRadius: 25,
      height: 50
    }}>
      <TouchableWithoutFeedback onPress={() => setModelOpen(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              size={20}
              style={{ paddingHorizontal: 5 }}
              name={icon}
              color={colors.medium}
            />
          )}
          <AppText
            style={[styles.textInput, defaultStyles.text]}
            {...otherProps}
          >
            {selectedItem?.label ? selectedItem?.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            size={20}
            style={{ padding: 5 }}
            name='chevron-down'
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modelOpen} animationType='slide' style={{
        backgroundColor: 'lightgray',
        padding: 10
      }}>
        <Screen style={{
          padding: 10
          // backgroundColor: 'lightgray'
        }} >
          <AppButton
            label={'Close'}
            color="secondary"
            onClick={() => setModelOpen(false)}
          />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) =>
              <PickerItem label={item.label} onPress={() => {
                setModelOpen(false)
                setSelectedItem(item)
              }} />
            }
          />
        </Screen>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10

  },
  textInput: {
    flex: 1
  }
})

AppPicker.propTypes = {
  style: PropTypes.object || PropTypes.array,
  selectedItem: PropTypes.object,
  setSelectedItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
