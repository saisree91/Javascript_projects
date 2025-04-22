const random_number = parseInt((Math.random() * 10) + 1);
console.log(random_number)
const submit = document.querySelector(".sub");
let pre_guess_array = [];
let pre_guess = document.querySelector(".pre_guess");
pre_guess.innerHTML = JSON.stringify(pre_guess_array);
const guess_rem = document.querySelector(".guess_rem");
let loop = guess_rem.innerHTML;
let n=1;

submit.addEventListener("click", () => {
    let pre_guess = document.querySelector(".pre_guess");
    let number_guess = parseInt(document.querySelector(".number_guessed").value);
    let array = [];
    array = number_guess;
    console.log(array)
    const display_result = document.querySelector(".display_result");
    if (loop != 0)
    {
        if (!isNaN(number_guess)) 
        {
            if (number_guess === random_number) 
            {
                display_result.innerHTML = `Guessed Correctly at attempt ${n}`;
                pre_guess.innerHTML = "0";
                guess_rem.innerHTML = "0";
            }
            else 
            {
                display_result.innerHTML = "Incorrect guess. Try again";
                pre_guess_array = pre_guess_array.concat(array);
                pre_guess.innerHTML = JSON.stringify(pre_guess_array);
                guess_rem.innerHTML -= 1;
                loop = guess_rem.innerHTML;
                n += 1;


            }
        }
        else 
        {
            display_result.innerHTML = "Enter a valid number";
        }

        

    }
    else {
        display_result.innerHTML = "Attempts Completed";
    }
});
