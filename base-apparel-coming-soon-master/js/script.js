const form = document.getElementById("form");
const email = document.forms["signup"]["email"].value;
const emailborder = document.querySelector("#email");
let msg = document.querySelector(".error");
form.addEventListener('submit',function(e){
    e.preventDefault();
    if (!email){
        msg.style.display ="block";
        emailborder.style.border = "2px solid hsl(354, 100%, 66%)";
    } else {
        msg.style.display = "none";
    }
    if (email) {
        if (ValidateEmail(email)){
            msg.style.display = "none";
        } else {
            msg.style.display = "block";
         emailborder.style.border = "2px solid hsl(354, 100%, 66%)";
        }
       }
})

function ValidateEmail(emails) {

    const pattens = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";
    return pattens.test(String(emails).toLocaleLowerCase());
 
}