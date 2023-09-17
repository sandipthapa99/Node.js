const logEvents = require("./logEvent")

const EventEmitter = require("events")

class MyEmitter extends EventEmitter { }

// initialixe object
const myEmitter = new MyEmitter()

// add listener for the log event
myEmitter.on("log", (msg) => logEvents(msg))

setTimeout(() => {
    // Emit Event
    myEmitter.emit("log", "Log event emitted!")
}, 2000)