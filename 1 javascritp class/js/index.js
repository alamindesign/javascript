
let food ={
    rice:'steamed',
    potato: 'boiled',
    water: 10,
    Dal:3
}
food.water=5;
console.log(food.water);
let greeting='Hello ';
let $name='Al Amin';
console.log(greeting+$name);
document.write(greeting+$name+"<br/>");
alert("hello! this is "+$name);
document.write("<p style='color: green;'>This is a paragraph form javascript.</p>");
document.write("Hello"+"<br/>");
document.writeln("This is second para"+"<br/>");
let num=120;
document.write(num.toString());
console.log(num.toString());
let hello='140';
document.write(hello=parseInt(hello,7));
function mistake(mName){
    console.log("You have pressed wrong key "+mName)
}              
mistake('Nayma');
mistake('Al Amin');
function addMath(n,n1){
    console.log(n+n1);
}
addMath(2,5);

let firstName=prompt("Enter Your fisrt Name: ");
let lastName=prompt("Enter Your last name: ");
document.write("Welcome!!"+" "+firstName+" "+lastName+"<br/>");

// let firstNum=prompt("Enter the first Number");
// let secondNum=prompt("Enter the second number");
// let sum=Number(firstNum)+Number(secondNum);
// document.write("The sum of two number is: "+sum);

let firstNum=Number(prompt("Enter the first Number"));
let secondNum=Number(prompt("Enter the second number"));
let sum=firstNum+secondNum;
document.write("The sum of two number is: "+sum+"<br/>");

document.write(Number(prompt("Enter first number"))+Number(prompt("Enter second number"))+"<br/>");
let firstText=prompt("Enter the first text");
let secondText=prompt("Enter the seconed text:");
document.write(firstText.concat(secondText)+"<br/>");
document.write(secondText.length);
let lastname='Al Amin';
document.write(lastname.slice(0,2));
document.write("<br/>");
document.write(lastname.charAt(3));
let n1=Number(prompt("Enter first num:"));
let n2=Number(prompt("Enter second num:"));
let add=n1+n2;
let sub=n1-n2;
let div=n1/n2;
let multiple=n1*n2;
document.write(n1+"+"+n2+"="+add+"<br/>");
document.write(n1+"-"+n2+"="+sub+"<br/>");
document.write(n1+"/"+n2+"="+div+"<br/>");
document.write(n1+"*"+n2+"="+multiple);