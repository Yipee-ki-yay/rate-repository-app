import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
  const [createUser, result] = useMutation(CREATE_USER);

  const createNewUser = async ({ username, password }) => {
    const { data } = await createUser({ variables: { username, password } });
    console.log('createUser data:', data);
    return data;
  };

  return [createNewUser, result];
};

export default useSignUp;