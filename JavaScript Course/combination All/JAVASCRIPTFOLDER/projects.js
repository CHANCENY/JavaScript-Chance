//console.log("project file connected!");

var form = document.getElementById("my-form");
var msg = document.querySelector('.msg')

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    if(e.type == 'submit'){
    
        //get inputs values
      var nameInput = document.getElementById('name');       
      var emailInput = document.getElementById('email');

      if(nameInput.value == ""){

        msg.innerHTML ="<span>Fill in Name field!</span>";
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        setTimeout(()=>msg.remove(),3000);
        return;
      }

      if(emailInput.value == ""){

        msg.innerHTML ="<span>Fill in Email field!</span>";
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        setTimeout(()=>msg.remove(),3000);
        return;
      }

      //create new item li
      var newitem = document.createElement('li');
      newitem.className = "items";

      //creating text node and appending it in created li
      var textFromForm = document.createTextNode(`${nameInput.value} @ ${emailInput.value}`);
      newitem.appendChild(textFromForm);

      //grabbing ul by id and appending li created
      var items = document.getElementById('users');
      items.appendChild(newitem);

      nameInput.value = "";
      emailInput.value ="";
       
    }
}