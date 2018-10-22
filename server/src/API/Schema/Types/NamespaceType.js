
module.exports.NamespaceType = `
  type Namespace {
    id: String,
    name: String,
    status: String,
    configMaps: [ConfigMap],
    deployments: [Deployment],
    endpoints: [Endpoint],
    events: [Event],
    limitRanges: [LimitRange],
    persistentVolumeClaims: [PersistentVolumeClaim],
    pods: [Pod],
    podTemplates: [PodTemplate],
    replicationControllers: [ReplicationController],
    resourceQuotas: [ResourceQuota],
    secrets: [Secret],
    serviceAccounts: [ServiceAccount],
    services: [Service]
  }
`
