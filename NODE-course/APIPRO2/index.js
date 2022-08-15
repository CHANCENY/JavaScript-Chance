const http = require('http');
const {writeDataFile, recieveDataFromUrl,getUsersAll }= require('./FileSystem/writeFile');
const {v4: uuidv4} = require('uuid');
const {checkUrl, putUrl, removeUser} = require('./controllers/controller');


const server = http.createServer((req,res) =>{

    if(req.method === 'POST'){
        recieveDataFromUrl(req, res); 
    }
    else if(req.method === "GET"){
        checkUrl(req,res);
    }else if(req.method === 'PUT'){

        putUrl(req,res);
    }else if(req.method === 'DELETE'){
        removeUser(req,res);
    }
   
    
    
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,() =>console.log(`Server running at port.....${PORT}`));

async function postRequest(req, res){

    const data ={
        first:"chance",
        last:"Nyasulu",
        id:uuidv4()  
    }

   const user = await writeDataFile(JSON.stringify(data))
    .then((us) => JSON.parse(us));
    
    res.writeHead(200,{"Content-Type":"application/json"});
    res.end(JSON.stringify(user));
}