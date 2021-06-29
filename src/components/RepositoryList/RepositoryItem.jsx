import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

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

const RepositoryItem = ({item}) => {
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
          <View><Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text></View>
          <View><Text color="tertiary" fontSize="subheading">{item.description}</Text></View>
          <View style={styles.langTag}><Text style={styles.langTagText}>{item.language}</Text></View>
        </View>
      </View>
      <View style={theme.flex.flexContainerRow}>
        <View style={itemStatistic}>
          <Text color="tertiary">Start</Text>
          <Text fontWeight="bold" fontSize="subheading">{handleStatisticVal(item.stargazersCount)}</Text>
        </View>
        <View style={itemStatistic}>
          <Text color="tertiary">Forks</Text>
          <Text fontWeight="bold" fontSize="subheading">{handleStatisticVal(item.forksCount)}</Text>
        </View>
        <View style={itemStatistic}>
          <Text color="tertiary">Review</Text>
          <Text fontWeight="bold" fontSize="subheading">{handleStatisticVal(item.reviewCount)}</Text>
        </View>
        <View style={itemStatistic}>
          <Text color="tertiary">Rating</Text>
          <Text fontWeight="bold" fontSize="subheading">{handleStatisticVal(item.ratingAverage)}</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
