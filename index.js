const http = require('http');
const url = require("url");
const fs = require("fs");

http.createServer(function(req,res){
    const path = req.url;
    console.log("path",path);
    if(path.includes("vegetables")) {
        fs.readFile("index.json","utf-8",(err,data)=>{
            console.log(data);
            res.setHeader("Content-Type","application/json");
            res.write(data); 
            res.end();   
        }); 
        
    }

}).listen(8080);

