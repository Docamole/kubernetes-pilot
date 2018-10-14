const { PilotAPI } = require('../../../PilotAPI')

module.exports.ApiResolver = {
  version: () => PilotAPI.version
}
