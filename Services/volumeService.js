let DialogResponseHelper = require("../Helpers/dialogResponseHelper");
let RaspberryPiHelper = require("../Helpers/raspberryPiHelper");
let RaspberryPiService = require("../Services/raspberryPiService");
let wordsToNumbers = require("words-to-numbers").wordsToNumbers;

class VolumeService{

    static increaseVolume(request){
        let volumeIncrease = parseInt(request.result.parameters.volume);
        if(isNaN(volumeIncrease))
                volumeIncrease = 1;

        let volumeUpHex = RaspberryPiHeliper.getVolumeUpHex();
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
            volumeDecrease = 1;

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

    static mute(request){
        let muteHex = RaspberryPiHelper.getMuteHex();
        let payload = RaspberryPiHelper.getPayloadWithHexes([muteHex]);

        RaspberryPiService.sendPostRequest(payload);
        return DialogResponseHelper.makeSimpleResponse(`Muting on/off the TV`);
    }
}

module.exports = VolumeService;