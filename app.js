const express = require("express");
const app = express();
const http = require("http");
const { configRouter } = require("./src/routes/configRouter")
const server = http.createServer(app);

require("./src/models/connect");
require("./src/functions/schedule")

configRouter(app)

app.use(express.json());

server.listen(8080, () => {
    console.log("Listening on port 8080");
});
