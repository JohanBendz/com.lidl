'use strict';

const { ZigBeeDevice } = require('homey-zigbeedriver');
const { debug, CLUSTER } = require('zigbee-clusters');

class doorwindowsensor2 extends ZigBeeDevice {
		
	async onNodeInit({zclNode}) {

    debug(true);

/*     zclNode.endpoints[1].clusters[CLUSTER.IAS_ZONE.NAME].onZoneStatusChangeNotification = payload => {
      this.log('IASZoneStatus payload:', payload)
      this.onIASZoneStatusChangeNotification(payload);
    } */

    await this.configureAttributeReporting(
			{
				endpointId: 1,
				cluster: CLUSTER.IAS_ZONE,
				attributeName: 'zoneStatus',
				minInterval: 65535,
				maxInterval: 0,
				minChange: 1,
			}
    );
    
		zclNode.endpoints[1].clusters.iasZone.on('attr.zoneStatus', (status) => {
			this.setCapabilityValue('alarm_contact', status.alarm1);
      this.setCapabilityValue('alarm_tamper', status.tamper);
      this.setCapabilityValue('alarm_battery', status.battery);

		});

  }
  
/*   onIASZoneStatusChangeNotification({zoneStatus, extendedStatus, zoneId, delay,}) {
    this.log('IASZoneStatusChangeNotification received:', zoneStatus, extendedStatus, zoneId, delay);
    this.setCapabilityValue('alarm_contact', zoneStatus.alarm1);
    this.setCapabilityValue('alarm_tamper', zoneStatus.tamper);
    this.setCapabilityValue('alarm_battery', zoneStatus.battery);
  } */

	onDeleted(){
		this.log("Door/Window Sensor removed")
	}

}

module.exports = doorwindowsensor2;