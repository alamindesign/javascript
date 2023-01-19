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
names.forEach(function(x){
    document.write(x + "<br/>")
})