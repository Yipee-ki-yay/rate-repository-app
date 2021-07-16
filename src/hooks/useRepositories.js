import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import parseSortBy from "../utils/parseSortBy";

const useRepositories = (sortBy) => {
  const sortValues = parseSortBy(sortBy);
  console.log('sortValues', sortValues);
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    variables: sortValues,
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data?.repositories, loading };
};

export default useRepositories;