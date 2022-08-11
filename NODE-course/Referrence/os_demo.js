const fss = require('fs');
const os = require('os');
const paths = require('./path_demo');



// show the platform being used like window (win32) etc
//console.log(os.platform());

//show cpu architure X64, 32x, etc
//console.log(os.arch());

//cpu core 
//console.log(os.cpus());

//memory free available
//console.log(os.freemem());

//network interfaces
//console.log(os.networkInterfaces());

//console.log(os.tmpdir());

//making folder in temp dire using tmdir from os module , join from path module, write and mkdir from
//fileSystem module awesowe

/*fss.mkdir(paths.join(os.tmpdir(),'/testing.com'),{},(err) =>{
    if(err)throw err;
    console.log("file made");
})

fss.writeFile(paths.join(os.tmpdir(),'/testing.com','testing.txt'),'hello testing file',(err) =>{
    if(err) throw err;
    console.log("Written");
})
*/


//uptime return time system has be on
//console.log(os.uptime());

//user of system being used
console.log(os.userInfo());

