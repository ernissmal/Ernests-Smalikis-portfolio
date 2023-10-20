// Handle dropdown visibility on hover
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("mouseenter", () => {
  dropdownContent.style.display = "block";
});

dropdownButton.addEventListener("mouseleave", () => {
  dropdownContent.style.display = "block";
});
