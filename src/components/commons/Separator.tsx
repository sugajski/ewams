import React, {FC} from 'react';
import {View} from 'react-native';

import SeparatorStyles from './styles/SeparatorStyles';
import {Colors} from '../../themes';

interface ISeparatorProps {
  color?: string;
}

const Separator: FC<ISeparatorProps> = ({color = Colors.white}) => (
  <View style={[SeparatorStyles.separator, {backgroundColor: color}]} />
);

export default Separator;
