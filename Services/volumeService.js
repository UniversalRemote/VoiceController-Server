let DialogResponseHelper = require("../Helpers/dialogResponseHelper");
let RaspberryPiHelper = require("../Helpers/raspberryPiHelper");
let RaspberryPiService = require("../Services/raspberryPiService");
let wordsToNumbers = require("words-to-numbers");

class VolumeService{

    static increaseVolume(request){
        let volumeIncrease = parseInt(request.result.parameters.volume);
        if(isNaN(volumeIncrease))
            volumeIncrease = wordsToNumbers(volumeIncrease);

        let volumeUpHex = RaspberryPiHelper.getVolumeUpHex();
        let hexValues = [];

        //Add one hex value for each time we wanna increase the volume
        for(let i=0; i<volumeIncrease; i++){
            hexValues.push(volumeUpHex);
        }

        let payload = RaspberryPiHelper.getPayloadWithHexes(hexValues);

        RaspberryPiService.sendPostRequest(payload);
        return DialogResponseHelper.makeSimpleResponse(`Increasing volume by ${volumeIncrease}`)
    }

    static decreaseVolume(request){
        let volumeDecrease = parseInt(request.result.parameters.volume);
        if(isNaN(volumeDecrease))
            volumeDecrease = wordsToNumbers(volumeDecrease);

        let volumeDownHex = RaspberryPiHelper.getVolumeDownHex();
        let hexValues = [];

        //Add one hex value for each time we wanna decrease the volume
        for(let i=0; i<volumeDecrease; i++){
            hexValues.push(volumeDownHex);
        }

        let payload = RaspberryPiHelper.getPayloadWithHexes(hexValues);

        RaspberryPiService.sendPostRequest(payload);
        return DialogResponseHelper.makeSimpleResponse(`Decreasing the volume by ${volumeDecrease}`)
    }
}

module.exports = VolumeService;