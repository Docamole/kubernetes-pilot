const { Client, config } = require('kubernetes-client')

const KubeClient = new Client({
  config: config.fromKubeconfig(),
  version: '1.9'
})

module.exports.KubeClient = KubeClient
