import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import parseSortBy from "../utils/parseSortBy";

const useRepositories = (sortBy, filterText) => {
  const sortValues = parseSortBy(sortBy);
  const queryVariables = {
    ...sortValues,
    searchKeyword: filterText,
  };

  console.log('sortValues', sortValues);
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    variables: queryVariables,
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data?.repositories, loading };
};

export default useRepositories;