import ApolloClient, {
  createNetworkInterface,
  addTypeName
} from 'apollo-client';

const networkInterface = createNetworkInterface({uri: 'https://api.github.com/graphql'});
networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    const token = '244c4ac1094b2dccc59ba368ce9ee4b9af5b42db';
    req.options.headers.authorization = `Bearer ${token}`;
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface,
  queryTransformer: addTypeName
});

// const client = new ApolloClient({
//   networkInterface: createNetworkInterface('http://0.0.0.0:1338/api'),
//   queryTransformer: addTypeName
// });

export default client;
