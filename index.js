var mosca = require("mosca");
const port = process.env.PORT ? parseInt(process.env.PORT) : 1883;
var settings = {
  port
};

var server;
function start() {
  server = new mosca.Server(settings);
}
console.log("Starting MQTT broker server");
start();
console.log(`Server has been started on port: ${port}`);
