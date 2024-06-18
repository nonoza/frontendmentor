const submitBtn = document.querySelector(".cta");
const form = document.getElementById("form");
const emailField = document.forms["signup"]["email"];
const emailborder = document.getElementById("email");
const errorMessage = document.querySelector('.error');
const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
});

submitBtn.addEventListener('click', () => {
  const email = emailField.value;

  if (email == null || email === "") {
    errorMessage.innerHTML = "Whoops! It looks like you forgot to add your email.";
    emailborder.style.border = "1px solid red";
  } else if (!pattern.test(email)) {
    errorMessage.innerHTML = "Please provide a valid email address.";
    emailborder.style.border = "1px solid red";
  } else {
    errorMessage.innerHTML = "";
    emailborder.style.border = "1px solid green";
    form.submit();
  }
});
