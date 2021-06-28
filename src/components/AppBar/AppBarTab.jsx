import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  tab: {
    padding: 20,
  },
});

const AppBarTab = ({title}) => {
  return (
    <Pressable style={styles.tab} onPress={() => {}}><Text color="textSecondary" fontWeight="bold">{title}</Text></Pressable>
  );
};

export default AppBarTab;
