const { KubeClient } = require('../../../KubeClient')

const kubernetes = new KubeClient()

module.exports.NamespaceResolver = {
  id: ({ metadata }) => metadata.uid,
  name: ({ metadata }) => metadata.name,
  status: ({ status }) => status.phase,
  configMaps: ({ metadata }) => kubernetes.configMapsScoped(metadata.name),
  deployments: ({ metadata }) => kubernetes.scopedDeployments(metadata.name),
  endpoints: ({ metadata }) => kubernetes.endpointsScoped(metadata.name),
  events: ({ metadata }) => kubernetes.eventsScoped(metadata.name),
  limitRanges: ({ metadata }) => kubernetes.limitRangesScoped(metadata.name),
  persistentVolumeClaims: ({ metadata }) => kubernetes.persistentVolumeClaimsScoped(metadata.name),
  pods: ({ metadata }) => kubernetes.podsScoped(metadata.name),
  podTemplates: ({ metadata }) => kubernetes.podTemplatesScoped(metadata.name),
  replicationControllers: ({ metadata }) => kubernetes.replicationControllersScoped(metadata.name),
  resourceQuotas: ({ metadata }) => kubernetes.resourceQuotasScoped(metadata.name),
  secrets: ({ metadata }) => kubernetes.secretsScoped(metadata.name),
  serviceAccounts: ({ metadata }) => kubernetes.serviceAccountsScoped(metadata.name),
  services: ({ metadata }) => kubernetes.servicesScoped(metadata.name)
}
