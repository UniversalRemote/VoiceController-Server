
let initController = function (baseEndpoint) {
    let dialogBaseEndpoint = baseEndpoint + "/dialogflow";
    return [
        {
            method: "GET",
            endpoint: baseEndpoint,
            handler: (req, res) => {
                console.log(res.send("Welcome to VoiceController App base api"));
            }
        },
        {
            method: "POST",
            endpoint: dialogBaseEndpoint,
            handler: parseDialogRequest
        }
    ];
};

let parseDialogRequest = function(req, res){
    console.log("\n\nRequest received from DialogFlow:");
    console.log(req.body);
    res.send(200);
};

module.exports = initController;