let SliderIMG = document.querySelector("#IMG");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let count = 1;
function nextImage(){
    count++;
    if(count<4){
        SliderIMG.src = `../Images/${count}.jpg`
    }
    else{
        count = 1
        SliderIMG.src = `../Images/${count}.jpg`
    }
}
function previousImage(){
    count--;
    if(count<4 && count>0){
        SliderIMG.src = `../Images/${count}.jpg`
    }
    else{
        count = 4
        SliderIMG.src = `../Images/${count}.jpg`
    }
}
// function previousImg(){
//     if(SliderIMG.src == 'http://127.0.0.1:5500/Images/2.jpg'){
//         SliderIMG.src = "../Images/1.jpg"
//         console.log("clicked previous");
//     }else if(SliderIMG.src == 'http://127.0.0.1:5500/Images/3.jpg'){
//         SliderIMG.src = "../Images/2.jpg"
//         console.log("clicked previous");
//     }else if(SliderIMG.src == 'http://127.0.0.1:5500/Images/1.jpg'){
//         SliderIMG.src = "../Images/3.jpg"
//         console.log("clicked previous");
//     }
    
// };
// function nextImg(){
//     if(SliderIMG.src == 'http://127.0.0.1:5500/Images/2.jpg'){
//         SliderIMG.src = "../Images/3.jpg"
//         console.log("clicked previous");
//     }else if(SliderIMG.src == 'http://127.0.0.1:5500/Images/3.jpg'){
//         SliderIMG.src = "../Images/1.jpg"
//         console.log("clicked previous");
//     }else if(SliderIMG.src == 'http://127.0.0.1:5500/Images/1.jpg'){
//         SliderIMG.src = "../Images/2.jpg"
//         console.log("clicked previous");
//     }
// };
setInterval(()=>{
    nextImage()
},3000);