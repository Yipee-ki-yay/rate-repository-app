import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  // const [repositories, setRepositories] = useState();
  // const [loading, setLoading] = useState();
  const { loading, data } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  // const fetchRepositories = () => {
  //   // setLoading(true);

  //   // // Replace the IP address part with your own IP address!
  //   // const response = await fetch('http://192.168.1.106:5000/api/repositories');
  //   // const json = await response.json();

  //   // setLoading(false);
  //   // setRepositories(json);
  //   setLoading(true);
  //   setRepositories(data.repositories);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchRepositories();
  // }, []);

  return { repositories: data?.repositories, loading };
};

export default useRepositories;