const { ComponentStatusResolver } = require('./ComponentStatusResolver')
const { ConfigMapResolver } = require('./ConfigMapResolver')
const { DeploymentResolver } = require('./DeploymentResolver')
const { EndpointResolver } = require('./EndpointResolver')
const { EventResolver } = require('./EventResolver')
const { LimitRangeResolver } = require('./LimitRangeResolver')
const { NamespaceResolver } = require('./NamespaceResolver')
const { NodeResolver } = require('./NodeResolver')
const { PersistentVolumeClaimResolver } = require('./PersistentVolumeClaimResolver')
const { PersistentVolumeResolver } = require('./PersistentVolumeResolver')
const { PodResolver } = require('./PodResolver')
const { ReplicationControllerResolver } = require('./ReplicationControllerResolver')
const { ResourceQuotaResolver } = require('./ResourceQuotaResolver')
const { SecretResolver } = require('./SecretResolver')
const { ServiceAccountResolver } = require('./ServiceAccountResolver')
const { ServiceResolver } = require('./ServiceResolver')

const { KubeClient } = require('../../../KubeClient')
const kubernetes = new KubeClient()

const QueryResolver = {
  componentStatuses: () => kubernetes.componentStatuses(),
  componentStatus: (obj, args) => kubernetes.componentStatus(args.name),
  configMaps: () => kubernetes.configMaps(),
  endpoints: () => kubernetes.endpoints(),
  events: () => kubernetes.events(),
  limitRanges: () => kubernetes.limitRanges(),
  namespaces: () => kubernetes.namespaces(),
  namespace: (obj, args) => kubernetes.namespace(args.name),
  nodes: () => kubernetes.nodes(),
  persistentVolumeClaims: () => kubernetes.persistentVolumeClaims(),
  persistentVolumes: () => kubernetes.persistentVolumes(),
  pods: () => kubernetes.pods(),
  replicationControllers: () => kubernetes.replicationControllers(),
  resourceQuotas: () => kubernetes.resourceQuotas(),
  secrets: () => kubernetes.secrets(),
  serviceAccounts: () => kubernetes.serviceAccounts(),
  services: () => kubernetes.services()
}

module.exports.Resolvers = {
  Query: QueryResolver,
  ComponentStatus: ComponentStatusResolver,
  ConfigMap: ConfigMapResolver,
  Deployment: DeploymentResolver,
  Endpoint: EndpointResolver,
  Event: EventResolver,
  LimitRange: LimitRangeResolver,
  Namespace: NamespaceResolver,
  Node: NodeResolver,
  PersistentVolumeClaim: PersistentVolumeClaimResolver,
  PersistentVolume: PersistentVolumeResolver,
  Pod: PodResolver,
  ReplicationController: ReplicationControllerResolver,
  ResourceQuota: ResourceQuotaResolver,
  Secret: SecretResolver,
  ServiceAccount: ServiceAccountResolver,
  Service: ServiceResolver
}
