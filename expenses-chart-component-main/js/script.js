let chatBtns = document.querySelectorAll(".week");

if (chatBtns) {
  chatBtns.forEach((chat, index) => {
    if (chat !== undefined) {
      chat.addEventListener("mouseover", function() {
        let amounts = document.querySelectorAll(".amount");
        if (amounts[index]) {
          amounts[index].style.opacity = "1";
          amounts[index].style.visibility = "visible";
        }
      });

      chat.addEventListener("mouseout", function() {
        let amounts = document.querySelectorAll(".amount");
        if (amounts[index]) {
          amounts[index].style.opacity = "0";
          amounts[index].style.visibility = "hidden";
        }
      });
    }
  });
}


// Array.from(chatBtn).forEach(function (el) {
//   el.addEventListener("mouseover", function () {
//     let amount = document.querySelectorAll(".amount");
//     for (var i = 0; i < amount.length; i++) {
//       amount[i].style.display = "block";
//     }
//   });
// });
