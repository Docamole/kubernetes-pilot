const { PilotAPI } = require('../../../PilotAPI')
const { KubeClient } = require('../../KubeClient')

const { ApiResolver } = require('./ApiResolver')
const { DeploymentResolver } = require('./DeploymentResolver')
const { NamespaceResolver } = require('./NamespaceResolver')

const kubernetes = new KubeClient()

const QueryResolver = {
  api: () => PilotAPI,
  namespaces: () => kubernetes.namespaces(),
  namespace: (obj, args) => kubernetes.namespace(args.name)
}

module.exports.Resolvers = {
  Query: QueryResolver,
  Api: ApiResolver,
  Deployment: DeploymentResolver,
  Namespace: NamespaceResolver
}
