const DefaultCommand = require('./default.js');
const SpecialColorLight = require('../devices/specialcolorlight.js');

class BrightnessAbsolute extends DefaultCommand {
  static get type() {
    return 'action.devices.commands.BrightnessAbsolute';
  }

  static validateParams(params) {
    return ('brightness' in params) && typeof params.brightness === 'number';
  }

  static get requiresItem() {
    return true;
  }

  static getItemName(item, device) {
    if (device.customData && device.customData.itemType === 'SpecialColorLight') {
      const members = SpecialColorLight.getMembers(item);
      if ('lightBrightness' in members) {
        return members.lightBrightness.name;
      }
      throw { statusCode: 400 };
    }
    return item.name;
  }

  static convertParamsToValue(params) {
    return params.brightness.toString();
  }

  static getResponseStates(params) {
    return {
      brightness: params.brightness
    };
  }
}

module.exports = BrightnessAbsolute;
