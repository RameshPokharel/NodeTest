const readDir= require("fs")

const Emitter= require("events")
const myEmitter= new Emitter()
myEmitter.on("logger",()=>{
 console.log("logger logged")
})

const filesList=readDir.readdir("./",(error,files)=>{
if(error) console.log("Error exist",error)
console.log(files)
})

//const httpModule= require("./httpModule")


const log= require("./logger")
console.log(log)

require("./checkLodash")