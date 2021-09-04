import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'node-fetch';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
    uri: 'https://safe-atoll-98733.herokuapp.com/',
    fetch
});

const authLink = setContext((_, { headers }) => {

    //Leer el token almacenado en el storage
    const token = localStorage.getItem('token');
    //console.log(token)

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    connectToDevTools: true,
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
});

export default client;