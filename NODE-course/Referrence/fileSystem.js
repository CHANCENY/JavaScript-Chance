const fs = require('fs');
const { join } = require('path');
const path = require('./path_demo');

//create folder

/*fs.mkdir(path.join(__dirname,'/test'),{},(err) =>{

    if(err) throw err;
    console.log("Folder Created");
});*/

//to create file without writing right way
/*fs.open(path.join(__dirname,'/test','/hello.txt'),(err) =>{
    if(err) throw err;
    console.log("file written");
})


//best way

fs.writeFile(path.join(__dirname,'/test','hello.txt'),'hello world',(err) =>{
    if(err) throw err;
    console.log("file written");
})

//append writing

fs.appendFile(path.join(__dirname,'/test','hello.txt'),' hello world',(err) =>{
    if(err) throw err;
    console.log("file written");
})

//append in callback

fs.appendFile(path.join(__dirname,'/test','hello.txt'),' hello world',(err) =>{
    if(err) throw err;
    console.log("file written");

    fs.appendFile(path.join(__dirname,'/test','hello.txt'),' hello world',(err) =>{
        if(err) throw err;
        console.log("file written in call back");
    })
    
})

//read file

fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf-8',(err, data) =>{
    if(err)throw err;
    console.log("here is data "+data);
})
*/

/*fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','newWorld'),(err) =>{
    if(err) throw err;
    console.log('Renaming Done');
})*/

//we can also export here

module.exports = fs;


