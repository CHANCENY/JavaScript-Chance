const { API, searchEngine } = require("../GET-REQUEST/get_request_file");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");



function controlUrl(req) {
  //['/video','token=100&vId=300'] by id
  //['/video','token=100&Title=mango'] by id
  //['/video','token=100&tags=300'] by id

  //try catch if any problem with splitting the urls
  
  try {

    let list = req.url.split("?");
    
    if (list.length == 1) {
      return API.actionDecoder(req.url);
    }

    //checking element of list

    if (list[0] == "/video") 
    {
      const parameters = list[1].split("=");
     
      //check what to search for
      const searchTarget = parameters[0];
      
      //switch statement looking for placeholder
      switch (searchTarget) {
        case "id":
          return searchEngine.searchById(parameters[1]);

        case "title":
          return searchEngine.searchByTitle(parameters[1]);

        default:
          return false;
      }                
    } 
    else 
    {
      return { msg: "Invalid url expected /video" };
    }
  } catch (error) {
    return {
      msg: "url is invalid",
      ivalid: "syntax /video?targets=value",
      target: ["id", "title"],
      status: "200",
    };
  }
}

class controlPost {
  static controlPostUrl(req, res) {
    controlPost.gettingUserNew(req, res);
  }
  static gettingUserNew(req, res) {
    //inititlies vab body
    let body = "";

    //getting data from url passed
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    //accessing body data
    req.on("end", () => {
      //destructor data
      const { username, firstname, lastname, email } = JSON.parse(body);

      const user = {
        username,
        firstname,
        lastname,
        email,
        token: uuidv4(),
      };
      const newUser = new Array(user);
      controlPost.writeDataFile(JSON.stringify(newUser), newUser[0].token);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(user));
    });
  }

  static writeDataFile(user, filename) {
    try {
      fs.appendFile(
        path.join(__dirname, "users", `${filename}.json`),
        user,
        (err) => {
          if (err) throw err;
          console.log("written....");
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
}


module.exports = {
  controlUrl,
  controlPost,
};
