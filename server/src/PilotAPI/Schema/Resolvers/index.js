const { PilotAPI } = require('../../../PilotAPI')
const { KubeClient } = require('../../KubeClient')

const { ApiResolver } = require('./ApiResolver')
const { NamespaceResolver } = require('./NamespaceResolver')

const QueryResolver = {
  api: () => PilotAPI,
  namespaces: async () => {
    const namespaces = await KubeClient.api.v1.namespaces.get()
    return namespaces.body.items
  }
}

module.exports.Resolvers = {
  Query: QueryResolver,
  Api: ApiResolver,
  Namespace: NamespaceResolver
}
