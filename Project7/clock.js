const display = document.querySelector(".display_time");

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(() => {
    let date = new Date();
    console.log(date.toLocaleTimeString());

    display.innerHTML = date.toLocaleTimeString();
}, 1000);