const submitBtn = document.querySelector(".cta");
const pattens = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
const email = document.forms["signup"]["email"].value;
const form = document.getElementById("form");
const emailborder = document.querySelector("#email");
const errorMessage = document.querySelector('.error');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
  
  });

  submitBtn.addEventListener('click',(w) => {
    if(email == null || email == undefined) {
    errorMessage.innerHTML = "Please provide an email";
    emailborder.style.border = "1px solid red";
    }
    if (email != pattens) {
      errorMessage.innerHTML = "Please provide a valid email address";
    }
  })
