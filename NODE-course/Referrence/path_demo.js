const { basename } = require('path');
const path = require('path');

//method in path module
/*console.log(path.basename('C:/Users/nyasu/Videos/temp/doc.txt'));

//basename of current file
console.log(path.basename(__filename));

//dirname name
console.log(path.dirname('C:/Users/nyasu/Videos/temp/doc.txt'));

//dirname of current running file
console.log(path.dirname(__filename));

//get extension
console.log(path.extname('C:/Users/nyasu/Videos/temp/doc.txt'))
console.log(path.extname(__filename));



//create path object
let objpath = path.parse(__filename);
let objpath2 = path.parse('C:/Users/nyasu/Videos/temp/doc.txt');

console.log(objpath);
console.log(objpath2);

//can be access by any property
//for eg

console.log(objpath.base);

*/

//join path carcatenate path

//let joined = path.join(__dirname,'test','hello.html');

//console.log(joined);
 
//can also export required module

module.exports = path;
