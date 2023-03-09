let chatBtn = document.querySelectorAll(".week");

Array.from(chatBtn).forEach(function (el) {
  el.addEventListener("mouseover", function () {
    let amount = document.querySelectorAll(".amount");
    for (var i = 0; i < amount.length; i++) {
      amount[i].style.display = "block";
    }
  });
});
