const { Client, config } = require('kubernetes-client')

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

  async namespaces() {
    const results = await this.api.namespaces.get()
    return results.body.items
  }

  async namespace(name) {
    const items = Object.values(await this.namespaces())
    return items.find(({ metadata }) => metadata.name === name)
  }

  async deployments(namespace) {
    const results = await this.apps.namespaces(namespace).deployments.get()
    return results.body.items
  }
}
