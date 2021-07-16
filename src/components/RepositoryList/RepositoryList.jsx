import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useHistory } from "react-router-native";
import { Button, Menu, Provider } from 'react-native-paper';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  listHeader: {
    zIndex: 10,
  },
  menu: {
    zIndex: 10,
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

const SortMenu = ({setSortBy}) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
          style={styles.menu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Button onPress={openMenu}>Show sort menu</Button>}>
          <Menu.Item onPress={() => setSortBy('CREATED_AT')} title="Latest repositories" />
          <Menu.Item onPress={() => setSortBy('DESC')} title="Highest rated repositories" />
          <Menu.Item onPress={() => setSortBy('ASC')} title="Lowest rated repositories" />
        </Menu>
      </View>
    </Provider>
  );
};

export const RepositoryListContainer = ({ repositories, setSortBy }) => {
  const history = useHistory();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const renderItem = ({item}) => {
    return (
      <Pressable onPress={() => history.push(`/repository/${item.id}`)}>
        <RepositoryItem item={item}/>
      </Pressable>
    );
  };
  
  return (
    <FlatList
      testID='repositoryItem'
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      ListHeaderComponent={() => <SortMenu setSortBy={setSortBy} />}
      ListHeaderComponentStyle={styles.listHeader}
    />
  );
};

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("");
  const { repositories } = useRepositories(sortBy);

  return <RepositoryListContainer 
    repositories={repositories} 
    setSortBy={setSortBy}
  />;
};

export default RepositoryList;