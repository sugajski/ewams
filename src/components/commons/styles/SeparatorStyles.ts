import {StyleSheet} from 'react-native';
import {Colors} from '../../../themes';

export default StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    textShadowColor: Colors.shadow,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 6,
  },
});
