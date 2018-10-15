const { ConfigType } = require('./ConfigType')
const { DeploymentType } = require('./DeploymentType')
const { NamespaceType } = require('./NamespaceType')

const QueryType = `
  type Query {
    config: [Config]
    namespaces: [Namespace],
    namespace(name: String!): Namespace
  }
`

module.exports.Types = [
  QueryType,
  ConfigType,
  DeploymentType,
  NamespaceType
]
