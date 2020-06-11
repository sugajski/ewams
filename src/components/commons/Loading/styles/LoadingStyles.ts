import {StyleSheet} from 'react-native';

import {Colors, PopularStyles} from '../../../../themes';

export default StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    ...PopularStyles.elevationStyles,
  },
});
