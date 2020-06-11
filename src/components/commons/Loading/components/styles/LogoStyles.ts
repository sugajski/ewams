import {StyleSheet} from 'react-native';

import {Colors} from '../../../../../themes';

const size = 60;

export default StyleSheet.create({
  container: {
    width: size,
    height: size,
    flexDirection: 'row',
    flexWrap: 'wrap',
    transform: [{rotate: '45deg'}],
  },
  square: {
    width: size / 2 - 4,
    height: size / 2 - 4,
    borderRadius: size * 0.1,
    margin: 2,
  },
  a: {
    backgroundColor: Colors.sapphire,
  },
  b: {
    backgroundColor: Colors.magenta,
  },
  c: {
    backgroundColor: Colors.orange,
  },
  d: {
    backgroundColor: Colors.springGreen,
  },
});
