// let student = {
//     name: "Muhammad",
//     Roll: 25,
//     Semester: "2nd",
//     Courses: ['Web programming','E-commerce and cyber security','Computer Networking']
// }
// document.write(student.name + "<br/>")
// document.write(student.Roll + "<br/>")
// document.write(student.Semester + "<br/>")
// document.write(student.Courses[0] + "<br/>")
class student{
    constructor(name,roll,age,section){
        this.name = name,
        this.roll = roll,
        this.age = age,
        this.section = section
    }
    print(){
        document.write("Name: " + this.name + "<br/>");
        document.write("Roll: "+this.roll + "<br/>");
        document.write("Age: "+this.age + "<br/>");
        document.write("Section: "+this.section + "<br/>");
    }
}

let Alamin = new student("Muhammad Al Amin",25,25,"Diploma in web");
Alamin.print()