let string = " ";
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML === "="){
            result = eval(string);
            document.querySelector("input").value = result;
        }
        else if(e.target.innerHTML === "C"){
            string  = " ";
            document.querySelector("input").value = null;
        }
        else if(e.target.innerHTML === "Backspace"){
            string = string.slice(0,-1);
            console.log(string);
            document.querySelector("input").value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;

        }
    
})
})