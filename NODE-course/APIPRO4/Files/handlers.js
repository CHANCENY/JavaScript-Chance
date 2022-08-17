const fs = require('fs');
const path = require('path');
const {v4: uuidv4} = require('uuid');
const fileData = require('./Data/data');


function connectPostRequest(req, res){

    //post request handler

    let body = '';
    req.on('data', (chunk) =>{
        body += chunk.toString();
    });

   req.on('end', () =>{       
       const {name,email,message} = JSON.parse(body);

       const messages ={
        id:uuidv4(),
        name,
        email,
        message
       };

       if(writeJsonFile(messages)){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({"message":"posted"}));
       }
    })
}

function writeJsonFile(data){

    try {

        const newdata  = fileData;
        newdata.push(data);

     fs.writeFile(path.join(__dirname,'Data','data.json'),JSON.stringify(newdata),'utf8', (err) =>{
       return true;
     });
        
    } catch (error) {
        console.log(error.message);
    }
}



function indexWelcomePage(res){

    try {
        
        fs.readFile(path.join(__dirname,'public','index.html'),'utf8', (err, data) =>{
            if(err){
                console.log(err.message);
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            }
        })
    } catch (error) {
        console.log(error);
    }
}


function getMessages(res){
   
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(fileData));
}

function getMessagesById(req, res){

    const id = req.url.split('/')[2];

    const data = fileData;

    const messageFound = data.filter( (m) => m.id === id);

    if(messageFound.length !== 0){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(messageFound));
    }else{
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({"status":"message not found"}));
    }
}

module.exports = {
    connectPostRequest,
    indexWelcomePage,
    getMessages,
    getMessagesById
}
