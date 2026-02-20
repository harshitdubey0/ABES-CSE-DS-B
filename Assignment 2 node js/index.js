const fs = require("fs");
const home = fs.readFileSync("./home.html");
const course = fs.readFileSync("./course.html");
const login = fs.readFileSync("./login.html");
const http = require("http");
const myServer = http.createServer((req, res)=>{
  if(req.url === "/"){
    res.end(home);
  } else if(req.url === "/course"){
    res.end(course);
  } else if(req.url === "/login"){
    res.end(login);}
})

myServer.listen(8000, ()=>{
  console.log("Server is running on port 8000");
});