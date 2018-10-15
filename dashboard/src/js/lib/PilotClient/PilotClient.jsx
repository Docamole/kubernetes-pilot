import ApolloClient from 'apollo-boost'

import typeDefs from './typeDefs.graphql'

const defaults = {
  activeNamespace: 'default'
}

class PilotClient {
  constructor() {
    this.client = new ApolloClient({
      clientState: {
        defaults,
        resolvers: {},
        typeDefs
      }
    })
  }
}

export default PilotClient
