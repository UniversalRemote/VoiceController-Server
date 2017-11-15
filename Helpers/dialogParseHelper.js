class DialogParseHelper{

    constructor(){}

    parseChannelChangeRequest(request){
        return {
            type: "CHANGE_CHANNEL",
            intent: request.metadata.intentName,
            value: request.result.parameters.channel,
            number: "45"
        }
    }
}