const form = document.querySelector("#container");


container.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result= document.querySelector(".result");

    

   
    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = "Please enter valid height";
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please enter valid weight";
    }
    else{
       const BMI = (weight/ ((height*height)/10000)).toFixed(2);
       result.innerHTML = `${BMI}`;
    }
});