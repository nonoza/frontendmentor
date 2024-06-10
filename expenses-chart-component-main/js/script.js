let chatBtn = document.querySelectorAll(".week");

Array.from(chatBtn).forEach(function (el) {
  el.addEventListener("mouseover", function () {
    let amount = el.querySelector(".amount");
    if (amount) {
      amount.style.display = "block";
    }
  });

  el.addEventListener("mouseout", function () {
    let amount = el.querySelector(".amount");
    if (amount) {
      amount.style.display = "none";
    }
  });
});
