import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import useReviews from '../../hooks/useReviews';
import RepositoryItem from '../RepositoryList/RepositoryItem';


const RepositorySingle = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);
  const { reviews, reviewsLoading } = useReviews(id);
  console.log('reviews, reviewsLoading', reviews, reviewsLoading);

  if (loading) return null;

  return (
    <RepositoryItem item={repository} reviews={reviews} isShowRepButton={true} />
  );
};

export default RepositorySingle;
