const VOLUME_INTERVAL = 1;
let VolumeService = require("../Services/volumeService");
let dialogResponseHelper;

let initController = function (helpers) {
    let baseEndpoint = helpers.baseRoute;
    let volumeBaseEndpoint = baseEndpoint + "/volume";
    dialogResponseHelper = helpers.dialogResponse;
    return [
        {
            method: "GET",
            endpoint: volumeBaseEndpoint,
            handler: getCurrentVolume
        },
        {
            method: "PUT",
            endpoint: volumeBaseEndpoint + "/raise",
            handler: raiseVolume
        },
        {
            method: "PUT",
            endpoint: volumeBaseEndpoint + "/lower",
            handler: lowerVolume
        },
        {
            method: "PUT",
            endpoint: volumeBaseEndpoint + "/change/:volume",
            handler: changeVolume
        }
    ];
};

function getCurrentVolume(req, res){
    VolumeService.getVolume((volume)=>{
        res.send(volume);
    });
}

function raiseVolume(req, res){
    VolumeService.increaseVolumeBy(VOLUME_INTERVAL);
    res.send(dialogResponseHelper.makeSimpleResponse("Volume raised"));
}

function lowerVolume(req, res){
    VolumeService.decreaseVolumeBy(VOLUME_INTERVAL);
    res.send(dialogResponseHelper.makeSimpleResponse("Volume lowered"));
}

function changeVolume(req, res){
    VolumeService.changeVolumeTo(req.query.volume);
    res.send(dialogResponseHelper.makeSimpleResponse(`Volume changed to ${req.query.volume}`));
}

module.exports = initController;