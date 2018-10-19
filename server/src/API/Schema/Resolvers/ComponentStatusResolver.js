module.exports.ComponentStatusResolver = {
  name: ({ metadata }) => metadata.name,
  selfLink: ({ metadata }) => metadata.selfLink,
  healthy: ({ conditions }) => Object.values(conditions).filter(condition => (condition.status === 'True' && condition.type === 'Healthy')).length > 0
}
