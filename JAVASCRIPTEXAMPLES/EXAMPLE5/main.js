//console.log("connected");

//adding event to page event DOMContentLoaded
document.addEventListener('DOMContentLoaded',()=>{
    UI.getBooks();
});

let removebutton = document.querySelector('#booklist');

//adding eventh to remove button
removebutton.addEventListener('click',(pointTo) =>{
    UI.removeBook(pointTo.target);
})

//adding event h to form
document.getElementById('forms').addEventListener('submit', (e)=>{
    if(e.type == 'submit'){
        UI.addBook();
    }
})


//book class will present book object

class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//Ui class this will have static method since we dont need
//to insta

class UI{
    static displayBooks(book){

        //creating a row to insert  into table head
        let row = document.createElement('tr');
        let content = row.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class="btn btn-danger btn-sm delete">x</a></td>`;

        //grabing tbody id
        let tbody = document.getElementById('booklist');
        tbody.appendChild(row);
    }
    
    static removeBook(el){
      
        //removing book from table
        if(el.classList.contains('delete')){

            //getting isbn number
            let isbn = el.parentElement.previousElementSibling.textContent;

            //statically calling remove book from Store class
            if(Stores.removeBookFromStores(isbn)){

                //successfully remove from storage then remove frm DOM
                el.parentElement.parentElement.remove();
                UI.showAlert('Book removed successfully','alert-success');
            }else{
                console.log('failed to delete')
            }
            
        }
    }

    static getBooks(){
        /*  const books =[
            {title:'Book one',
             author:'John doe',
             isbn: 35635
            },
            {title:'Book two',
             author:'Jenet doe',
             isbn: 35667
            },
            {title:'Book three',
             author:'Marcos doe',
             isbn: 35135
            }
        ];   */

        //statically calling getbook from store class
       const books =Stores.getBookFromStores();   

       //looping through all and passess each by each to display in UI class
        books.forEach(book =>{
            UI.displayBooks(JSON.parse(book));
        })
    }

    static addBook(book){

        //taking in all give input value
        let title = document.querySelector('#title').value;
        let author = document.querySelector('#author').value;
        let isbn = document.querySelector('#isbn').value;

        //check if all input are field
        if(title != "" && author != "" && isbn != ""){
            
            //constructing book
            const book = new Book(title,author,isbn);

            //add book to storage
            Stores.saveBookInStores(JSON.stringify(book));
            
            //add to book list
            UI.displayBooks(book);

            //showing alert
            UI.showAlert('Book added successfully','alert-success');

            //clear field by calling clear field in UI
            UI.clearFields();

        }
        else{
            UI.showAlert('Fill in all fields!','alert-danger')
        }

    }

    static showAlert(message, classname){

        //creating div element dynamically
        let div = document.createElement('div');
        div.className = `alert ${classname}`;
        div.appendChild(document.createTextNode(message));

        //getting parent and child for inserting of div created
        let con = document.getElementById('containerdiv');
        let forms = document.getElementById('forms');
        con.insertBefore(div,forms);

        setTimeout(()=>{
            div.remove();
        }, 2000);
    }

    static clearFields(){
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }
}


//class storage

class Stores{
    static getBookFromStores(){

        //getting books from local storage browser
        let books;
       if(localStorage.getItem('books') === null){
         books = [];
       }else{
        books = JSON.parse(localStorage.getItem('books'));
       }

       return books;
    }

    static saveBookInStores(book){

        //getting book item in storage
        const books = Stores.getBookFromStores();

        //pushing in new book values
        books.push(book);

        //resetting local storage
        localStorage.setItem('books',JSON.stringify(books));
    }

    static removeBookFromStores(isbn){

        let flag = 0;
        
        //getting localstorage book item
        let books =Stores.getBookFromStores();
         
        //matching isbn to delete
        books.forEach((book, index) =>{
            
            if(JSON.parse(book).isbn === isbn){
                books.splice(index,1);
                flag = 1;
            }
        }) 

        //this way also
        /* for(let i = 0; i < books.length; i++){
            console.log(JSON.parse(books[i]).title);
        }
         */

         //resetting local storage
        if(flag === 1){
            localStorage.setItem('books', JSON.stringify(books));
            return true;
        }
        return false;
    }
}

