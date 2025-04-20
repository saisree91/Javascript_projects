

let randomColor = () => {
    let string = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++)
    {
         color += string[Math.floor(Math.random() * 16)];
        
    }
    return color;
}

console.log(randomColor());
let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let body = document.querySelector("body");

let change;

start.addEventListener('click', () => {
    change = setInterval(() => {
        body.style.background = randomColor();
    },2000);
})

stop.addEventListener('click', () => {
    clearInterval(change);
})
