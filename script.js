const imgs = document.getElementById("imgs");
const img = document.querySelectorAll("#imgs img");
const left = document.getElementById("left");
const right = document.getElementById("right");

let index = 0;

let interval = setInterval(run, 2000);

function run(){
    index++;
    changeImage();
}
function changeImage(){
    console.log(index)
     // In image container, styling is document. So imgs is used
     if(index > img.length-1){
        index = 0;
     }else if(index < 0){
        index = img.length-1;
     }
        imgs.style.transform = `translateX(${index * -500}px)`;
}
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

left.addEventListener('click',() => {
    index--;
    changeImage();
    resetInterval();
})

right.addEventListener('click',() => {
    index++;
    changeImage();
    resetInterval();
})

