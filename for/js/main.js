let names = ['Muhammad', 'Ahmed', 'Al Amin'];
// names.push("Hossain");
// for(let x of names){
//     document.write(x + "<br/>");
// }

let student=[ {
    id: 101,
    name: "Al Amin",
    profession: "Freelancer"
},{
    id: 102,
    name: "Hossain",
    profession: "Private service"
}]
for(let x of student){
    for(let y in x){
        document.write(y + " : " + x[y] + "<br/>");
    };
}
document.write("<h1>For Each function</h1>");
names.forEach((x)=>{
    document.write(x + "<br/>")
})
document.write("<h1>Map</h1>");
let numbers = [2,20,33,25];
var squareNumbers = numbers.map((x)=>{
    return x*x;
})
squareNumbers.forEach((x)=>{
    document.write(x + "<br/>")
})
document.write("<h1>Filter array</h1>");
let numberFilter = numbers.filter((x)=>{return x>20});//crating new array by filtering old one..
numberFilter.forEach((x)=>{document.write(x+"<br/>")});
document.write("<h1> ()=> arrow function </h1>")
let add = (a,b)=> document.write(a+b);
add(20,30);
document.write("<h1>All together</h1>");
let students=[ {
    id: 101,
    name: "Al Amin",
    cgpa: 5.00
},{
    id: 102,
    name: "Hossain",
    cgpa: 4.29
},
{
    id: 102,
    name: "Shaheen",
    cgpa: 4.95
}]
function showStudentName(){
    return students.filter(function(x){
        return x.cgpa > 4.50
    }).map(function(y){
        return y.name;
    });
}
document.write("check: "+students[1].name);
document.write("<br/>"+showStudentName()+"<br/>");
const showStudentNamesWithArrow = () => students.filter((x) => x.cgpa>4.50).map((y) => y.name);
document.write(showStudentNamesWithArrow());