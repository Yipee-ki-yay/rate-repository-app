import React from 'react';
import { useParams } from 'react-router-native';
import useRepository from '../../hooks/useRepository';
import RepositoryItem from '../RepositoryList/RepositoryItem';


const RepositorySingle = () => {
  const { id } = useParams();
  const { repository, loading } = useRepository(id);

  if (loading) return null;

  return (
    <RepositoryItem item={repository} isShowRepButton={true} />
  );
};

export default RepositorySingle;
