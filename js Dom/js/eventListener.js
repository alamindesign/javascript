let btn = document.querySelector("button");
btn.addEventListener("click", giveAlert);
function giveAlert(){
    alert("I'm working....");
}
let text = document.querySelector("#text");
let btns = document.querySelectorAll(".myButton");
btns[0].addEventListener("click", function(){
    text.innerHTML = this.innerHTML + " Is clicked";
})
btns[1].addEventListener("click", function(){
    text.innerHTML = this.innerHTML + " Is clicked";
})
btns[2].addEventListener("click", function(){
    text.innerHTML = this.innerHTML + " Is clicked";
})

