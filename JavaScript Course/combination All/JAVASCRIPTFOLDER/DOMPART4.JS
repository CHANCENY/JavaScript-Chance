
//console.log("dompart 4 connected");


 //console.log(document.all);
 //console.dir(document);
 //console.log(document.images);
 //console.log(document.title);
 //console.log(document.domain);
 //console.log(document.head);
 //console.log(document.URL);
 //console.log(document.body);
 //console.log(document.doctype);
 //console.log(document.links);
 //console.log(document.location);
 
 //etc

 //SELECTORS//

 //1. getElementById

 //console.log(document.getElementById('titles'));
 //console.log(document.getElementById('titles').textContent);

 //let headers = document.getElementById('titles');
 //headers.textContent = "Chance Nyasulu";
 //headers.innerText ="1234";
 //headers.innerHTML = '<span>chance nyasulu</span>';
 //headers.style.color = 'red';

 //2. getElementsByClassName

/* let items = document.getElementsByClassName('items');
 let item = document.getElementsByClassName('item');

 //console.log(items);
 //console.log(item);

 for(let i = 0; i < item.length; i++){
     item[i].textContent =  `${item[i].textContent} ${i + 1}`;
 }*/

 //3. getElementBytTagName

/*let item = document.getElementsByTagName('li');

for(let i = 0; i < item.length; i++){
    item[i].textContent =  `${item[i].textContent} ${i + 1}`;
}*/

//4. querySelector

//used for one item especially first one

/*let form = document.querySelector('#my-form');
console.log(form);
console.log(form.textContent);

form.addEventListener('mouseenter', mouseEnter);
form.addEventListener('mouseleave',mouseLeaves)
let color = form.color;

function mouseEnter(e){
    form.style.backgroundColor ="yellow";
}

function mouseLeaves(e){
    form.style.backgroundColor = 'lightgrey';
}*/

/*let bigtitle = document.querySelector('#jshead');
console.log(bigtitle.textContent);
//all styles will be ignored
bigtitle.textContent = "Chance learning js programming"; 
bigtitle.innerText = "Chance learning js programming";
bigtitle.innerHTML = "<h1>Chance learning js programming</h1>";*/

//var submit = document.querySelector("input[type='submit']");
//submit.value ="Send Now!";
//console.log(submit.value)

//let inputField = document.querySelector('#name');
//inputField.value = "Marcos";

//let item = document.querySelector('.item');
//console.log(item.textContent);
//item.textContent = "nyasuluchance@gamil.com";
//console.log(item);

// All css selector can be used in querySelector eg
//console.log(document.querySelector(".item:last-child"))
//document.querySelector(".item:last-child").style.backgroundColor= 'blue';


//5. querySelectorAll

//let items = document.querySelectorAll('.item');
//console.log(items);

//items.forEach(function(li){
   // console.log(li.textContent);
//})

//let odd = document.querySelectorAll("li:nth-child(odd)");
//odd.forEach((li)=>li.style.backgroundColor = 'grey');
 

 
 