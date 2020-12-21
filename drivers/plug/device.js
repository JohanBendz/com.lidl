'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
const { CLUSTER } = require('zigbee-clusters');

class plug extends ZigBeeDevice {
		
	async onNodeInit({zclNode}) {

    this.registerCapability('onoff', CLUSTER.ON_OFF, {
      getOpts: {
        getOnStart: true,
	  },
      reportOpts: {
        configureAttributeReporting: {
          minInterval: 0,
          maxInterval: 36000,
          minChange: 1,
        },
      },
    });

  }

	onDeleted(){
		this.log("Plug removed")
	}

}

module.exports = plug;