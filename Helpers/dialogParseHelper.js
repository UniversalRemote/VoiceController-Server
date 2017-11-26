let ChannelService = require("../Services/channelService");
let VolumeService = require("../Services/volumeService");
let DialogResponseHelper = require("../Helpers/dialogResponseHelper");
let PowerAndSettingsService = require("../Services/powerAndSettingsService");

class DialogParseHelper{

    static parseIntent(request){
        let intent = request.result.metadata.intentName;

        switch(intent){
            case "Power":
                return PowerAndSettingsService.power(request);
            case "Mute":
                return VolumeService.mute(request);
            case "Channel Change":
                return ChannelService.changeChannel(request);
            case "Volume Change":
                return DialogResponseHelper.makeSimpleResponse(`Changing Volume`);
            case "Volume Increase":
                return VolumeService.increaseVolume(request);
            case "Volume Decrease":
                return VolumeService.decreaseVolume(request);
            default:
                return {};
        }
    }
}

module.exports = DialogParseHelper;