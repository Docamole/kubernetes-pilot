const { Client, config } = require('kubernetes-client')

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

  getItems({ body }) { return body.items }
  getItem({ body }) { return body }

  // **************************************************************************
  // API Base GET Requests
  // **************************************************************************

  async componentStatuses()       { return this.getItems(await this.api.componentstatuses.get()) }
  async configMaps()              { return this.getItems(await this.api.configmaps.get()) }
  async endpoints()               { return this.getItems(await this.api.endpoints.get()) }
  async events()                  { return this.getItems(await this.api.endpoints.get()) }
  async limitRanges()             { return this.getItems(await this.api.limitranges.get()) }
  async namespaces()              { return this.getItems(await this.api.namespaces.get()) }
  async nodes()                   { return this.getItems(await this.api.nodes.get()) }
  async persistentVolumeClaims () { return this.getItems(await this.api.persistentvolumeclaims.get()) }
  async persistentVolumes()       { return this.getItems(await this.api.persistentvolumes.get()) }
  async pods()                    { return this.getItems(await this.api.pods.get()) }
  async podTemplates()            { return this.getItems(await this.api.podtemplates.get()) }
  async replicationControllers()  { return this.getItems(await this.api.replicationcontrollers.get()) }
  async resourceQuotas()          { return this.getItems(await this.api.resourcequotas.get()) }
  async secrets()                 { return this.getItems(await this.api.secrets.get()) }
  async serviceAccounts()         { return this.getItems(await this.api.secrets.get()) }
  async services()                { return this.getItems(await this.api.services.get()) }

  async componentStatus(name)     { return this.getItem(await this.api.componentstatuses(name).get()) }
  async namespace(name)           { return this.getItem(await this.api.namespaces(name).get()) }

  // **************************************************************************
  // Namespace Scoped GET Requests
  // **************************************************************************

  async scopedDeployments(namespace)    { return this.getItems(await this.apps.namespaces(namespace).deployments.get()) }
}
