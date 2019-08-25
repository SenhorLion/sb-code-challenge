import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

let apolloClient = null;

const BASE_API_URI = 'https://countries.trevorblades.com/';

const httpLink = new HttpLink({
  uri: BASE_API_URI,
});

// TODO: Apollo - Implement InMemoryCache options
const cache = new InMemoryCache();

function create() {
  return new ApolloClient({
    link: httpLink,
    cache,
  });
}

export default function initApollo() {
  // Reuse client if already created
  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}
