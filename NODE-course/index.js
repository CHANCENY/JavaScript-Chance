/*****this demo start here of export modules requiring usermade files****/
/*const person = require('./person');

const per1 = new person('Chance','Nyasulu',25);
console.log(per1.personSummary());

console.log(person());
*/
/***********end here***********/

/***logger example of events start here******/
/*const logger = require('./ExampleLogger');
const logs = new logger();

logs.on('message', (data)=>{
    console.log(`Called by: ${data.id} Message: ${data.msg}`);
})

logs.logMessage("Hey am Chance Nyasulu");
logs.logMessage("Hey am Marcos Nyasulu");

logs.logMessage("Hey am Emma Nyasulu");*/
/*******ends here****************/


/******http example start here making server*********/
const http = require('http');
const path = require('path');
const fs = require('fs');

//creating server obj and assign it to httpserver variable
const httpserver = http.createServer( (req, res) =>{

    
  /*   console.log(req.url); //this return url home will be (/) 

    //condition can be implemented here
    if(req.url == '/'){
        //this way
       // res.writeHead(200,{'Content-Type': 'text/html'}) // newver forgot this line
       // res.write('home page');
        //res.end();

        //or just this
       // res.end('<h1>Home page welcomes you client.');

        //to load html file we can use fs module
        fs.readFile(path.join(__dirname,'public','index.html'),(err, content) =>{

            //check error here with err
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content);
           })

    }
    if(req.url =='/about'){

        //this way
        //res.writeHead(200,{'Content-Type': 'text/html'}) // newver forgot this line
       // res.write('about page');
       // res.end();

        //or just this
       // res.end('<h1>About page welcomes you.')

       //to load html file we can use fs module
       fs.readFile(path.join(__dirname,'public','about.html'),(err, content) =>{

        //check error here with err
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(content);
       })
    }

    //Assuming you are creating api to server json data 

    if(req.url == '/api'){

        //data to be send
        let users = [
            {name: 'chance nyasulu'},
            {age: 25},
            {school: 'rayat bahra university'},
            {ethinc: 'African'},
            {religion: 'Christian'}
        ];

        //since it is json content-type changes also chaeck below
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(users));
        
    } */

    //MAKING FILE PATH DYNAMIC

    //variable filepath will content complete path of request
    let filepath = path.join(__dirname,'public', req.url === '/' ? 'index.html' : req.url);
    console.log(filepath);
    
    //content-type dynamically
    let ext = path.extname(filepath);

    //initial type
    let contentType = 'text/html';

    //check ext
    switch(ext){
        case '.css':contentType ='text/css';break;
        case '.json':contentType ='application/json';break;
        case '.jpg':contentType ='image/jpg';break;
        case '.png':contentType ='image/png';break;
        case '.jpeg':contentType ='image/jpeg';break;
        case '.js':contentType ='text/javascript';break;
        
    }

    //reading file below
    fs.readFile(filepath, (err, content)=> {
        if(err){
            if(err.code == 'ENOENT'){
                //Page not found here eg
                fs.readFile(path.join(__dirname,'public','404page.html'), (err, content404) =>{
                    res.writeHead(200,{'Content-Type':'text/html'}); 
                    res.end(content404);
                })
            }else{
                //some server error eg 500 error
                res.writeHead(500);
                res.end(`Server error :${err.code}`);
            }
        }else{
          //page success
          res.writeHead(200,{'Content-Type':contentType});
          res.end(content);
        }        
    })
});  // you can attach port here using listen method .listen(5000, () =>{})

//or this way

const PORT = process.env.PORT || 5000; // process.env.port it give port that system environment is running on

httpserver.listen(PORT, () => console.log(`Server Running on ${PORT}`));


