import React, { useState } from 'react'
import GlobalStyles from './GlobalStyles'
import DetactingOrientation from './DetactingOrientation'
import FlexBox from './FlexBox'
import AbsoluteandRelativePositioning from './AbsoluteandRelativePositioning'
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import AccountScreen from './app/screens/AccountScreen'
import ListingScreen from './app/screens/ListingScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import Borders from './app/ui/Borders'
import Shadows from './app/ui/Shadows'
import AppText from './app/components/AppText'
import Icons from './app/ui/Icons'
import AppButton from './app/components/AppButton'
import Card from './app/components/Card'
import ListingDetailsScreen from './app/screens/ListingDetailsScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import LoginScreen from './app/screens/LoginScreen'
import SlideUpAnimation from './app/components/animations/SlideUpAnimation'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AppTextInput from './app/components/AppTextInput'
import { Switch, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import AppPicker from './app/components/AppPicker'

export default function App () {
  const [first, setFirst] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const [selectedLanguage, setSelectedLanguage] = useState()
  const [category, setCategory] = useState()

  const categories = [
    { label: 'Laptop', value: 1 },
    { label: 'Mobile', value: 2 },
    { label: 'Tabs', value: 3 }
  ]

  return (
    <Screen>
      <View
        style={{
          padding: 10
        }}
      >
        <AppText>{first}</AppText>
        <AppPicker
          selectedItem={category}
          setSelectedItem={(item) => setCategory(item)}
          // onChangeText={setFirst}
          placeholder='Category'
          icon='apps'
          style={{
            backgroundColor: 'lightgray'
          }}
          items={categories}
        />
        {/* <AppTextInput onChangeText={setFirst} value={first} icon='email' /> */}
        {/* <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item label='Java' value='java' />
          <Picker.Item label='JavaScript' value='js' />
          <Picker.Item label='TypeScript' value='ts' />
          <Picker.Item label='CoreScript' value='cs' />
          <Picker.Item label='ThatScript' value='ds' />
        </Picker>

        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: '#767577', true: '#81b0fd' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor='#3e3e3e'
        /> */}
      </View>
    </Screen>
    // <SafeAreaView style={GlobalStyles.androidSafeArea}>
    //   {/* <LoginScreen
    //   image={require("./app/assets/images/jacket.jpg")}
    //   title="test"
    //   subTitle="$200"
    // /> */}
    //   <View
    //     style={{
    //       height: '100%'
    //       // backgroundColor: "#f8f4f4",
    //       // padding: 20,
    //       // paddingTop: 20,
    //       // flex: 1,
    //       // alignItems: "center",
    //       // justifyContent: "center"
    //     }}
    //   >
    //     <ListingScreen />
    //     {/* <AccountScreen /> */}
    //     {/* <ListItem  title="Test" subTitle="1234" ImageComponent={<Icon name={"email"} />} /> */}
    //     {/* <MessagesScreen /> */}
    //     {/* <ViewImageScreen /> */}
    //     {/* <SlideUpAnimation /> */}
    //   </View>
    // </SafeAreaView>

  // <SafeAreaView style={GlobalStyles.androidSafeArea}>
  //   {/* <WelcomeScreen /> */}
  //   {/* <View
  //     style={{
  //       flex: 1,
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <AppButton label="Submit" onClick={() => console.log("Tapped!")}/>
  //   </View> */}
  //   {/* <AppText>Organizing Styles</AppText> */}
  //   {/* <StatusBar style="auto" /> */}
  // </SafeAreaView>
  )
}
