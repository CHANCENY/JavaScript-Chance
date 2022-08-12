const http = require('http');

//creating server with creatServer method takes callback with request and response
http.createServer((req, res) =>{

    //here what to do with the request

    //checking request
    //call functions that process particular requests
    //etc 
    
    //writing response of request
    res.write('hello world from server');
    res.end();
}).listen(5000, () => console.log('Server Running....'));  //port number is need for the server to work listen takes port number and callback