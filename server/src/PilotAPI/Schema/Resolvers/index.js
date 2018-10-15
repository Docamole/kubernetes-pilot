const { PilotAPI } = require('../../../PilotAPI')
const { KubeClient } = require('../../../KubeClient')

const { ConfigResolver } = require('./ConfigResolver')
const { DeploymentResolver } = require('./DeploymentResolver')
const { NamespaceResolver } = require('./NamespaceResolver')

const kubernetes = new KubeClient()

const QueryResolver = {
  config: () => PilotAPI.config,
  namespaces: () => kubernetes.namespaces(),
  namespace: (obj, args) => kubernetes.namespace(args.name)
}

module.exports.Resolvers = {
  Query: QueryResolver,
  Config: ConfigResolver,
  Deployment: DeploymentResolver,
  Namespace: NamespaceResolver
}
