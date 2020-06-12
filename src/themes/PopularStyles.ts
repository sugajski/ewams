import {StyleSheet} from 'react-native';

import Colors from './Colors';

export default StyleSheet.create({
  shadowStyles: {
    textShadowColor: Colors.shadow,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 6,
  },
  elevationStyles: {
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});
