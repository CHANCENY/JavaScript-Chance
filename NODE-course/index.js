//const person = require('./person');

const logger = require('./ExampleLogger');

//const per1 = new person('Chance','Nyasulu',25);
//console.log(per1.personSummary());

//console.log(person());

const logs = new logger();

logs.on('message', (data)=>{
    console.log(`Called by: ${data.id} Message: ${data.msg}`);
})

logs.logMessage("Hey am Chance Nyasulu");
logs.logMessage("Hey am Marcos Nyasulu");

logs.logMessage("Hey am Emma Nyasulu");
