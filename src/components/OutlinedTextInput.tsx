import React, {FC, forwardRef} from 'react';
import {TextInputProps} from 'react-native';
import {TextInput} from 'react-native-paper';

import {Colors} from '../themes';
import OutlinedTextInputStyles from './styles/OutlinedTextInputStyles';

interface IOutlinedTextInputProps extends TextInputProps {
  label: string;
  error: boolean;
  ref: any;
}

const textInputTheme = {
  colors: {
    primary: Colors.sapphire,
    accent: Colors.sapphire,
    error: Colors.magenta,
    text: Colors.black,
    background: Colors.white,
    placeholder: Colors.slate,
  },
};

const OutlinedTextInput: FC<IOutlinedTextInputProps> = forwardRef(
  (props, ref) => (
    //@ts-ignore warning caused by react-native-paper types being incompatible with newest react-native types
    <TextInput
      mode="outlined"
      style={OutlinedTextInputStyles.input}
      theme={textInputTheme}
      //@ts-ignore warning spreading props will override ref, but it's not
      ref={ref}
      {...props}
    />
  ),
);

export default OutlinedTextInput;
