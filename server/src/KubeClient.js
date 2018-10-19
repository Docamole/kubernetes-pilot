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
  async serviceAccounts()         { return ITEMS(await this.api.secrets.get()) }
  async services()                { return ITEMS(await this.api.services.get()) }

  async componentStatus(name)     { return ITEM(await this.api.componentstatuses(name).get()) }
  async namespace(name)           { return ITEM(await this.api.namespaces(name).get()) }

  // **************************************************************************
  // Namespace Scoped GET Requests
  // **************************************************************************

  async scopedDeployments(namespace)    { return this.getItems(await this.apps.namespaces(namespace).deployments.get()) }
}
