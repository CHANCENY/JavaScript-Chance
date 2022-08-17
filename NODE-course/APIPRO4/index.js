const http = require('http');
const {connectPostRequest, indexWelcomePage, getMessages, getMessagesById} = require('./Files/handlers')


const server = http.createServer( (request, response) =>{

   
    if(request.method === 'POST' && request.url === '/'){
       connectPostRequest(request,response);
    }
    if(request.method === 'GET' && request.url === '/'){
        indexWelcomePage(response);
    }
    if(request.method === 'GET' && request.url  === '/messages'){
            getMessages(response);

    }if(request.method === 'GET' && request.url.split('/').length === 3){
        getMessagesById(request, response);
    }
});

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => console.log('Server listen at '+PORT));


