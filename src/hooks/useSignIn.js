import { useMutation } from '@apollo/client';
import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [authorize, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    const { data } = await authorize({ variables: { username: username, password: password } });
    await authStorage.setAccessToken(data?.authorize?.accessToken);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};

export default useSignIn;