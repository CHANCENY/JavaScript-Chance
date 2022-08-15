const { on } = require("events");
const fs = require("fs");
const path = require("path");
const dataFile = require("./Data/data");
const {v4: uuidv4} = require('uuid');

function writeDataFile(data) {

  //return promise after writing file
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let newData = dataFile;
      newData.push(JSON.parse(data));

      fs.writeFile(
        path.join(__dirname, "Data", "data.json"),
        JSON.stringify(newData),
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
          } else {
            resolve(data);
          }
        }
      );
      if (reject) {
        console.log(reject);
      }
    }, 3000);
  });
}

function recieveDataFromUrl(req,res){

  //first initialize varaiable body
  let body ='';

  //user req.on event to collect buffer chunk
  req.on('data',(chunk) =>{

    //append buffer chank to body while coventing to string
    body +=chunk.toString();
  });

  //secondly req.on event on end to work with data
  req.on('end',async () =>{

    //destructing data by keys
    const {first,last} = JSON.parse(body);

    //making new user obj 
    const user ={
      first,
      last,
      id: uuidv4()
    }
    
    const returns = await writeDataFile(JSON.stringify(user))
    .then((data) => JSON.parse(data));

    res.writeHead(201,{"Content-Type":"application/json"});
    res.end(JSON.stringify(returns));
  })
}


function getUsersAll(res){

  console.log("here");
  //sending all users from users collection file (data.json)
      res.writeHead(200,{"Content-Type":"application/json"});
       res.end(JSON.stringify(dataFile));

}

function getUserById(id){

  return new Promise((resolve, reject) =>{
    const data = dataFile;

    const fuser = data.filter((u) => u.id === id);
    resolve(fuser);
  })
}

function update(req, res, id){

  //variable body
  let body = '';

  //event on 
  req.on('data', (chunk) =>{

    //appending buffer to body and convert to string
    body += chunk.toString();
  })

  //async calling of data
  req.on('end',async () =>{
    const {first, last} = JSON.parse(body);
    
    //collecting user to be updated by id
    const user = await getUserById(id)
    .then((u) => JSON.stringify(u))
    .then( (u) => JSON.parse(u));
    
    //creating user obj with or condition op to only insert
    //value that is not null 
    //if user only send first  the first will be updated
    //the rest will be insert with old values
   let upUser = {
    first: first || user[0].first,
    last: last || user[0].last,
   };


   //finding index of user in users collection file
   const index = dataFile.findIndex((u) => u.id == id);

   //updating the users collection obj on index found
   dataFile[index] ={id, ...upUser};

   //saving ny writing in collection file
   fs.writeFile(path.join(__dirname,'Data','data.json'),JSON.stringify(dataFile),'utf8', (err) =>{
    if(err){
      console.log(err.message);
    }else{

      //sending response
      res.writeHead(200,{"Content-Type":"application/json"});
      res.end(JSON.stringify({"message":"updated"}));
    }
   })

  })
}

function deleteUser(url, res){

  try {

    //breaking url into list
    const id = url.split('/')[2];

    //filtering only ones with different id
    const remainingUsers = dataFile.filter( (u) => u.id != id);

    //write into file the remaining ones
    fs.writeFile(path.join(__dirname,'Data','data.json'),JSON.stringify(remainingUsers),'utf8', (err) =>{
      if(err){
        console.log(err.message);
      }else{

        //sending response
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({"deletedUser":id,"message":"User deleted!"}));
      }
    })

  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  writeDataFile,
  recieveDataFromUrl,
  getUsersAll,
  getUserById,
  update,
  deleteUser
}
