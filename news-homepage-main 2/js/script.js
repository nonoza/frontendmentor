let mobileIcon = document.querySelector(".navbar-toggler");
let closeIcon = document.querySelector('.close-icon-btn');
let mainMenu = document.querySelector(".inner-nav");
let overlay = document.querySelector(".overlay");
mobileIcon.addEventListener("click", () => {
    console.log("clicked");
    // adding the styles of overlay.
    overlay.classList.toggle("show");
  });

  closeIcon.addEventListener("click", () => {
    console.log("clicked");
    // remove the styles of overlay
    overlay.classList.remove("show");
    // remove the styles for show and hide a menu.
    mainMenu.classList.remove("show");
  });

  AOS.init();