'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class rgb_bulb_E27 extends ZigBeeLightDevice {

/*    async onNodeInit({zclNode}) {

        await super.onNodeInit({zclNode});

        this.enableDebug();
        this.printNode();

        const node = await this.homey.zigbee.getNode(this);
        node.handleFrame = (endpointId, clusterId, frame, meta) => {
        this.log("frame data! endpointId:", endpointId,", clusterId:", clusterId,", frame:", frame, ", meta:", meta);
        };

    } */

}

module.exports = rgb_bulb_E27;