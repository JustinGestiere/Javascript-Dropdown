<<<<<<< HEAD
const dropdowns = Array.from(document.querySelectorAll(".dropdown-btn"));

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", function () {
    const dropdownContainer = this.nextElementSibling;
    dropdownContainer.style.display = (dropdownContainer.style.display === "block") ? "none" : "block";

    dropdowns.filter(otherDropdown => otherDropdown !== dropdown)
             .forEach(otherDropdown => otherDropdown.nextElementSibling.style.display = "none");
  });
});

document.querySelectorAll(".dropdown-container a").forEach(link => {
  link.addEventListener("click", function() {
    this.closest('.dropdown-container').style.display = "none";
  });
});

document.addEventListener("click", function(event) {
  dropdowns.forEach((dropdown) => {
    const dropdownContainer = dropdown.nextElementSibling;
    if (!dropdown.contains(event.target) && !dropdownContainer.contains(event.target)) {
      dropdownContainer.style.display = "none";
    }
  });
});
=======
function snackbar() {
  //  Debut du Code
    const snackbar = document.getElementById("snackbar");
    snackbar.classList.add("animation")

    setTimeout(function() {
      snackbar.classList.remove("animation")
    }, 3000);  
}
>>>>>>> cdc899e (first commit)
