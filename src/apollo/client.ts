import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.WP_BACKEND_URL,
    cache: new InMemoryCache(),
});