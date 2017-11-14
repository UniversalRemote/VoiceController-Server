let fs = require("fs");
let path = require('path');
let scriptName = path.basename(__filename);

let initControllers = function(helpers){
    let routesHelper = helpers.routes;
    fs.readdir(__dirname, "utf8", (err, controllerPaths) => {
        if(err) throw err;
        for(let ctrlPath of controllerPaths){

            if(ctrlPath === scriptName) continue;
            let controller = require("./" + ctrlPath);
            let routes = controller(helpers);

            for(let route of routes){
                routesHelper.initRoute(route);
            }
        }
    });
};

module.exports = initControllers;


