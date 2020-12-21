'use strict';

const Homey = require('homey');

class LidlSmartHome extends Homey.App {
  
  async onInit() {
    this.log('The Lidl Smart Home App has been initialized');

    this.homey.flow.getActionCard('start_effect').registerRunListener(async (args, state) => {
      this.log("ACTION TRIGGERED");
      await args.my_device.StartEffect(args);
      return true
    })
    
  }
}

module.exports = LidlSmartHome;