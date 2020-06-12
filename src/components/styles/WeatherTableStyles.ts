import {StyleSheet} from 'react-native';

import {Colors, Fonts, PopularStyles} from '../../themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  legendSign: {
    ...Fonts.style.boldHuge,
    color: Colors.white,
    ...PopularStyles.shadowStyles,
  },
  legendDescription: {
    ...Fonts.style.baseSmall,
    color: Colors.white,
    ...PopularStyles.shadowStyles,
  },
});
