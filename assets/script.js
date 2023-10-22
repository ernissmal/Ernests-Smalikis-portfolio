// Handle dropdown visibility on hover
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("mouseenter", () => {
  dropdownContent.style.display = "block";
});

dropdownButton.addEventListener("mouseleave", () => {
  dropdownContent.style.display = "block";
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
