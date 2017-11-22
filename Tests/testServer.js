let express = require("express");
let app = express();
let bodyParser = require("body-parser");

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(1000);

app.post("/", (req, res) => {
    console.log(req.body);
});