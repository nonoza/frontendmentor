let mobileIcon = document.querySelector(".navbar-toggler");
let closeIcon = document.querySelector('.close-icon-btn');
let mainMenu = document.querySelector(".inner-nav");
let overlay = document.querySelector(".overlay");

mobileIcon.addEventListener("click", () => {
    console.log("clicked");
    // Adding the styles of overlay and hiding the mobile icon.
    // overlay.classList.toggle("show");
    mobileIcon.classList.add("hide");
});

closeIcon.addEventListener("click", () => {
    console.log("clicked");
    // Removing the styles for showing the menu and showing the mobile icon again.
    mainMenu.classList.remove("show");
    mobileIcon.classList.remove("hide");
});


  // AOS.init();