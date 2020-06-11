import {StyleSheet} from 'react-native';

import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 12,
  },
  title: {
    ...Fonts.style.baseRegural,
    color: Colors.iron,
  },
  date: {
    ...Fonts.style.baseSmall,
    color: Colors.smoke,
  },
});
