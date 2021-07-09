import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import useAuthorizedUser from '../../hooks/useAuthorizedUser';
import useSignOut from '../../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    backgroundColor: theme.colors.primary,
  },
});

const AppBar = () => {
  const {data} = useAuthorizedUser();
  const [signOut] = useSignOut();
  const isAuthorized = data?.authorizedUser?.username;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title="Repositories" to="/" />
        {!isAuthorized && <AppBarTab title="Login" to="/login"/>}
        {isAuthorized && <AppBarTab title="Sign out" onPress={signOut} />}
        <AppBarTab title="Create a review" to="/review" />
      </ScrollView>
    </View>
  );
};

export default AppBar;