const { ComponentStatusType } = require('./ComponentStatusType')
const { ConfigMapType } = require('./ConfigMapType')
const { DeploymentType } = require('./DeploymentType')
const { EndpointType } = require('./EndpointType')
const { EventType } = require('./EventType')
const { LimitRangeType } = require('./LimitRangeType')
const { NamespaceType } = require('./NamespaceType')
const { NodeType } = require('./NodeType')
const { PersistentVolumeClaimType } = require('./PersistentVolumeClaimType')
const { PersistentVolumeType } = require('./PersistentVolumeType')
const { PodTemplateType } = require('./PodTemplateType')
const { PodType } = require('./PodType')
const { ReplicationControllerType } = require('./ReplicationControllerType')
const { ResourceQuotaType } = require('./ResourceQuotaType')
const { SecretType } = require('./SecretType')
const { ServiceAccountType } = require('./ServiceAccountType')
const { ServiceType } = require('./ServiceType')

const QueryType = `
  type Query {
    componentStatuses: [ComponentStatus],
    componentStatus(name: String!): ComponentStatus,
    configMaps: [ConfigMap],
    deployments: [Deployment],
    endpoints: [Endpoint],
    events: [Event],
    limitRanges: [LimitRange],
    namespaces: [Namespace],
    namespace(name: String!): Namespace,
    nodes: [Node],
    persistentVolumeClaims: [PersistentVolumeClaim],
    persistentVolumes: [PersistentVolume],
    podTemplates: [PodTemplate],
    pods: [Pod],
    replicationControllers: [ReplicationController],
    resourceQuotas: [ResourceQuota],
    secrets: [Secret],
    serviceAccounts: [ServiceAccount],
    services: [Service]
  }
`

module.exports.Types = [
  QueryType,
  ComponentStatusType,
  ConfigMapType,
  DeploymentType,
  EndpointType,
  EventType,
  LimitRangeType,
  NamespaceType,
  NodeType,
  PersistentVolumeClaimType,
  PersistentVolumeType,
  PodTemplateType,
  PodType,
  ReplicationControllerType,
  ResourceQuotaType,
  SecretType,
  ServiceAccountType,
  ServiceType
]
