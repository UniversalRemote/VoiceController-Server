class DialogParseHelper{

    static parseIntent(request){
        let intent = request.metadata.intentName;

        switch(intent){
            case "Channel Change":
                return parseChannelChange(request);
            case "Volume Change":
                return parseVolumeChange(request);
            default:
                return {};
        }
    }
}

function parseChannelChange(request){
    let channel = request.result.parameters.channel;

    //TODO: Call raspberryPi service to make the change
    return dialogResponseHelper.makeSimpleResponse(`Changing channel to ${channel}`);
}

function parseVolumeChange(request){
    let volume = request.result.parameters.volume;

    //TODO: Call raspberryPi service to make the change
    return dialogResponseHelper.makeSimpleResponse(`Changing volume to ${volume}`);
}