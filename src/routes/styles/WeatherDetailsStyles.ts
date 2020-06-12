import {StyleSheet} from 'react-native';
import {Fonts, Metrics, Colors, PopularStyles} from '../../themes';

export default StyleSheet.create({
  background: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
  },
  container: {
    paddingBottom: 60,
  },
  content: {
    padding: 16,
  },
  header: {
    marginBottom: 30,
  },
  cityName: {
    ...Fonts.style.boldHuge,
    color: Colors.white,
    ...PopularStyles.shadowStyles,
  },
  description: {
    ...Fonts.style.boldRegural,
    color: Colors.white,
    ...PopularStyles.shadowStyles,
  },
  date: {
    ...Fonts.style.baseSmall,
    color: Colors.white,
    marginTop: 8,
    ...PopularStyles.shadowStyles,
  },
});
