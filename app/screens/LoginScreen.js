import React, { useState } from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'

export default function LoginScreen () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo-red.png')}
      />
      <AppTextInput
        value={email}
        onChangeText={setEmail}
        placeholder={'email'}
        icon={'email'}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType={'email-address'}
        textContentType='emailAddress' // only IOS
      />
      <AppTextInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        icon={'lock'}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType={'email-address'}
        textContentType='password' // only IOS
        secureTextEntry={true}
      />
      <AppButton
        label="Login"
        onClick={() => {
          console.log('Auth: ', email, ' : ', password)
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6251AD',
    padding: 20
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 25
  }

})
