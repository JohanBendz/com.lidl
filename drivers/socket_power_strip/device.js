'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
const { CLUSTER } = require('zigbee-clusters');

class socket_power_strip extends ZigBeeDevice {
		
	async onNodeInit({zclNode}) {

        const { subDeviceId } = this.getData();
        this.log("Device data: ", subDeviceId);

        this.registerCapability('onoff', CLUSTER.ON_OFF, {
            endpoint: subDeviceId === 'socket2' ? 2 : subDeviceId === 'socket3' ? 3 : 1,
        });

  }

	onDeleted(){
		this.log("Power Strip removed")
	}

}

module.exports = socket_power_strip;