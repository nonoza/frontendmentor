const form = document.querySelector('form');
const newsLetter = document.querySelector('#newsletter');
const msg = document.querySelector('.msg');
const emailAddress = document.querySelector('#emailAddress');
const closeX = document.querySelector('.popup-close');
const buttons = document.querySelectorAll('.get-started');
const patten = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const popup = document.querySelector('.popup-wrapper');
const errorMsg = document.querySelector('.error-mgs');
const formBtn = document.querySelector('.formBtn');
const newsLetterBtn = document.querySelector('button.form-sumit');

newsLetterBtn.addEventListener('click', e => {
    e.preventDefault();

    const email = newsLetter.value;
    

    if (patten.test(email)){
        msg.textContent = "";
        newsLetter.style.border = "none";
        newsLetter.style.backgroundColor = "#ffffff";
    } else {
        msg.textContent = "Valid email required";
        newsLetter.style.border = "1px solid red";
        newsLetter.style.backgroundColor = "hsl(4deg 100% 67% / 41%)";
       
    }
});

formBtn.addEventListener('click', i => {
    i.preventDefault();
    let emailAdress = form.emailAddress.value;
if(patten.test(emailAdress)) {
        errorMsg.textContent = "";
        emailAddress.style.border = "1px solid var(--pink)";
        emailAddress.style.backgroundColor = "unset";
    } else {
        errorMsg.textContent = "Valid email required";
        emailAddress.style.border = "1px solid red";
        emailAddress.style.backgroundColor = "hsl(4deg 100% 67% / 41%)";
    }
})

buttons.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        popup.style.display = "flex";
    });
});

closeX.addEventListener('click', () => {
    popup.style.display = "none";
});
