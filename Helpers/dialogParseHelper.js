let ChannelService = require("../Services/channelService");
let VolumeService = require("../Services/volumeService");
let DialogResponseHelper = require("../Helpers/dialogResponseHelper");

class DialogParseHelper{

    static parseIntent(request){
        let intent = request.result.metadata.intentName;

        switch(intent){
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