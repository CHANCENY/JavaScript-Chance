//console.log("connected");

let ObjectCreated = new Array();

class Student{
    constructor(firstname, sirname,  birthday, course, rollnumber){
        this.Name = firstname;
        this.lastName = sirname;
        this.birthDay = birthday;
        this.Course = course;
        this.RollNumber = rollnumber;
        this.saveObject();
        
    }

    saveObject(){
        ObjectCreated.push(this);
    }

    getStudentFisrtName(){
        return this.Name;
    }
    getStudentLastName(){
        return this.lastName;
    }
    getStudentAge(){
        
        let date = new Date();
        let fullyear = date.getFullYear();

        let born = new Date(this.birthDay);
        let bornyear = born.getFullYear();

        return fullyear - bornyear;
    }

    getRollNumber(){
        return this.RollNumber;
    }

    getCourse(){
        return this.Course;
    }

    getFullStudent(){

        const student = {
            firstname: this.Name,
            lastname: this.lastName,
            birthday:this.birthDay,
            course: this.Course,
            roll: this.RollNumber,
            isCompleted: this.isCompleted,
            DomNumber: this.DomNumber
        }

        return student;
    }
    getStudentStatus(){
        if(this.isCompleted === true){
            return `${this.Name} ${this.lastName} completed ${this.Course} `;
        }else{
            return `${this.Name} ${this.lastName} still doing ${this.Course} `;
        }
    }

    getWhoSharingRoom(){
        this.SharingRoom.forEach(student => console.log(`${this.Name} shares room with ${student}`));
    }
}


const student1 = new Student('Chance','Nyasulu','05-06-1997','B.tech CSE','2001003012');

//console.log(student1.getStudentAge());
//console.log(student1.getFullStudent());

const details = student1.getFullStudent();
student1.DomNumber = 249;
student1.isCompleted = true;



const student2 = new Student('Marcos','Jova','17-12-2001','B.Tech CSE','2001002029');
student2.isCompleted = false;
student2.DomNumber = 249;


const student3 = new Student('Emmanuel','Chiwenu','12-04-2002','B.Tech CSE','2001003015');
student3.isCompleted = false;
student3.DomNumber = 249;

if(student1.DomNumber == student2.DomNumber && student2.DomNumber == student3.DomNumber){
    student1.SharingRoom = new Array();
    student1.SharingRoom.push(student2.Name);
    student1.SharingRoom.push(student3.Name);

    student2.SharingRoom = new Array();
    student2.SharingRoom.push(student1.Name);
    student2.SharingRoom.push(student3.Name);


    student3.SharingRoom = new Array();
    student3.SharingRoom.push(student1.Name);
    student3.SharingRoom.push(student2.Name);
}

ObjectCreated.forEach(obj => {

    console.log(obj.getStudentStatus());
    console.log(obj.getWhoSharingRoom());   
});