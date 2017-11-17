let io;
let dialogResponseHelper;
let DialogParseHelper = require("../Helpers/dialogParseHelper");

let initController = function (helpers) {
    io = helpers.io;
    dialogResponseHelper = helpers.dialogResponse;
    let baseEndpoint = helpers.baseRoute;
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
    io.sockets.emit("new-command", req.body);
    let response = DialogParseHelper.parseIntent(req.body);
    res.send(response);
};

module.exports = initController;
