Give your home the right atmosphere with smart lighting.
Whether you are planning a romantic candlelight dinner or a movie night, want to read or just relax - with the Lidl Smart Home product family you can create the right atmosphere down to the smallest detail.
Intelligent and comfortable.

Discover the benefits of Lidl Smart Home
* Much cheaper than comparable Smart Home (brand) products
* Easy installation and operation, compatible with other ZigBee platforms from different brands and manufacturers.
* More comfort and safety in and around your home
* Good for the environment and your wallet

PLEASE OBSERVE!
Known issues:
Until further notice the RGB lights only support on/off and dim (white temperature and colors will be added when know issues are resolved).

Please be advised, some devices need a good 5-10 minutes before they work as intended after being added to Homey. If a newly added device show as broken, give it 10 minutes, if still not OK restart the app.

Supported devices:
- SilverCrest Smart Plug, without metering
    _TZ3000_kdi2o9m6 / TS011F (Lidl)

- SilverCrest 3 Socket Power Strip
    _TZ3000_1obwwnmq / TS011F (Lidl)
    _TZ3000_vzopcetz / TS011F (Lidl)

- Livarno Lux RGB Bulb E14
    _TZ3000_odygigth / TS0505A (Lidl)

- Livarno Lux RGB Bulb E27
    _TZ3000_dbou1ap4 / TS0505A (Lidl)

- Livarno Lux RGB LED Strip
    _TZ3000_riwp3k79 / TS0505A (Lidl)

- Livarno Lux RGB Spot GU10
    _TZ3000_kdpxju99 / TS0505A (Lidl)
    
- Livarno Lux Tunable Bulb E14
    _TZ3000_oborybow / TS0502A (Lidl)

- Livarno Lux Tunable Bulb E27
    _TZ3000_49qchf10 / TS0502A (Lidl)

- Livarno Lux Tunable Spot GU10
    _TZ3000_el5kt5im / TS0502A (Lidl)

- Christmas Lights
    _TZE200_s8gkrkxk / TS0601 (Lidl)

- SilverCrest Door / Windows Sensor
    _TZ1800_ejwkn2h2 / TY0203 (Lidl)
    
- SilverCrest Smart Motion Sensor
   _TZ1800_fcdjzz3s / TY0202 (Lidl)


X-Mas Lights

Pairing
Go into Homey and add the device. During pairing hold the F button for 5 seconds and let go. Light should start pulsing 
slowly and pairing should complete, the lights should then stop pulsing.

Controlling the lights

Modes
The X-Mas Lights support 3 modes: `white`, `color` and `effect`. You can switch between these modes in the App. 
You will mainly use this to switch back to `white` mode though:

* The best way to switch to `color` mode is to simply select a color which then automatically switches to `color` mode.
* Manually selecting `color` mode may not switch back to last selected color.
* Switching to `effect` mode always starts a default effect, not the latest selected effect. To start a specific effect,
use a flow (see below).

Brightness
Brightness control is only available in `white` and `color` mode, brightness of effects _cannot_ be controlled (this is
a limitation of the hardware, _not_ the App). 

Changing brightness while an effect is active, switches back to `white` mode. 

Effects
To start a specific effect, create a flow with `Start effect` action for your device. Select an effect type, 
set the speed and configure one or more colors.

Note: not all effects use all colors, some effect may only use one, two or three colors. At maximum 9 colors appear
to be used by the device, so only 9 options are shown.

Attributions
* Support for and information regarding Christmas Lights by Martijn Aben (escabe.org)
* Christmas tree icon by Stanislav Levin from the Noun Project