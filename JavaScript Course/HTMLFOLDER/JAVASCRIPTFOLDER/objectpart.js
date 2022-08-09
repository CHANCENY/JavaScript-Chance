//console.log("connected objectpart file");
//object oriented programming in ES5
//construct functions

//way 1 prototypes

/*function Person(firstname,lastname,birth){

//these are attribute of clss

this.firstname = firstname;
this.lastname = lastname;
this.birth =new Date(birth); // making date object from string value

//these are method of class

this.getBirthYear = function(){
    return this.birth.getFullYear();
}

this.getFullName = function(){
    return `${this.firstname} ${this.lastname}`;
}

}

//initiate object

const person1 = new Person("chance","nyasulu","05/06/1997");

console.log(person1);
console.log(person1.birth.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());

// best way of prototype

function Person(firstname,lastname,birth){

    //these are attribute of clss
    
    this.firstname = firstname;
    this.lastname = lastname;
    this.birth =new Date(birth); // making date object from string value

    }

    Person.prototype.getBirthYear = function(){
        return this.birth.getFullYear();
    }
    Person.prototype.getFullName = function(){
        return `${this.firstname} ${this.lastname}`;
    }

    person = new Person("Chance","Nyasulu","05-06-1997");

    console.log(person.getBirthYear());
    console.log(person.getFullName());
    console.log(person);

    // object programming in ES6

    class Person{
        constructor(firstname,lastname,birth){
            this.firstname = firstname;
            this.lastname = lastname;
            this.birth =new Date(birth);
        }

        getBirthYear = function(){
            return this.birth.getFullYear();
        }

        getFullName = function(){
            return `${this.firstname} ${this.lastname}`;
        }
    }

    person = new Person("Chance","Nyasulu","06-05-1997");

    console.log(person.getBirthYear());
    console.log(person.getFullName());   
    console.log(person);*/

