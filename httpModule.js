const http= require("http")
const server = http.createServer((req,res)=>{
 if(req.url==="/"){
  res.write("hello world")
  res.end()
 } 
 if(req.url==="/api/list")
 {
  res.write(JSON.stringify([1,2,3,3,3,3]))
res.end();
 }
})
server.listen(3000)
console.log("listening port 3000")