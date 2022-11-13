'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
const { CLUSTER } = require('zigbee-clusters');

const {
  debug, Cluster, 
} = require('zigbee-clusters');

class smartplug extends ZigBeeDevice {
		
	async onNodeInit({zclNode}) {

    this.printNode();

// enable debugging
//    this.enableDebug();

//     Enables debug logging in zigbee-clusters
//   debug(true);

//  print the node's info to the console
 	
    const meteringOffset = this.getSetting('metering_offset');
    const measureOffset = this.getSetting('measure_offset') * 100;

    // onOff
    this.registerCapability('onoff', CLUSTER.ON_OFF, {
      getOpts: {
        getOnStart: true,
        pollInterval: 60000
	    }
    });

     // Catch Power Factors - if those exists
    if (typeof this.activePowerFactor !== 'number') {
      const { acPowerMultiplier, acPowerDivisor } = await zclNode.endpoints[
        this.getClusterEndpoint(CLUSTER.ELECTRICAL_MEASUREMENT)
      ]
      .clusters[CLUSTER.ELECTRICAL_MEASUREMENT.NAME]
      .readAttributes('acPowerMultiplier', 'acPowerDivisor');
      this.activePowerFactor = acPowerMultiplier / acPowerDivisor;
      this.log("Active Power Factor: ", this.meteringFactor);
    }
    if (typeof this.meteringFactor !== 'number') {
      const { multiplier, divisor } = await zclNode.endpoints[
        this.getClusterEndpoint(CLUSTER.METERING)
      ]
      .clusters[CLUSTER.METERING.NAME]
      .readAttributes('multiplier', 'divisor');
      this.meteringFactor = multiplier / divisor;
      this.log("Metering Factor: ", this.meteringFactor);
    } 

    // meter_power
    this.registerCapability('meter_power', CLUSTER.METERING, {
      reportParser: value => (value * meteringOffset)/100,
      getParser: value => (value * meteringOffset)/100,
      getOpts: {
        getOnStart: true,
        pollInterval: 300000
	    }
    });

    // measure_power
    this.registerCapability('measure_power', CLUSTER.ELECTRICAL_MEASUREMENT, {
      reportParser: value => (value * measureOffset)/100,
      getParser: value => (value * measureOffset)/100,
      getOpts: {
        getOnStart: true,
        pollInterval: 60000
	    }
    });
    
  }

	onDeleted(){
		this.log("Smart Plug removed")
	}

}

module.exports = smartplug;
