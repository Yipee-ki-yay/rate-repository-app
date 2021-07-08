import React from 'react';
import { Pressable } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const Button = ({styles, onPress, testID, children}) => {
  const button = [theme.button.standard, styles];

  return (
    <Pressable testID={testID} style={button} onPress={onPress}>
      <Text color="textSecondary" fontWeight="bold">{children}</Text>
    </Pressable>
  );
};

export default Button;
