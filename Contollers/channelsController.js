
let initController = function (helpers) {
    let baseEndpoint = helpers.baseRoute;
    let channelBaseEndpoint = baseEndpoint + "/channels";
    return [
        {
            method: "GET",
            endpoint: channelBaseEndpoint + "/:query",
            handler: getChannelQueryInfo
        },
        {
            method: "PUT",
            endpoint: channelBaseEndpoint + "/:newChannel",
            handler: changeCurrentChannel
        },
        {
            method: "POST",
            endpoint: channelBaseEndpoint + "/:favChannel",
            handler: favoriteChannel
        }
    ];
};

let getChannelQueryInfo = function(req, res){
  //TODO: Implementation
};

let changeCurrentChannel = function(req, res){
  //TODO: Implementation
};

let favoriteChannel = function(req, res){
    //TODO: Implementation
};

module.exports = initController;