const registerMainCta = document.querySelector('.huddle-btn');
const popup = document.querySelector('.popup-wrapper');
const lastName = document.querySelector('#firstNname');
const email = document.querySelector('#email-address');
const password  = document.querySelector('#password');
const errorMsg = document.querySelectorAll('.error-mgs');
const submitBtn = document.querySelector('#submit-btn');
const form = document.querySelectorAll('form');
const closeX = document.querySelectorAll('.popup-close');
const loginLink = document.querySelector('.login-link');
const regsterLink = document.querySelector('.register-link');
const loginPopUp = document.querySelector('.popup-login');
const registerPopup = document.querySelector('.popup-register ');

registerMainCta.addEventListener('click',()=>{
    popup.style.display = "flex";
    registerPopup.style.display = "block";
    loginPopUp.style.display = "none";
});


closeX.forEach( closebtn => {
    closebtn.addEventListener('click',()=>{
        popup.style.display = "none";
    })
})


loginLink.addEventListener('click',()=>{
 loginPopUp.style.display = "block";
 registerPopup.style.display = "none";
});

regsterLink.addEventListener('click',()=>{
    loginPopUp.style.display = "none";
    registerPopup.style.display = "block";
   })



form.forEach(form =>{
    form.addEventListener('submit', e => {
        e.preventDefault();
        console.log('clicked');
    
        // Validate the empty values
        if (lastName.value.trim() === "" && email.value.trim() === "" && password.value.trim() === "" ) { // Trim any leading or trailing whitespace
            errorMsg[0].textContent = "Enter your details";
            errorMsg[1].textContent = "Enter your details";
        } else {
            // Clear any previous error messages
            errorMsg[0].textContent = "";
        }
    });
})
AOS.init();
 
