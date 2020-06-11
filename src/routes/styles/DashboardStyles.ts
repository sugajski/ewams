import {StyleSheet} from 'react-native';

import {Colors, Metrics, PopularStyles} from '../../themes';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  box: {
    backgroundColor: Colors.white,
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 4,
    ...PopularStyles.elevationStyles,
  },
  inputRow: {
    flexDirection: 'row',
    marginTop: -4,
  },
  errorDescription: {
    marginTop: 5,
    color: Colors.magenta,
  },
});
