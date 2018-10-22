const { Client, config } = require('kubernetes-client')

// Helpers
const ITEMS = ({ body }) => body.items
const ITEM = ({ body }) => body

// TODO: Check that configuration loaded properly, report error and exit if kubenetes config can't be read
// TODO: Update readme to reflect that kubectl / kubernetes-cli is a prerequisite
module.exports.KubeClient = class KubeClient {
  constructor() {
    // Attempt to load config from current context, fallback to local config
    try {
      this.config = config.fromCluster()
    } catch (err) {
      this.config = config.fromKubeconfig()
    }

    this.client = new Client({
      config: this.config,
      version: '1.10'
    })
    this.api = this.client.apis.v1
    this.apps = this.client.apis.apps.v1
  }


  // **************************************************************************
  // API Base GET Requests
  // **************************************************************************

  async componentStatuses()       { return ITEMS(await this.api.componentstatuses.get()) }
  async configMaps()              { return ITEMS(await this.api.configmaps.get()) }
  async endpoints()               { return ITEMS(await this.api.endpoints.get()) }
  async events()                  { return ITEMS(await this.api.endpoints.get()) }
  async limitRanges()             { return ITEMS(await this.api.limitranges.get()) }
  async namespaces()              { return ITEMS(await this.api.namespaces.get()) }
  async nodes()                   { return ITEMS(await this.api.nodes.get()) }
  async persistentVolumeClaims()  { return ITEMS(await this.api.persistentvolumeclaims.get()) }
  async persistentVolumes()       { return ITEMS(await this.api.persistentvolumes.get()) }
  async pods()                    { return ITEMS(await this.api.pods.get()) }
  async podTemplates()            { return ITEMS(await this.api.podtemplates.get()) }
  async replicationControllers()  { return ITEMS(await this.api.replicationcontrollers.get()) }
  async resourceQuotas()          { return ITEMS(await this.api.resourcequotas.get()) }
  async secrets()                 { return ITEMS(await this.api.secrets.get()) }
  async serviceAccounts()         { return ITEMS(await this.api.serviceaccounts.get()) }
  async services()                { return ITEMS(await this.api.services.get()) }

  async componentStatus(name)     { return ITEM(await this.api.componentstatuses(name).get()) }
  async namespace(name)           { return ITEM(await this.api.namespaces(name).get()) }


  // **************************************************************************
  // Namespace Scoped GET Requests
  // **************************************************************************

  async bindingsScoped(namespace)               { return ITEMS(await this.api.namespaces(namespace).bindings.get()) }
  async configMapsScoped(namespace)             { return ITEMS(await this.api.namespaces(namespace).configmaps.get()) }
  async endpointsScoped(namespace)              { return ITEMS(await this.api.namespaces(namespace).endpoints.get()) }
  async eventsScoped(namespace)                 { return ITEMS(await this.api.namespaces(namespace).events.get()) }
  async limitRangesScoped(namespace)            { return ITEMS(await this.api.namespaces(namespace).limitranges.get()) }
  async persistentVolumeClaimsScoped(namespace) { return ITEMS(await this.api.namespaces(namespace).persistentvolumeclaims.get()) }
  async podsScoped(namespace)                   { return ITEMS(await this.api.namespaces(namespace).pods.get()) }
  async podTemplatesScoped(namespace)           { return ITEMS(await this.api.namespaces(namespace).podtemplates.get()) }
  async replicationControllersScoped(namespace) { return ITEMS(await this.api.namespaces(namespace).replicationcontrollers.get()) }
  async resourceQuotasScoped(namespace)         { return ITEMS(await this.api.namespaces(namespace).resourcequotas.get()) }
  async secretsScoped(namespace)                { return ITEMS(await this.api.namespaces(namespace).secrets.get()) }
  async serviceAccountsScoped(namespace)        { return ITEMS(await this.api.namespaces(namespace).serviceaccounts.get()) }
  async servicesScoped(namespace)               { return ITEMS(await this.api.namespaces(namespace).services.get()) }

  async configMapScoped(namespace, name)              { return ITEM(await this.api.namespaces(namespace).configmaps(name).get()) }
  async endpointScoped(namespace, name)               { return ITEM(await this.api.namespaces(namespace).endpoints(name).get()) }
  async eventScoped(namespace, name)                  { return ITEM(await this.api.namespaces(namespace).events(name).get()) }
  async limitRangeScoped(namespace, name)             { return ITEM(await this.api.namespaces(namespace).limitranges(name).get()) }
  async persistentVolumeClaimScoped(namespace, name)  { return ITEM(await this.api.namespaces(namespace).persistentvolumeclaims(name).get()) }
  async podScoped(namespace, name)                    { return ITEM(await this.api.namespaces(namespace).pods(name).get()) }
  async podTemplateScoped(namespace, name)            { return ITEM(await this.api.namespaces(namespace).podtemplates(name).get()) }
  async replicationControllerScoped(namespace, name)  { return ITEM(await this.api.namespaces(namespace).replicationcontrollers(name).get()) }
  async resourceQuotaScoped(namespace, name)          { return ITEM(await this.api.namespaces(namespace).resourcequotas(name).get()) }
  async secretScoped(namespace, name)                 { return ITEM(await this.api.namespaces(namespace).secrets(name).get()) }
  async serviceAccountScoped(namespace, name)         { return ITEM(await this.api.namespaces(namespace).serviceaccounts(name).get()) }
  async serviceScoped(namespace, name)                { return ITEM(await this.api.namespaces(namespace).services(name).get()) }

  // TODO: Move this to APPS section?
  async scopedDeployments(namespace)    { return ITEMS(await this.apps.namespaces(namespace).deployments.get()) }

  async createNamespace(namespace) {
    await this.api.namespaces.post({
      body: {
        kind: 'Namespace',
        apiVersion: 'v1',
        metadata: {
          name: namespace,
          labels: {
            name: namespace
          }
        }
      }
    })
    return this.namespace(namespace)
  }
}
