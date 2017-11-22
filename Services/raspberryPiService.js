const request = require("request");
let piUrl = "http://home.austinseber.com:20000/sling";
let testUrl = "http://localhost:1000";

class RaspberryPiService{

    static sendPostRequest(payload){
        request.post({
            headers: {'content-type' : 'application/json'},
            url: piUrl,
            body: JSON.stringify(payload)
        });
    }
}

module.exports = RaspberryPiService;