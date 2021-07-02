import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
  const { data } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  return { data };
};

export default useAuthorizedUser;