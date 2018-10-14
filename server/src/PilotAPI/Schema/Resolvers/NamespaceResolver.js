const { KubeClient } = require('../../KubeClient')

const kubernetes = new KubeClient()

module.exports.NamespaceResolver = {
  id: obj => obj.metadata.uid,
  name: obj => obj.metadata.name,
  status: obj => obj.status.phase,
  deployments: obj => kubernetes.deployments(obj.metadata.name)
}
