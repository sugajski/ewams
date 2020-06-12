import {StyleSheet} from 'react-native';
import {Metrics} from '../../../themes';

export default StyleSheet.create({
  container: {
    height: 56,
    width: Metrics.screenWidth,
    justifyContent: 'flex-end',
  },
  backButtonContainer: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButtonIcon: {
    width: 14,
    height: 18,
  },
});
