import { useQuery } from '@apollo/client';
import { GET_REVIEWS } from '../graphql/queries';

const useReviews = (id) => {
  const { loading, data } = useQuery(GET_REVIEWS, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });
  
  return { reviews: data?.repository?.reviews, reviewsLoading: loading };
};

export default useReviews;