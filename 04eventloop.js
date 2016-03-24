
// import the events module
var events = require("events");

// create the eventemitter object
var eventEmitter = new events.EventEmitter();

// create an event handler
var connectHandler = function connected() {
    console.log("connection succesful");
    
    // fire the data_received event
    eventEmitter.emit("data_received");
}

// listen to the eventemitter
eventEmitter.on("connection", connectHandler);


