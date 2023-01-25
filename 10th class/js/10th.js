// // const inputText = document.querySelector("input");
// const inputText = document.querySelector("input[name=email]");
// inputText.addEventListener("change", changeHandler);

// function changeHandler(e){
//     text = inputText.value;
//     document.write(text);
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.className);
//     console.log(e.target.id);
//     console.log(e.target.value);
    
// }
// const programs = document.querySelectorAll("input[name=program]")
// console.log(programs);

// Array.from(programs).map((programs)=>{
//     programs.addEventListener("change", programHandler);
// })

// function programHandler(e){
//     console.log("Checked");
//     if(e.target.checked){
//         console.log(e.target.value);
//         console.log(e.target.required);
//     }
// }

// const division = document.querySelector("#division");
// var select = (e)=>{
//     console.log(`You have selected ${e.target.value}.`);
// }
// division.addEventListener("change", select)
// try{
//     alert("hello, from try block")
//     alert(names);
// }
// catch(Error){
//     console.log(Error)
//     console.log(Error.name)
//     console.log(Error.message)
// }
// finally{
//     alert("Executing Finally block")
// }
// let input = document.querySelector("#demo").value;
// let btn = document.querySelector("button");
// let text = document.querySelector("#paraID");
// function tryCatchFunction(){
//     try {
//         if(input == '') throw "is empty";
//         if(isNaN(input)) throw "is not a number";
//         input = Number(input);
//         if(input > 10) throw "is too high"
//         if(input < 5) throw " is too low";      
//     }
//     catch (e) {
//         text.innerHTML = "input " + e;   
//     }
//     // finally{
//     //     input.value = 'finnaly is executing';
//     // }
// }
// btn.addEventListener("click", tryCatchFunction)

import {text,setText} from "./es6module.js";
let altertext = document.querySelector("#paraID");
setText("I'm changing the text now...")
console.log(text);
altertext.innerHTML = text;
// json
// {
//     "Students":[
//         {"firstName":"Jhon","lastName":"Doe"},
//         {"firstName":"Anna","lastName":"Smith"},
//         {"firstName":"Peter","lastName":"Jones"},
//     ]
// }
let students = JSON.parse('[{"firstName":"Jhon","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]')
let employee = JSON.parse('{"name":"John", "age":30, "car":null}');
console.log(students);
console.log(employee)