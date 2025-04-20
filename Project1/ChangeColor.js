let source = document.querySelector("body");
let colors = document.querySelectorAll(".color");

colors.forEach((color) => {
    color.addEventListener("click",(e) => {
        if(e.target.id === "grey"){
            source.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "white"){
            source.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow"){
            source.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "blue"){
            source.style.backgroundColor = e.target.id;
        }
    });
});