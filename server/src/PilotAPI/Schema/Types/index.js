const { ApiType } = require('./ApiType')
const { DeploymentType } = require('./DeploymentType')
const { NamespaceType } = require('./NamespaceType')

const QueryType = `
  type Query {
    api: Api,
    namespaces: [Namespace],
    namespace(name: String!): Namespace
  }
`

module.exports.Types = [
  QueryType,
  ApiType,
  DeploymentType,
  NamespaceType
]
