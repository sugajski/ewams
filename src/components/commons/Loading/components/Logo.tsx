import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

import LogoStyles from './styles/LogoStyles';

const Logo: FC<ViewProps> = () => (
  <View style={LogoStyles.container}>
    <View style={[LogoStyles.square, LogoStyles.a]} />
    <View style={[LogoStyles.square, LogoStyles.b]} />
    <View style={[LogoStyles.square, LogoStyles.c]} />
    <View style={[LogoStyles.square, LogoStyles.d]} />
  </View>
);

export default Logo;
