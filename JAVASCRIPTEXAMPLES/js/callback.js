
//data in server
const data = [
    {name: 'chance', Last: 'nyasulu', Roll: '2001003012'},
    {name: 'Marcos', Last: 'Jova', Roll: '2001002029'},
    {name: 'Emmanuel', Last: 'Chiwenu', Roll: '2001003029'}
];


//getting data from server function

/*function getStudents(){

    setTimeout(()=>{
        let output = "";
        data.forEach(student =>{
            output += `<li>${student.name} ${student.Last} ${student.Roll}</li>`;
        });
        document.body.innerHTML = output;

    },1000)
}

function createStudent(student){
    setTimeout(()=>{
        data.push(student);
    },2000)
}*/

//this way the create student will not show on screen but
//we need it also to show
//getStudents();
//createStudent({name: 'Rose Rhema', Last: 'sia', Roll: '2001003011'});


// correct way for getStudent function to show only when
// create student has vinish making student is

// 1. using the callback methods

/*function getStudents(){

    setTimeout(()=>{
        let output = "";
        data.forEach(student =>{
            output += `<li>${student.name} ${student.Last} ${student.Roll}</li>`;
        });
        document.body.innerHTML = output;

    },1000)
}

//now the create function takes the callback function
function createStudent(student, callback){
    setTimeout(()=>{
        data.push(student);
        //the callback function should be called here alright after creating vinishes
        callback();
    },2000)
}

//here making new student second shold be callback function in
//this call its getStudent function and should be passes in ref
createStudent({name: 'Rose Rhema', Last: 'sia', Roll: '2001003011'},getStudents);
*/

