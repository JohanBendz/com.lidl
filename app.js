'use strict';

const Homey = require('homey');

class LidlSmartHome extends Homey.App {
  
  async onInit() {
    this.log('The Lidl Smart Home App has been initialized');
  }
}

module.exports = LidlSmartHome;