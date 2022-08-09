/*console.log("DOM FILE CONNECTED");

//selection of thing from page 

//1 . single element selector
//2.  multi element selector

//console.log(window);

// for single element 

//by id
const form = document.getElementById('my-form');
console.log(form);

//by query selector
const qurry = document.querySelector('h1');
console.log(qurry);

// multi selection

//queryselectorall uses all id class tags etc
const allbyqurry = document.querySelectorAll(".item");
console.log(allbyqurry);

//also  but its old and not recommended
console.log(document.getElementsByClassName('item'));

//loop through items
const allbyqurry = document.querySelectorAll(".item");

for(let item of allbyqurry){
    console.log(item);
}

allbyqurry.forEach((item) =>console.log(item));

allbyqurry.forEach(function(item){
    console.log(item);
})*/

//munipulating dom

//const ul = document.querySelector('.items');

//ul.remove(); // removing all items from page
//ul.lastElementChild.remove(); // removing last item on page on list
//ul.firstElementChild.textContent = "chance"; //change value of item one
//ul.children[1].textContent = "Nyasulu"; //also other way of change values on page
//ul.lastElementChild.innerHTML ="<strong>05-06-1997</strong>"; // rendering html dynamically

//changing styles

/*const btn = document.querySelector(".btn");
//btn.style.background = "red";  //styles can be change anytime dynamically

//events   used with allow function (e) is event perimeter
btn.addEventListener('click',(e)=>{

    // voiding quick default of submit button
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.value);
    console.log(e.target.type);
    
})

//event used with normal function

btn.addEventListener('click', addnumber);

function addnumber(){
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>';

    console.log(4 + 4);
}

btn.addEventListener('mouseout',mouseleaved);


function mouseleaved(){
    btn.style.background ="yellow";
}

const myform = document.querySelector('#my-form');
const nameinput = document.querySelector('#name');
const emailinput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userlist = document.querySelector('#users');

myform.addEventListener('submit',onSubmitting);

function onSubmitting(e){
  e.preventDefault();
  
  if(nameinput.value == "" || emailinput.value == ""){
      //alert("please enter all fields")
      msg.classList.add('error')
      msg.innerHTML ="enter all fields";

      setTimeout(()=>msg.remove(),3000);
  }else{
    //alert("successfully") 
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${nameinput.value} : ${emailinput.value}`));
    userlist.appendChild(li);

    nameinput.value ='';
    emailinput.value = '';
}
}*/
