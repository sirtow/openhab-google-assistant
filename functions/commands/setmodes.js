const DefaultCommand = require('./default.js');

class SetModes extends DefaultCommand {
  static get type() {
    return 'action.devices.commands.SetModes';
  }

  static validateParams(params) {
    return ('updateModeSettings' in params) && typeof params.updateModeSettings === 'object';
  }

  static convertParamsToValue(params) {
    const mode = Object.keys(params.updateModeSettings)[0];
    return params.updateModeSettings[mode].toString();
  }

  static getResponseStates(params) {
    const mode = Object.keys(params.updateModeSettings)[0];
    return {
      currentModeSettings: {
        [mode]: params.updateModeSettings[mode]
      }
    };
  }
}

module.exports = SetModes;
