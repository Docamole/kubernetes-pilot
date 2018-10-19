const { KubeClient } = require('../../../KubeClient')

const { ComponentStatusResolver } = require('./ComponentStatusResolver')
const { DeploymentResolver } = require('./DeploymentResolver')
const { NamespaceResolver } = require('./NamespaceResolver')

const kubernetes = new KubeClient()

const QueryResolver = {
  componentStatuses: () => kubernetes.componentStatuses(),
  componentStatus: (obj, args) => kubernetes.componentStatus(args.name),
  namespaces: () => kubernetes.namespaces(),
  namespace: (obj, args) => kubernetes.namespace(args.name)
}

module.exports.Resolvers = {
  Query: QueryResolver,
  ComponentStatus: ComponentStatusResolver,
  Deployment: DeploymentResolver,
  Namespace: NamespaceResolver
}
