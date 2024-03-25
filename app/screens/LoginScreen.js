import { Formik } from 'formik'
import React from 'react'
import {
  StyleSheet,
  Image
} from 'react-native'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'

export default function LoginScreen () {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/logo-red.png')}
      />
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={val => console.log('val', val)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <AppTextInput
              // value={email}
              onChangeText={handleChange('email')}
              placeholder={'email'}
              icon={'email'}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType={'email-address'}
              textContentType='emailAddress' // only IOS
            />
            <AppTextInput
              // value={password}
              onChangeText={handleChange('password')}
              placeholder={'Password'}
              icon={'lock'}
              autoCapitalize='none'
              autoCorrect={false}
              // keyboardType={'email-address'}
              textContentType='password' // only IOS
              secureTextEntry={true}
            />
            <AppButton
              label="Login"
              onClick={handleSubmit}
              // onClick={() => {
              //   // console.log('Auth: ', email, ' : ', password)
              // }}
            />
          </>
        )}
      </Formik>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#6251AD',
    margin: 10
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 25
  }

})
