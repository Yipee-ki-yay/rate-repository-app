import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import Text from '../Text';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  tab: {
    padding: 20,
  },
});

const AppBarTab = ({title, to, onPress}) => {
  return (
    <View>
      {!onPress && <Link component={Pressable} style={styles.tab} to={to}><Text color="textSecondary" fontWeight="bold">{title}</Text></Link>}
      {onPress && <Pressable style={styles.tab} onPress={onPress}><Text color="textSecondary" fontWeight="bold">{title}</Text></Pressable>}
    </View>
  );
};

export default AppBarTab;
