let RaspberryPiHelper = require("../Helpers/raspberryPiHelper");
let RaspberryPiService = require("../Services/raspberryPiService");
let DialogResponseHelper = require("../Helpers/dialogResponseHelper");

class ChannelService{

    static changeChannel(request){
        let channel = request.result.parameters.channel;
        let number = RaspberryPiHelper.getChannelNumberFromUserInput(channel);

        //Parsing the number
        let hexValues = [];
        let digits = number.toString().split("").map((t) => { return parseInt(t) });

        for(let digit of digits){
            let buttonCode = RaspberryPiHelper.getButtonCodeFromNumber(digit);
            hexValues.push(RaspberryPiHelper.getButtonHex(buttonCode));
        }

        //Creating payload for POST request
        let payload = RaspberryPiHelper.getPayloadWithHexes(hexValues);

        RaspberryPiService.sendPostRequest(payload);
        return DialogResponseHelper.makeSimpleResponse(`Changing channel to ${channel} - number: ${number} on your TV`);
    }
}

module.exports = ChannelService;