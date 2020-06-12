import {StyleSheet} from 'react-native';

import {Colors, Fonts, PopularStyles} from '../../../themes';

export default StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 220,
    marginLeft: 16,
    borderWidth: 1,
    borderColor: Colors.white,
    ...PopularStyles.shadowStyles,
  },
  title: {
    ...Fonts.style.baseRegural,
    color: Colors.white,
    ...PopularStyles.shadowStyles,
  },
});
