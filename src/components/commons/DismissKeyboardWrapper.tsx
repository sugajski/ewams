import React, {FC} from 'react';
import get from 'lodash/get';
import {TouchableWithoutFeedback, View, Keyboard} from 'react-native';

import {useKeyboardStatus} from '../../lib/hooks';
import DismissKeyboardWrapperStyles from './styles/DismissKeyboardWrapperStyles';

interface IDismissKeyboardWrapperProps {
  children: React.ReactNode;
  childRef: any;
  onPress?: () => void;
}

const DismissKeyboardWrapper: FC<IDismissKeyboardWrapperProps> = ({
  children,
  childRef,
  onPress,
  ...props
}) => {
  const {isKeyboardVisible} = useKeyboardStatus();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        if (isKeyboardVisible) {
          Keyboard.dismiss();
        }

        const isDisabled = get(childRef, 'current.props.disabled', false);
        if (childRef && childRef.current && !isDisabled) {
          childRef.current.focus();
        }

        if (onPress) {
          onPress();
        }
      }}
      {...props}>
      <View style={DismissKeyboardWrapperStyles.wrapper}>
        <View style={DismissKeyboardWrapperStyles.wrapper} pointerEvents="none">
          {children}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboardWrapper;
