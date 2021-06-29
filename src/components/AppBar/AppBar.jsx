import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
// import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: theme.colors.primary,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" to="/" />
        <AppBarTab title="Login" to="/login"/>
      </ScrollView>
    </View>
  );
};

export default AppBar;