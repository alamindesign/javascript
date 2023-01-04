// let names = new Array(5);
// for(var i = 0; i<names.length; i++){
//     names[i] = prompt("Enter name: ",i);
// }
// for(var i = 0; i<names.length; i++){
//      document.write("<h1 style='color:teal'>"+names[i] + "</h1>")
// }
let names = ["Al Amin","Shaheen","Rubel","Ashim"];
let rolls = [25, 23, 20, 15];
let namesAndRolls = names.concat(rolls);
for(var i = 0; i<namesAndRolls.length; i++){
         document.write("<h1 style='color:teal'>"+namesAndRolls[i] + "</h1>")
}
names.pop()
document.write(names)
names.push("Ashim")