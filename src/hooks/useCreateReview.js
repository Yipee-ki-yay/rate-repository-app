import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [createReview, result] = useMutation(CREATE_REVIEW);

  const createNewReview = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await createReview({ variables: { ownerName, repositoryName, rating, text } });
    console.log('createNewReview data:', data);
    return data;
  };

  return [createNewReview, result];
};

export default useCreateReview;