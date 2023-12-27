var acc = document.querySelectorAll(".accordion");
var plusIcons = document.getElementsByClassName('plus');
var minusIcons = document.getElementsByClassName('minus');

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }

        // Toggle visibility for the corresponding plus and minus icons
        plusIcons[i].style.display = (panel.style.display === "block") ? "none" : "block";
        minusIcons[i].style.display = (panel.style.display === "block") ? "block" : "none";

        // Hide all other panels and show their corresponding plus icons
        for (let x = 0; x < acc.length; x++) {
            if (x !== i) {
                acc[x].classList.remove("active");
                acc[x].nextElementSibling.style.display = "none";
                plusIcons[x].style.display = "block";
                minusIcons[x].style.display = "none";
            }
        }
    });
}
