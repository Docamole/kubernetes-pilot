import ApolloClient, { InMemoryCache, HttpLink } from 'apollo-boost'

import clientTypes from './clientTypes.graphql'

const defaults = {
  workspace: {
    activeNamespace: 'default',
    __typename: 'Workspace'
  }
}

// FIXME: Try passing an ApolloLink built from HttpLink
// (note: need to move ApolloClient back into the brackets to import core client)

class PilotClient {
  constructor() {
    // this.link = new HttpLink()
    this.cache = new InMemoryCache()
    this.client = new ApolloClient({
      // link: this.link,
      cache: this.cache,
      clientState: {
        defaults,
        resolvers: this.resolvers(),
        typeDefs: clientTypes
      }
    })
  }

  resolvers() {
    return {
      Query: {
        activeNamespace: () => this.cache.data.data['$ROOT_QUERY.workspace'].activeNamespace
      }
    }
  }
}

export default PilotClient
