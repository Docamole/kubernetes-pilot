module.exports.QueryType = `
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
