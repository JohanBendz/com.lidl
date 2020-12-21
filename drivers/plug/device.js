'use strict';

const ZigBeeDevice = require("homey-meshdriver").ZigBeeDevice;

class plug extends ZigBeeDevice {
		
  onMeshInit() {

/* 		this.enableDebug();
		this.printNode(); */

    if (this.hasCapability('onoff')) this.registerCapability('onoff', 'genOnOff', {
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