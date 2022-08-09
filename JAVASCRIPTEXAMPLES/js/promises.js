//data in server
const data = [
    {name: 'chance', Last: 'nyasulu', Roll: '2001003012'},
    {name: 'Marcos', Last: 'Jova', Roll: '2001002029'},
    {name: 'Emmanuel', Last: 'Chiwenu', Roll: '2001003029'}
];

// 2. using promises methods
//in promise we return promise which  takes two argument or parameters
// resolve and  reject

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

// .then is used for next event to happen soon as the creating student
// finishes

//createStudent({name: 'Rose Rhema', Last: 'sia', Roll: '2001003011'}).then(getStudents);

//second implemetation

/*createStudent({name: 'Rose Rhema', Last: 'sia', Roll: '2001003011'})
.then(getStudents)
.catch(error => console.log(error));*/


//in case you have multiple promises we can use promise.all for example below

/*const promise1 = Promise.resolve('hello world');
const promise2 = 1997;

//this promise4 will fetch data from api (https://jsonplaceholder.typicode.com/users) since in fetch api we
//need to map to json to get actual data
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const promise3 = new Promise((resolve, reject)=>
    setTimeout(resolve,2000,'Done all promise bye'));

//in this way all promise will return only highest seconds give
//in other way all promises will wait upto highest second set in this case 2000 ie 2 seconds

Promise.all([promise1,promise2,promise3,promise4])
.then((values)=>console.log(values))
.catch((error)=>console.log(error));
*/