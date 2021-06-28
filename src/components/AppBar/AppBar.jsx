import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: theme.colors.primary,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
      <AppBarTab title="Repositories" />
    </View>;
};

export default AppBar;