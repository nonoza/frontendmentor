let mobileIcon = document.querySelector(".navbar-toggler");
let closeIcon = document.querySelector('.close-icon-btn');
let mainMenu = document.querySelector(".navbar-collapse");
let overlay = document.querySelector(".overlay");

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
