//get all the elements
let toggleButton = document.querySelector("#switch");
let monthlyPrice = document.querySelectorAll('.monthly');
let annuallyPrice = document.querySelectorAll(".annually");

//add the click event to the checkbox
toggleButton.addEventListener("click", () => {
    console.log("clicked");
    if (toggleButton.checked === true) {
        monthlyPrice[0].style.display = "block";
        monthlyPrice[1].style.display = "block";
        monthlyPrice[2].style.display = "block";
        annuallyPrice[0].style.display = "none";
        annuallyPrice[1].style.display = "none";
        annuallyPrice[2].style.display = "none";
    } else {
        monthlyPrice[0].style.display = "none";
        monthlyPrice[1].style.display = "none";
        monthlyPrice[2].style.display = "none";
        annuallyPrice[0].style.display = "block";
        annuallyPrice[1].style.display = "block";
        annuallyPrice[2].style.display = "block";
    }
});

AOS.init();

