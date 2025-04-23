const calculate = document.querySelector(".btn_submit");
const dob = document.querySelector(".dob");
const display = document.querySelector(".display_age");

function agecalculate(){
    const dob_value = document.querySelector(".dob").value;
    const display = document.querySelector(".display_age");
    const curr_date = new Date();
    const dob_extract = new Date(dob_value);
    dob_date = dob_extract.getDate();
    dob_month = dob_extract.getMonth();
    dob_year = dob_extract.getFullYear();
    curr_date_date = curr_date.getDate();
    curr_date_month = curr_date.getMonth();
    curr_date_year = curr_date.getFullYear();
    let res_year = curr_date_year - dob_year;
    let res_month
    if(curr_date_month >= dob_month){
        res_month = curr_date_month - dob_month;
    }
    else{
        res_month = 12 + (curr_date_month - dob_month);
    }
    let res_date = curr_date_date - dob_date;

    display.innerHTML = ` Your age is ${res_year} Years ${res_month} Months and ${res_date} Days`;
}

calculate.addEventListener('click', agecalculate);