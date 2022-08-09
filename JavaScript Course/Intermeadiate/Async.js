//dami data from server
const data = [
    {name: 'chance', Last: 'nyasulu', Roll: '2001003012'},
    {name: 'Marcos', Last: 'Jova', Roll: '2001002029'},
    {name: 'Emmanuel', Last: 'Chiwenu', Roll: '2001003029'}
];

// 3. using Async and wait methods

//Rule make sure you have function of async 

function getStudents(){

    setTimeout(()=>{
        let output = "";
        data.forEach(student =>{
            output += `<li>${student.name} ${student.Last} ${student.Roll}</li>`;
        });
        document.body.innerHTML = output;

    },1000)
}

function createStudent(student){
    //returning promise
    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            data.push(student);
           
            //normarlly we will be doing error checking here
            // for demo purposes try to change value of error
            const error = false;
           
            if(!error){
                resolve();
            }else{
                //this part will rise uncaught promise if error value is set to true
                // to avoid it check below second creation implementation
                reject('error something went wrong');

               
            }
        },3000)
    })
}

//function must start with async to be able to use await inside it
async function init(){
  //control will wait until creating finishes it only wait getStudent will be execute
  //await createStudent({name: 'Rose Rhema', Last: 'sia', Roll: '2001003011'}).then(getStudents);
  //getStudents();

  //fetch can also be used

  const recievedData = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  console.log(recievedData);
}

init();