let waitForEl = setInterval(() => {
    let simpleBooking = document.querySelector('.simpleBookmark');
    let intelligentSearch = document.querySelector('.intelligentSearch');
    let shareBook = document.querySelector('.shareBookmark');
    let shareBtn = document.querySelector('#sharingBtn');
    let speedBtn = document.querySelector('#speedBtn');
    let bookmarkBtn = document.querySelector('#bookmarkBtn')
    let mobileIcon = document.querySelector(".navbar-toggler");
    let closeIcon = document.querySelector('.close-icon-btn');
    let mainMenu = document.querySelector(".navbar-collapse");
    let overlay = document.querySelector(".overlay");
    const email = document.querySelector('#email-address');
    const errorMsg = document.querySelectorAll('.error-mgs');
    const contactBtn= document.querySelectorAll('.contact-us');


    if (areElementsDefined(simpleBooking, intelligentSearch, shareBook, shareBtn, speedBtn, bookmarkBtn)) {
        clearInterval(waitForEl);

        mobileIcon.addEventListener("click", () => {
          console.log("clicked");
          // Toggle the overlay
          overlay.classList.toggle("show");
          // Toggle the main menu
          mainMenu.classList.toggle("show");
      });
      
      closeIcon.addEventListener("click", () => {
          console.log("clicked");
          // Remove the styles of overlay
          overlay.classList.remove("show");
          // Remove the styles for showing the menu
          mainMenu.classList.remove("show");
      });
        

        bookmarkBtn.addEventListener('click', f => {
            f.preventDefault();
      
            setActiveTab(4)
            simpleBooking.classList.add('show');
            simpleBooking.classList.remove('hidden');
            intelligentSearch.classList.add('hidden');
            intelligentSearch.classList.remove('show');
            shareBook.classList.add('hidden');
            shareBook.classList.remove('show');
        });

        speedBtn.addEventListener('click', e => {
            e.preventDefault();
            // list[5].classList.add('active');
            // list[4].classList.remove('active')
            // list[]
            setActiveTab(5)
            simpleBooking.classList.add('hidden');
            simpleBooking.classList.remove('show');
            intelligentSearch.classList.add('show');
            intelligentSearch.classList.remove('hidden');
            shareBook.classList.add('hidden');
            shareBook.classList.remove('show');
        });

        shareBtn.addEventListener('click', w => {
            w.preventDefault();
            // list[6].classList.add('active');
            setActiveTab(6)
    
            simpleBooking.classList.add('hidden');
            simpleBooking.classList.remove('show');
            intelligentSearch.classList.add('hidden');
            intelligentSearch.classList.remove('show');
            shareBook.classList.add('show');
            shareBook.classList.remove('hidden');
        });

     
        contactBtn[0].addEventListener('click', e => {
                e.preventDefault();
                console.log('clicked');
            
                // Validate the empty values
                if ( email.value.trim() === "" ) { // Trim any leading or trailing whitespace
                    email.style.border = "2px solid rgb(249, 86, 86)"
                    errorMsg[0].textContent = "Whoops, empty field";
                } else {
                    // Clear any previous error messages
                    errorMsg[0].textContent = "";
                }
            });
      

       
    }

}, 100);

function areElementsDefined(...elements) {
    return elements.every(el => el !== undefined && el !== null);
}

function setActiveTab(index) {
    document.querySelectorAll('.nav-item').forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}





