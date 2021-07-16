import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

import theme from '../../theme';
import { format } from 'date-fns';


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    padding: 10,
    marginTop: 10,
    ...theme.flex.flexContainerRow
  },
  rating: {
    color: theme.colors.quaternary,
    borderWidth: 2,
    borderColor: theme.colors.quaternary,
    borderRadius: 50,
    width: 36,
    height: 36,
    textAlign: 'center',
    lineHeight: 34,
  },
  date: {
    color: theme.colors.textTertiary,
    marginTop: 5,
  },
  text: {
    marginTop: 10,
  },
  descrContainer: {
    width: '89%',
    marginLeft: 10,
  }
});

const ReviewItem = ({review}) => {
  const {text, rating, createdAt, user} = review.node;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.rating} fontWeight="bold">{rating}</Text>
      </View>
      <View style={styles.descrContainer}>
        <Text fontWeight="bold">{user.username}</Text>
        <Text style={styles.date}>{format(new Date(createdAt), "MM/dd/yyyy")}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
