var mosca = require("mosca");
const port = process.env.PORT ? process.env.PORT : 3000;
var settings = {
  port
};

var server;
function start() {
  server = new mosca.Server(settings);
}

start();
