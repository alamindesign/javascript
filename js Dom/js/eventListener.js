let text = document.querySelector("#text");
let btns = document.querySelectorAll(".myButton");
let ul = document.querySelector("ul");
let input = document.querySelector("#userinput");
let send = document.querySelector("#send");

// btns[0].addEventListener("click", function(){
//     text.innerHTML = this.innerHTML + " Is clicked";
// })
// btns[1].addEventListener("click", function(){
//     text.innerHTML = this.innerHTML + " Is clicked";
// })
// btns[2].addEventListener("click", function(){
//     text.innerHTML = this.innerHTML + " Is clicked";
// })
for(var i = 0; i < btns.length ; i++){
    btns[i].addEventListener("click", function(){
            text.innerHTML = this.innerHTML + " Is clicked";
    });
}

send.addEventListener("click", function(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
})
input.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
    
})
var h = document.querySelectorAll(".heading")
h[2].addEventListener("click", function(){
    h[2].className = "textStyle";
})