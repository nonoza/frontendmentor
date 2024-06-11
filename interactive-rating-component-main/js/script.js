// Selecting elements from the HTML using document.querySelectorAll and document.querySelector.
let ratingNumber = document.querySelectorAll('p.rating-number');
let submitBtn = document.querySelector('button');
let selectedNumber = document.querySelector('span');
let ratingSection = document.querySelectorAll('section.front-container');
let thankSection = document.querySelectorAll('section.back-container');

// // Adding click event listeners to each rating number element.
// ratingNumber.forEach((number) => {
//     number.addEventListener("click", () => {
//         console.log("number correct"); // Logging to the console when a rating number is clicked.
//         selectedNumber.innerHTML = number.innerHTML; // Setting the selected number in the span.
//     });
// });

// // Adding a click event listener to the submit button.
// submitBtn.addEventListener('click', function () {
//     // Checking the display property to toggle between the rating and thank you sections.
//     if (ratingSection[0].style.display === "block") {
//         ratingSection[0].style.display = "none";
//         thankSection[0].style.display = "block";
//     } else {
//         thankSection[0].style.display = "none";
//         ratingSection[0].style.display = "block";
//     }
// });


ratingNumber.forEach((number) =>{
    number.addEventListener("click", () =>{
        console.log("number correct");
        selectedNumber.innerHTML = number.innerHTML;
        ratingNumber.forEach((num) => num.classList.remove('active')); // Remove active class from all
        number.classList.add('active'); // Add active class to the clicked one
        submitBtn.addEventListener('click',function(){
            if (ratingSection[0].style.display = "block"){
                ratingSection[0].style.display = "none";
                thankSection[0].style.display = "block";
            } else {
                 thankSection[0].style.display = "none";
                 ratingSection[0].style.display = "block";
            }
        })
    })
})
AOS.init();
