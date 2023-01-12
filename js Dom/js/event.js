let text = document.querySelector("#text");
let btn = document.querySelector("button");
let btn2 = document.querySelector("#second");
let btn3 = document.querySelector("#remove");
// function onmouseOver(){
//     text.innerHTML = "Hi.. Welcome!!!"
// }

function ClickedOnButton(){
    text.innerHTML = "I'm form Bangladesh!!!";
    text.className = "textStyle";
}
function addStyle(){
    text.classList.toggle("bg");
}
function removeStyle(){
    text.classList.remove("fontSize");
    text.classList.remove("textStyle");
}
let SelectedImg = 
function viewImage1(){
    SelectedImg.src= "Images/img.jpg";
    text.innerHTML = "image worked..";
}
function Next(){
    location.href="index.html";
}