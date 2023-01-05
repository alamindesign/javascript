let names = new Array(5);
for(var i = 0; i<names.length; i++){
    names[i] = Number(prompt("Enter Number: "+ i));
}
for(var i = 0; i<names.length; i++){
    let lg = names[0];
     if(lg > names[i]){
         lg = names[i];
     }
}
document.write("The large number is: "+ lg + "<br/>");

// let j = names.length - 1;
// if(lg > names[j]){
//     document.write("The large number is: "+ lg);
// }else{
//     document.write("The large number is: "+ names[j]);
// }


// let j = names.length - 1;
// if(lg>names[j])
// {
//     document.write("The large number is: "+ lg);
// }else
//     document.write("The large number is: "+ names.length-1);
// // let names = ["Al Amin","Shaheen","Rubel","Ashim"];
// // let rolls = [25, 23, 20, 15];
// // let namesAndRolls = names.concat(rolls);
// // for(var i = 0; i<namesAndRolls.length; i++){
// //          document.write("<h1 style='color:teal'>"+namesAndRolls[i] + "</h1>")
// // }
// document.write(names + "<br/>")
// names.pop()
// document.write(names + "<br/>")
// names.push("Ashim")
// document.write(names + "<br/>")
// names.shift()
// document.write(names + "<br/>")
// names.unshift("Al Amin")
// document.write(names + "<br/>")

// //to sort number 
// // Number.sort(function(a,b){a-b})
