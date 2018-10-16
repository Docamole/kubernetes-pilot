import ApolloClient from 'apollo-boost'

import typeDefs from './typeDefs.graphql'

const defaults = {
  workspace: {
    activeNamespace: 'default',
    __typename: 'Workspace'
  }
}

const resolvers = {
  Query: {
    activeNamespace: (args, vars, { cache }) => {
      const namespace = cache.data.data['$ROOT_QUERY.workspace'].activeNamespace
      return namespace
    }
  }
}

class PilotClient {
  constructor() {
    this.client = new ApolloClient({
      clientState: {
        defaults,
        resolvers,
        typeDefs
      }
    })
  }
}

export default PilotClient
