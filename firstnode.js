// this is nodejs to create a server in backend that is to link this to backend

const http=require('http');

// the below line is to create a server with two objects request and response
//the below function is an arrow function
const server=http.createServer((req,res)=> {
    res.write("welcome to your first nodejs file");
    res.end();
}).listen(9000)

console.log("Hello World")//this line is displayed on the console


//in the below line we have writeen the display line in  res end
//this would also be displayed
// const server=http.createServer((req,res)=> {
//     res.end("welcome to your first nodejs file");
// }).listen(9000)
//we need to comment one of the server commands as server cannot be declared again


//the below line is to import the calc file into this
var calc = require('./calc.js')