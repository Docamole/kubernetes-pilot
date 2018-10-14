import ApolloClient from 'apollo-boost'

class PilotClient {
  constructor() {
    this.client = new ApolloClient({
      uri: 'http://localhost:8181/graphql'
    })
  }
}

export default PilotClient
