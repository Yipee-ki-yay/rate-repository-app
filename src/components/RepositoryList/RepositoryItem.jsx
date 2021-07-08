import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import Button from '../Button';
import * as Linking from 'expo-linking';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: 10,
  },
  image: {
    marginRight: 20,
  },
  itemStatistic: {
    padding: 20,
    textAlign: 'center',
  },
  langTag: {
    backgroundColor: theme.colors.quaternary,
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  langTagText: {
    color: theme.colors.secondary,
    fontWeight: theme.fontWeights.bold,
  }
});

const RepositoryButton = ({url}) => {
  console.log(url);
  const handleClick = () => {
    console.log(url);
    Linking.openURL(url);
  };
  
  return (
    <Button onPress={handleClick}>Open in GitHub</Button>
  );
};

const RepositoryItem = ({item, isShowRepButton}) => {
  console.log('isShowRepButton', isShowRepButton);
  const itemStatistic = [
    theme.flex.flexContainerReverse,
    styles.itemStatistic
  ];

  const imageStyles = [
    theme.images.tinyLogo,
    styles.image
  ];

  const handleStatisticVal = (val) => {
    let result = val;

    if (val >= 1000) {
      result = (val / 1000).toFixed(1) + 'k';
    }

    return result;
  };

  return (
    <View style={styles.container}>
      <View style={theme.flex.flexContainerRow}>
        <Image 
          style={imageStyles}
          // source={item.ownerAvatarUrl}
          source={{uri : item.ownerAvatarUrl}}
        />
        <View>
          <View><Text testID='repositoryName' fontWeight="bold" fontSize="subheading">{item.fullName}</Text></View>
          <View><Text testID='repositoryDescription' color="tertiary" fontSize="subheading">{item.description}</Text></View>
          <View style={styles.langTag}><Text testID='repositoryLanguage' style={styles.langTagText}>{item.language}</Text></View>
        </View>
      </View>
      <View style={theme.flex.flexContainerRow}>
        <View style={itemStatistic}>
          <Text color="tertiary">Start</Text>
          <Text testID='repositoryCounts' fontWeight="bold" fontSize="subheading">{handleStatisticVal(item.stargazersCount)}</Text>
        </View>
        <View style={itemStatistic}>
          <Text color="tertiary">Forks</Text>
          <Text testID='repositoryCounts' fontWeight="bold" fontSize="subheading">{handleStatisticVal(item.forksCount)}</Text>
        </View>
        <View style={itemStatistic}>
          <Text color="tertiary">Review</Text>
          <Text testID='repositoryCounts' fontWeight="bold" fontSize="subheading">{handleStatisticVal(item.reviewCount)}</Text>
        </View>
        <View style={itemStatistic}>
          <Text color="tertiary">Rating</Text>
          <Text testID='repositoryCounts' fontWeight="bold" fontSize="subheading">{handleStatisticVal(item.ratingAverage)}</Text>
        </View>
      </View>
      {isShowRepButton &&
        <RepositoryButton url={item.url} />
      }
    </View>
  );
};

export default RepositoryItem;
