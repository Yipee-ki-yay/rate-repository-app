import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import parseSortBy from "../utils/parseSortBy";

const useRepositories = (sortBy, filterText) => {
  const sortValues = parseSortBy(sortBy);
  const queryVariables = {
    ...sortValues,
    searchKeyword: filterText,
    first: 4,
  };

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...queryVariables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  console.log('sortValues', sortValues);
  const { loading, data, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables: queryVariables,
    fetchPolicy: 'cache-and-network',
  });

  return { repositories: data?.repositories, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;