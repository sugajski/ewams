import {StyleSheet} from 'react-native';

import {Fonts, Metrics, Colors, PopularStyles} from '../../themes';

export default StyleSheet.create({
  container: {
    width: (Metrics.screenWidth - 32) / 2,
    paddingVertical: 7,
  },
  title: {
    ...Fonts.style.boldSmall,
    color: Colors.white,
    ...PopularStyles.shadowStyles,
  },
  description: {
    ...Fonts.style.boldHuge,
    color: Colors.white,
    ...PopularStyles.shadowStyles,
  },
  paddingLeft: {
    paddingLeft: 5,
  },
  paddingRight: {
    paddingRight: 5,
  },
});
