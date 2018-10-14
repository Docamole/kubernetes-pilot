
module.exports.NamespaceResolver = {
  id: namespace => namespace.metadata.uid,
  name: namespace => namespace.metadata.name,
  status: namespace => namespace.status.phase
}
