import React from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    padding: 20,
  },
});

const AppBarTab = ({title, to}) => {
  return (
    <Link style={styles.tab} to={to}><Text color="textSecondary" fontWeight="bold">{title}</Text></Link>
    // <Pressable style={styles.tab} onPress={() => {}}><Text color="textSecondary" fontWeight="bold">{title}</Text></Pressable>
  );
};

export default AppBarTab;
