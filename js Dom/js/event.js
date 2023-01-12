let text = document.querySelector("#text");
let btn = document.querySelector("button");
let btn2 = document.querySelector("#second");
// function onmouseOver(){
//     text.innerHTML = "Hi.. Welcome!!!"
// }

function ClickedOnButton(){
    text.innerHTML = "I'm form Bangladesh!!!";
    text.className = "textStyle";
}
function addStyle(){
    text.innerHTML = "Hello, Welcome!";
    text.style.color = "light";
    text.style.fontSize = "3rem"
    text.style.fontWeight = "bold"
    text.classList.toggle("bg");

}
