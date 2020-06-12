import {StyleSheet} from 'react-native';

import {Fonts, Colors, PopularStyles} from '../../themes';

export default StyleSheet.create({
  container: {
    marginTop: 20,
    width: 70,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    ...Fonts.style.baseRegural,
    color: Colors.white,
    ...PopularStyles.shadowStyles,
  },
});
