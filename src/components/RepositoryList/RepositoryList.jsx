import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import { useHistory } from "react-router-native";
import { Button, Menu, Provider } from 'react-native-paper';
import { useDebounce } from "use-debounce";
import TextInput from "../TextInput";

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

const FilterText = ({ setFilterText }) => {
  return (
    <TextInput
      onChangeText={(text) => setFilterText(text)}
      placeholder='Filter repositories...'
      style={{ margin: 5, backgroundColor: "white" }}
    />
  );
};

const RepositoryItemWrap = ({item}) => {
  const history = useHistory();

  return (
    <Pressable onPress={() => history.push(`/repository/${item.id}`)}>
      <RepositoryItem item={item}/>
    </Pressable>
  );
};

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;
    return (
      <View>
        <FilterText setFilterText={props.setFilterText} />
        <SortMenu setSortBy={props.setSortBy} />
      </View>
    );
  };

  render() {
    const onEndReach = this.props.onEndReach;
    const repositories = this.props.repositories;
    const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

    return (
      <FlatList
        testID='repositoryItem'
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <RepositoryItemWrap item={item} />}
        ListHeaderComponent={this.renderHeader}
        ListHeaderComponentStyle={styles.listHeader}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.01}
      />
    );
  }
}

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("");
  const [filterText, setFilterText] = useState("");
  const [filterTextValue] = useDebounce(filterText, 500);

  const { repositories, fetchMore } = useRepositories(sortBy, filterTextValue);

  const onEndReach = () => {
    console.log('in onEndReach');
    fetchMore();
  };


  return <RepositoryListContainer 
    repositories={repositories} 
    setSortBy={setSortBy}
    setFilterText={setFilterText}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;