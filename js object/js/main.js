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
class customer{
    constructor(id,c_name,profession,items){
        this.id = id,
        this.c_name = c_name,
        this.profession = profession,
        this.items = items
    }
    print(){
        document.write("Customer ID: " + this.id + "<br/>");
        document.write("Customer Name: "+this.c_name + "<br/>");
        document.write("Profession: "+this.profession + "<br/>");
        for(var i = 0; i<items.length; i++){
            document.write("Items: "+this.items[i] + "<br/>");
        }
    }
}
document.write("<h1>Students</h1>")
let Alamin = new student("Muhammad Al Amin",25,25,"Diploma in web Application and Web development");
let Shaheen = new student("Shaheen",23,24,"Diploma in web Application and Web  development")
Alamin.print()
Shaheen.print()
// document.write("<h1>Customers</h1>")
// let Siyam = new customer();
// let Mojumder = new customer("c-102","Sourav Mojumber","Engineer","Laptop");
// Siyam.id = prompt("Enter Id: ");
// Siyam.c_name = prompt("Enter your name: ");
// Siyam.profession = prompt("Enter your profession: ");
// Siyam.items = prompt("Enter Item: ");
// Siyam.print()
// Mojumder.print();
let customerId = parseInt(prompt("Enter Customer ID"));
let customerName = prompt("Enter Customer Name");
let profession = prompt("Enter Customer Profession");
let items = new Array(5);
for(var i = 0; i<items.length; i++){
    items[i] = prompt("Enter Item: "+ i);
}
let Siyam = new customer(customerId,customerName,profession,items);
Siyam.print()