let ratingNumber = document.querySelectorAll('p.rating-number');//Any number selected by clicking any  number..
let submitBtn = document.querySelector('button');// submit button to open the thank you section and show 
let selectedNumber = document.querySelector('span');//selected number to display on the thank you section
let ratingSection = document.querySelectorAll('section.front-container');
let thankSection = document.querySelectorAll('section.back-container');
let selected;

ratingNumber.forEach((number) =>{
    number.addEventListener("click", () =>{
        console.log("number correct");
        selectedNumber.innerHTML = number.innerHTML;
       
    })
})
submitBtn.addEventListener('click',function(){
   if (ratingSection[0].style.display = "block"){
      ratingSection[0].style.display = "none";
      thankSection[0].style.display = "block";
   } else {
    thankSection[0].style.display = "none";
    ratingSection[0].style.display = "block";
   }


})