/**
 * Created by AlejandroC on 10/2/2017.
 */

let baseRoute = "/api";
let port = process.env.PORT || 8000;
let RouteHelper = require("./Helpers/routesHelper");
let bodyParser = require("body-parser");
let express = require("express");
let app = express();
let server = require("http").createServer(app);
let io = require("socket.io").listen(server);

server.listen(port, ()=>{
    console.log(`For Debugging => Listening on: http://localhost:${port}`);
});

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Initialize helpers
let helpers = {
    io: io,
    baseRoute: baseRoute,
    routes: new RouteHelper(app)
};

//Initialize controllers
let controllerInitializer = require("./Contollers/controllersInitializer");
controllerInitializer(helpers);

//Server UI
app.use(express.static("WebRoot"));
io.on("connection", function (socket) {

});


