import React, {FC} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import ButtonStyles from './styles/ButtonStyles';

interface IButtonProps {
  title: string;
  onPress: () => void;
}

const Button: FC<IButtonProps> = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={ButtonStyles.container}>
      <Text style={ButtonStyles.title}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default Button;
