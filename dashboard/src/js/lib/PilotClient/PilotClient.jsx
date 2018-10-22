import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { onError } from 'apollo-link-error'
import { withClientState } from 'apollo-link-state'
import { ApolloLink } from 'apollo-link'
import gql from 'graphql-tag'

import clientTypes from './clientTypes.graphql'

class PilotClient {
  constructor() {
    this.cache = new InMemoryCache()
    this.link = ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.map(({ message, location, path }) => {
            console.log(`[GraphQL Error]: Message: ${message}, Location: ${location}, Path: ${path}`)
          })
        }
        if (networkError) {
          console.log(`[Network Error]: ${networkError}`)
        }
      }),
      withClientState({
        defaults: PilotClient.defaults(),
        resolvers: PilotClient.resolvers(),
        typeDefs: clientTypes,
        cache: this.cache
      }),
      new HttpLink({
        uri: '/graphql',
        credentials: 'same-origin'
      })
    ])
    this.client = new ApolloClient({
      link: this.link,
      cache: this.cache,
      fetchOptions: {
        credentials: 'include'
      }
    })
  }

  static defaults() {
    return {
      activeNamespace: 'default'
    }
  }

  static resolvers() {
    return {}
  }
}

export default PilotClient
