//alert("External file loader completed");
//console.log("External file loader completed");

//console.error("this is error");
//console.warn("this is warning");

//let age = 30; // let is keyword for declaring variable that can be reused
//console.log(age);

//age = 31;

//console.log(age);

//const

//const gender = "male"; // const is keyword for declaring variable that remain const entire program
//console.log(gender);

//gender = "female"; // this will give error const cannot reassigned

// data type in javascript

/*const name = "Chance nyasulu";
const age = 24;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;

console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);*/

//working with strings

//connect string

/*const firstname = "Chance"
const lastname = "Nyasulu"

//old way 
console.log(firstname+" "+lastname)

//template string way
console.log(`My name is ${firstname} ${lastname}`)

// can also be assign to variable

const fullSentence = `My name is ${firstname} ${lastname}`

console.log(fullSentence);

// more of string method available

const name = "chance nyasulu is programmer";

console.log(name.length);  // property length without ()
console.log(name.toUpperCase()); // this is method
console.log(name.toLowerCase()); // this is method
console.log(name.substring(3,8)); // this is method
console.log(name.split(" ")); // this is method*/


//working with array

/*const numbers = new Array(1,2,3,4,5,6,7,8,9,0); // this is construct of array
console.log(numbers);

//or use this way to create array

const fruits =['apples','oranges','mangoes','bananas'];
console.log(fruits);

// array can take multiple data of different datatype

const diff = [2,'mangoes',true,null,5.8,undefined];
console.log(diff);

//accessing element of array ways

//way 1 using square blacket and put index ofelement inside
console.log(fruits[2]);

//way 2 
//using loops dis later

//adding of change element of array

fruits[3]="grapes";
console.log(fruits);

//adding to array way 1
fruits[4]="tomatoes";
console.log(fruits);

//adding to array way2 //recommended
fruits.push("green paper");
console.log(fruits);

//adding to array way2 //recommended at front
fruits.unshift("onions");
console.log(fruits);

//more method
console.log(fruits.pop()) // method to remeve element at end
console.log(Array.isArray("onions"));
console.log(fruits.indexOf("oranges")) // give index of element given
*/

/*letetrals

const person = {
    firstname: "chance",
    sirname: "nyasulu",
    age:24,
    gender:"male",
    school:"B.tech cse",
    hobbies:['movies','music','eating','sleeping','walking','footabal'],
    belief:"christian"
}


console.log(person)

//accessing single value using dot then key

console.log(person.firstname, person.sirname, person.age);

//from array in leteral

console.log(person.hobbies);

//or single element

console.log(person.hobbies[2]);

//distructing

const {firstname, age} = person;
console.log(firstname);

//adding more property to literal

person.email ="nyasuluchance6@gmail.com";
console.log(person.email);*/

/*array of objects

const todos =[
{
    id:1,
    text:"Go shopping",
    isCompleted:true
},

{
    id:2,
    text:"Go watching movies",
    isCompleted:true
},

{
    id:3,
    text:"Go sleeping",
    isCompleted:false
},
];

//accessing object of array todos

//console.log(todos);
//console.log(todos[1].text);

//json

//const todoJson = JSON.stringify(todos);  //convert object array to json format
//console.log(todoJson);

/*looping 
// for loops

for(let i = 0; i <= 10; i++){
    console.log(`for loop number ${i}`);
}

//while loop

let y = 0;

while(y <= 10){
    console.log(`Y is ${y}`);
    y++;
}

//uses of loops example

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

//also for loop can be

for(let task of todos){
    console.log(task.id);
}

// high order of array with for loops
//1. foreach
//2.map
//3.filter

todos.forEach(function(task){
    console.log(task.isCompleted);
});

const returnText = todos.map(function(task){
  return task.text;
})

console.log(returnText);

const completedOnes = todos.filter(function(task){
    return task.isCompleted === true;
})

console.log(completedOnes);


// can be connected check below

const connectedSytax = todos.filter(function(tasks){
    return tasks.isCompleted === true;
}).map(function(task){
    return task.text;
})

console.log(connectedSytax);*/

/*conditions

const x = '10';

// == check for value if same but not datatype
if(x == 10){
    console.log("first con x is number 10");
}

// == check for value if same but also datatype
if(x === 10){
    console.log("second con x is number 10");
}

// can also go further with else

if(x === 10){
    console.log("10 is number");
}else{
    console.log("10 is ",typeof x);
}

// multiple conditions with AND operator

if(x < 10 && x === 10){
    console.log("10 is number between 0 and 10");
}else if(x > 10 && x === 10){
    console.log("10 is number between 10 and more");
}else if (x == 10 && x !== 10) {
    console.log("10 is not number ");
} else {
    console.log("it type is ",typeof x);
}

// multiple conditions with OR operator

if(x < 10 || x === 10){
    console.log("10 is number between 0 and 10");
}else if(x > 10 || x === 10){
    console.log("10 is number between 10 and more");
}else if (x == 10 || x !== 10) {
    console.log("10 is not number ");
} else {
    console.log("it type is ",typeof x);
}

//ternary operator

const y = 20;

const color = y > 10 ? 'red' : 'green';
console.log(color);

//switch

switch(color){
    case 'red':console.log(`color is ${color}`);break;
    case 'green':console.log(`color is ${color}`);break;
    default: console.log(`Color found ${color}`);
}*/


/*functions

function addNumbers(num1 = 0, num2 = 0){
  return num1 + num2;
}

console.log(addNumbers(8,9));

//allow function

const addNumbersInallow = (num1 = 0, num2 = 0) =>{
    console.log(num1 + num2);
}
addNumbersInallow(10,10);

// can also be written as
const addNumbersInallowTwo = (num1 = 0, num2 = 0) => console.log(num1 + num2);
addNumbersInallowTwo(20,20)

//also like
const addNumbersInallowThree = (num1 = 0, num2 = 0) => num1 + num2;
console.log(addNumbersInallowThree(50,50));

//the basic sytax of javascript 
*/
