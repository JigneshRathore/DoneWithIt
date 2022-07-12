import { Platform } from 'react-native'
import colors from './colors'

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: colors.dark
    //   ...Platform.select({
    //     ios: {
    //       fontSize: 18,
    //       fontFamily: 'Avenir'
    //     },
    //     android: {
    //       fontSize: 18,
    //       fontFamily: 'Roboto'
    //     }
    //   })
  }

}
