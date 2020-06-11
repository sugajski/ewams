import React, {FC} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {Images, Colors} from '../themes';
import SendButtonStyles from './styles/SendButtonStyles';

interface ISendButtonProps {
  tintColor?: string;
  onPress: () => void;
  enabled?: boolean;
}

const SendButton: FC<ISendButtonProps> = ({
  tintColor = Colors.sapphire,
  onPress,
  enabled = true,
}) => (
  <TouchableOpacity onPress={enabled ? onPress : () => {}}>
    <View style={SendButtonStyles.container}>
      <Image
        source={Images.send}
        style={[SendButtonStyles.icon, {tintColor: tintColor}]}
      />
    </View>
  </TouchableOpacity>
);

export default SendButton;
