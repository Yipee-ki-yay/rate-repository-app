import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useRepository = (id) => {
  const { loading, data } = useQuery(GET_REPOSITORY_BY_ID, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });
  
  return { repository: data?.repository, loading };
};

export default useRepository;