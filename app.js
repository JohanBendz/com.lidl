'use strict';

const Homey = require('homey');
// const { debug } = require('zigbee-clusters');
// debug(true);

class LidlSmartHome extends Homey.App {
  
  async onInit() {
    this.log('The Lidl Smart Home App has been initialized');

    this.homey.flow.getActionCard('start_effect').registerRunListener(async (args, state) => {
      this.log("ACTION TRIGGERED");
      await args.christmas_lights_device.StartEffect(args);
      return true
    })
    
  }
}

module.exports = LidlSmartHome;