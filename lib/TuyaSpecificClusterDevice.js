'use strict';

const {ZigBeeDevice} = require("homey-zigbeedriver");

class TuyaSpecificClusterDevice extends ZigBeeDevice {

    // Tuya Datapoint Functions
    _transactionID = 0;
    set transactionID(val) {
        this._transactionID = val % 256;
    }
    get transactionID() {
        return this._transactionID;
    }

    // Boolean
    async writeBool(dp, value) {
        const data = Buffer.alloc(1);
        data.writeUInt8(value ? 0x01 : 0x00,0);
        return this.zclNode.endpoints[1].clusters.tuya.datapoint({
            status: 0,
            transid: this.transactionID++,
            dp,
            datatype: 1,
            length: 1,
            data
        }).catch(this.error);
    }

    // int type value
    async writeData32 (dp, value) {
        const data = Buffer.alloc(4);
        data.writeUInt32BE(value,0);
        return this.zclNode.endpoints[1].clusters.tuya.datapoint({
            status: 0,
            transid: this.transactionID++,
            dp,
            datatype: 2,
            length: 4,
            data
        }).catch(this.error);
    }

    // string
    async writeString(dp, value) {
        const data = Buffer.from(String(value),'latin1');
        return this.zclNode.endpoints[1].clusters.tuya.datapoint({
            status: 0,
            transid: this.transactionID++,
            dp,
            datatype: 3,
            length: value.length,
            data
        }).catch(this.error);
    }

    // enum
    async writeEnum(dp, value) {
        const data = Buffer.alloc(1);
        data.writeUInt8(value, 0);
        return this.zclNode.endpoints[1].clusters.tuya.datapoint({
            status: 0,
            transid: this.transactionID++,
            dp,
            datatype: 4,
            length: 1,
            data
        }).catch(this.error);
    }



}

module.exports = TuyaSpecificClusterDevice;