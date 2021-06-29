import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#999'
  },
  error: {
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.input, 
    style,
    error && styles.error
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;