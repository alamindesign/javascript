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