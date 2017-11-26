let RaspberryPiHelper = require("../Helpers/raspberryPiHelper");
let RaspberryPiService = require("../Services/raspberryPiService");
let DialogResponseHelper = require("../Helpers/dialogResponseHelper");

class PowerAndSettingsService{

    static power(request){
        let powerHex = RaspberryPiHelper.getPowerHex();
        let payload = RaspberryPiHelper.getPayloadWithHexes([powerHex]);

        RaspberryPiService.sendPostRequest(payload);
        return DialogResponseHelper.makeSimpleResponse(`Powering on/off the TV`);
    }
}

module.exports = PowerAndSettingsService;