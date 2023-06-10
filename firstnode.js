// this is nodejs to create a server in backend that is to link this to backend

const http=require('http');

// the below line is to create a server with two objects request and response
// const server=http.createServer((req,res)=> {
//     res.write("welcome to your first nodejs file");
//     res.end();
// }).listen(9000)

// console.log("Hello World")

const server=http.createServer((req,res)=> {
    res.end("welcome to your first nodejs file");
}).listen(9000)
