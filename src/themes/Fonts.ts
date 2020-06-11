import {Platform} from 'react-native';

const type = {
  base: Platform.OS === 'ios' ? 'OpenSans' : 'OpenSans-Regular',
  bold: 'OpenSans-Bold',
};

const size = {
  small: {
    fontSize: 12,
    lineHeight: 16,
  },
  regular: {
    fontSize: 18,
    lineHeight: 24,
  },
  huge: {
    fontSize: 24,
    lineHeight: 40,
  },
};

const style = {
  baseSmall: {
    fontFamily: type.base,
    ...size.small,
  },
  baseRegural: {
    fontFamily: type.base,
    ...size.regular,
  },
  baseHuge: {
    fontFamily: type.base,
    ...size.huge,
  },
};

export default {
  style,
};
