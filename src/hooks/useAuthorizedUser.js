import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (withReview = false) => {
  const options = withReview ?  {
    variables: {
      includeReviews: true,
    },
    fetchPolicy: "cache-and-network",
  } : {
    fetchPolicy: 'cache-and-network',
  };
  const { data, refetch } = useQuery(GET_AUTHORIZED_USER, options);

  return { data, refetch };
};

export default useAuthorizedUser;