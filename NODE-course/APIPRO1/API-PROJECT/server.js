const http = require("http");
const { API } = require("./GET-REQUEST/get_request_file");
const { controlUrl, controlPost } = require("./Controller/control");

//creating server

const server = http.createServer((req, res) => {
  //to api activities
  /* res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(data1)); */

  /* if(req.method === 'GET'){
    const returnData = API.actionDecoder(req.url);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(returnData));
  }
  if(req.method === 'POST'){
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify("posted request"));
  } */

  //only accept get here
  if (req.method == "GET") {
    const returnValue = controlUrl(req);

    if (returnValue != false) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(returnValue));
    } else {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify("server error"));
    }
  }

  //only accept post here
  if(req.method == "POST"){

    //here we will be save users only
    controlPost.controlPostUrl(req,res);
    
  }
});

//taking port
const PORT = process.env.PORT || 5000;

//assigning port
server.listen(PORT, () => console.log(`Server At ${PORT} running......`));
