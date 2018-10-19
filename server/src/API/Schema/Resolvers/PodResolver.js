module.exports.PodResolver = {
  name: ({ metadata }) => metadata.name,
  values: obj => JSON.stringify(obj)
}
