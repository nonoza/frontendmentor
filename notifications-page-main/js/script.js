//let the variables
let markAllRead = document.querySelector('.mark-all-read a');
let dots = document.querySelectorAll('.dot');
let  notify = document.querySelectorAll('.notify-alert');
let notifyNumber = document.querySelector('.notification-number h2');


function checkIfUndefinedAndNull(elOne,elTwo,elThree,elFour) {
    return elOne != null && elOne != undefined && elTwo != null && elTwo != undefined && elThree != null && elThree != undefined && elFour != null && elFour != undefined;
}

if(checkIfUndefinedAndNull(markAllRead,dots,notify,notifyNumber)=== true) {


// add the click to the mark all read menu to clear all dots
  markAllRead.addEventListener('click',()=>{
   
    // delete all the dots
    dots.forEach( dot => {
        dot.style.display = "none";
        notifyNumber.textContent = 0;
    })
    notify.forEach(notification => {
        notification.style.backgroundColor = "#ffffff";
    })
  })
// For each notify is clicked, the background and dots needs to be cleared and the number needs to decrement

notify.forEach((notification, notifyIndex) => {
    notification.addEventListener('click', () => {
        notification.style.backgroundColor = "#ffffff";
        
        let currentNumber = parseInt(notifyNumber.textContent);
        if (!isNaN(currentNumber) && currentNumber > 0) {
            notifyNumber.textContent = currentNumber - 1;
        }
        
        dots[notifyIndex].style.display = "none";
    });
});

}

