const Emitter= require("events")
const myEmitter= new Emitter()
myEmitter.emit("logger")

function log(message){

 console.log(message);
}

module.exports.log=log