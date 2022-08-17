//console.log('connected');

//collect element

const namefield = document.getElementById('name');
const emailfield = document.getElementById('email');
const messagefiled = document.getElementById('message');
const buttonsubmit = document.getElementById('sendbutton');
const form = document.querySelector('#form');

//event listener

buttonsubmit.addEventListener('click', (e) =>{
      e.preventDefault();
      fetchingData(e);
})

async function fetchingData(e){

    
    //sending data to the server method 1 using XMLHttpRequest

    const messages = {
        name:namefield.value,
        email: emailfield.value,
        message:messagefiled.value
    }

    //construct the XMLHttpRequest to use to send data to server
    const request = new XMLHttpRequest(); 
    request.open('POST','https://cryptic-hamlet-98350.herokuapp.com');
    request.send(JSON.stringify(messages));   

    /* const messages = {
        name:namefield.value,
        email: emailfield.value,
        message:messagefiled.value
    }

    //construct the XMLHttpRequest to use to send data to server
    const request = new XMLHttpRequest(); 
    request.open('POST','http://localhost:5000');
    request.send(JSON.stringify(messages));   */
 
    // method 2 fetch api but it doesnt work on localhost

   /*   const messages = {
        name:namefield.value,
        email: emailfield.value,
        message:messagefiled.value
    } */

    /* console.log("sending.....");
    await fetch('https://cryptic-hamlet-98350.herokuapp.com/',{
       method: 'POST',
       headers:{'Content-Type':'application/json; charset=UTF-8',Accept: 'application.json'},
       body:JSON.stringify(messages)     
    })
    .then((resp) =>{ return resp.json()})
    .then( (data) =>{
        console.log(data);
    })
    .catch(error => console.log(error.message)); */
 

}