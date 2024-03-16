
let overlay = document.querySelector('.overlay');
let closeMenu = document.querySelector('.close-icon-btn');
let dropDownMenu = document.querySelectorAll('.dropdown');
let dropDownIcon = document.querySelectorAll('.dropdown-icon');
let mobileIcon = document.querySelector('.navbar-toggler');
let mainMenu = document.querySelector('.main-menu');
let login = document.querySelector('.login');


//Dropdown icon switch
dropDownMenu.forEach((menu, index) => {
    menu.addEventListener('click', () => {
        console.log('clicked droped');

        // // Toggle the dropdown icon 
        if (dropDownIcon[index].src.includes("icon-arrow-down.svg")) {
            dropDownIcon[index].src = "./images/icon-arrow-up.svg";
        } else {
            dropDownIcon[index].src = "./images/icon-arrow-down.svg";
        }
        
    });
});

//Overlay for mobile bn
mobileIcon.addEventListener('click',()=>{
    console.log('clicked');
    overlay.classList.toggle('show'); 
})

closeMenu.addEventListener('click',()=> {
    console.log('clicked');
    overlay.classList.remove('show');
    mainMenu.classList.remove('show');
})

