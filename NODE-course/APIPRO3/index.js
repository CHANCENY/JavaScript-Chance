const http = require('http');
const {registerUser, getUsers,registerationpage }= require('./Handlers/handlers');


const serverHttp = http.createServer((request, response) =>{

    //handle request here
    console.log(request.url);
    if(request.method === 'GET' && request.url === '/register'){
        //request user
       registerationpage(response);

    }else if(request.url == '/'){

        const data = getUsers();
        response.writeHead(201,{"Content-Type":"application/json"});
        response.end(JSON.stringify(data));  

    }else if(request.method === 'POST' && request.url === '/submitform'){

         registerUser(request, response);
    }
})

const PORT = process.env.PORT || 5000;

serverHttp.listen(PORT, () => console.log(`Listening At ${PORT}`));