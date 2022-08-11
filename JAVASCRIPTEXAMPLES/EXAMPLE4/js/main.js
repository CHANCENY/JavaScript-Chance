
let dataServer = new Array();

//collecting id element

const textButton = document.getElementById('texts');
const jsonButton = document.getElementById('jsons');
const fetchButton = document.getElementById('fetchs');
const inputsearch = document.getElementById('inputs');
const forms = document.getElementById('forms');

/*async function fetchingData(){
    dataServer = await fetch('data/datamade.txt')
    .then(resp => resp.text())
    .then(resp => JSON.parse(resp));
 
}

//calling 
fetchingData();
*/

//giving event listener

textButton.addEventListener('click',getText);
jsonButton.addEventListener('click',getJson);
fetchButton.addEventListener('click',getFetchData);
forms.addEventListener('submit',searching);

let totaldisplay = 0; 
let totalcard = 0;

async function getText(e){
  
    let textComment = new Array();
    textComment = await fetch('data/DocumentText.txt')
    .then((responses) => responses.text())
    .then(respo => JSON.parse(respo));

    textComment.forEach(coms =>{
        makeListOutput(coms.Title);
    })
}

async function getJson(e){

    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(reps => reps.json());
   
    posts.forEach(post =>{

        let h5s = document.createElement('h5');
        h5s.className ='card-title';
        h5s.appendChild(document.createTextNode(post.title));

        let ids = document.createElement('h6');
        ids.className = 'card-subtitle mb-2 text-muted';
        ids.appendChild(document.createTextNode(`UserId ${post.userId} post Id ${post.id}`));

        let comment = document.createElement('p');
        comment.className ='card-text';
        comment.appendChild(document.createTextNode(post.body));

       let data =document.createElement('div');
       data.className = 'card-body mb-3';

       data.appendChild(h5s);
       data.appendChild(ids);
       data.appendChild(comment);

       makingCardOutput(data);
    })

}

async function getFetchData(e){

    let textComment = new Array();
    textComment = await fetch('https://jsonplaceholder.typicode.com/users')
    .then((responses) => responses.text())
    .then(respo => JSON.parse(respo));

    textComment.forEach(coms =>{
        makeListOutput(`${coms.name} ${coms.username} ${coms.email}`);
    })
}

function makeListOutput(data){

    if(totaldisplay <= 10){
    let item = document.createElement('li');
    item.className = 'list-group-item mb-2';
    let text = document.createTextNode(data);
    item.appendChild(text);

    let ul = document.getElementById('group-list-items');
    ul.appendChild(item);
    totaldisplay++;
    }
}

function makingCardOutput(data){
   
    if(totalcard <= 10){
        let card = document.createElement('div');
        card.className = 'card card-card mb-3';
        card.appendChild(data);

        let place = document.getElementById('cards');
        place.appendChild(card);
        totalcard++;
    }

}

async function searching(e){
    e.preventDefault();
    if(e.type == "submit"){

    let results = new Array();
    results = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(reps => reps.json());
   
     let result2 = new Array();
     result2 = await fetch('data/DocumentText.txt')
    .then((responses) => responses.text())
    .then(respo => JSON.parse(respo));

     let result3 = new Array();
     result3 = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((responses) => responses.json())
    
    let finding = new Array();

    finding = results.filter(res => res.name == inputsearch.value);

    finding.forEach((user) => {
        displayResultFromUsers(user.name, user.username, user.email, user.id);
    })

    let finding2 = new Array();
  
    finding2 = result2.filter(res => res.Title == inputsearch.value);

    finding2.forEach((doc) => {
        displayResultFromDocument(doc.Title, doc.LinkVideo, doc.Duration, doc.Quality);
    })

    let finding3 = new Array();
   
   finding3 = result3.filter(res => res.title == inputsearch.value);

   finding3.forEach((post) => {
    displayResultFromPost(post.title, post.id, post.userId, post.body)
})

 
  }

}

function displayResultFromPost(title, idss, userid, body){

    let h5s = document.createElement('h5');
    h5s.className ='card-title';
    h5s.appendChild(document.createTextNode(title));

    let ids = document.createElement('h6');
    ids.className = 'card-subtitle mb-2 text-muted';
    ids.appendChild(document.createTextNode(`UserId ${userid} post Id ${idss}`));

    let comment = document.createElement('p');
    comment.className ='card-text';
    comment.appendChild(document.createTextNode(body));

   let data =document.createElement('div');
   data.className = 'card-body mb-3';

   data.appendChild(h5s);
   data.appendChild(ids);
   data.appendChild(comment);

   makingCardOutput(data);
}

function displayResultFromDocument(title, link, duration, Quality){

    let h5s = document.createElement('h5');
    h5s.className ='card-title';
    h5s.appendChild(document.createTextNode(title));

    let ids = document.createElement('a');
    ids.className = 'card-subtitle mb-2 text-muted';
    ids.href = link;
    ids.appendChild(document.createTextNode("watch here"));

    let comment = document.createElement('p');
    comment.className ='card-text';
    comment.appendChild(document.createTextNode(`${duration} ${Quality}`));

   let data =document.createElement('div');
   data.className = 'card-body mb-3';

   data.appendChild(h5s);
   data.appendChild(ids);
   data.appendChild(comment);

   makingCardOutput(data);
}


function displayResultFromUsers(name, username, email, id){

    let h5s = document.createElement('h5');
    h5s.className ='card-title';
    h5s.appendChild(document.createTextNode(name));

    let ids = document.createElement('h6');
    ids.className = 'card-subtitle mb-2 text-muted';
    ids.appendChild(document.createTextNode(`UserId: ${id} Email: ${email}`));

    let comment = document.createElement('p');
    comment.className ='card-text';
    comment.appendChild(document.createTextNode(`Username ${username}`));

   let data =document.createElement('div');
   data.className = 'card-body mb-3';

   data.appendChild(h5s);
   data.appendChild(ids);
   data.appendChild(comment);

   makingCardOutput(data);
}

