const submitBtn = document.querySelector(".cta");
const pattens = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
const email = document.forms["signup"]["email"].value;
const form = document.getElementById("form");
const emailborder = document.querySelector("#email");

form.addEventListener('submit', (e) =>{
    e.preventDefault();
  
  });
