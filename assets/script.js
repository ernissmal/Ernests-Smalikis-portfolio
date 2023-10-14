// Handle dropdown visibility on hover
const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownButton.addEventListener("mouseenter", () => {
  dropdownContent.style.display = "block";
});

dropdownButton.addEventListener("mouseleave", () => {
  dropdownContent.style.display = "block";
});

const section = document.querySelector('.values');
const boxes = section.querySelectorAll('.box');

function animateBoxes(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const box = entry.target;
      box.style.display = 'block';
      box.style.opacity = 1; // Set opacity to 1 to keep it visible
      observer.unobserve(box);
    }
  });
}

const observer = new IntersectionObserver(animateBoxes, { threshold: 0.2 });

boxes.forEach((box) => {
  observer.observe(box);
});


function animateBoxes() {
  let index = 0;

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

// Function to animate the boxes when they are in the viewport
function animateBoxes() {
  boxes.forEach((box) => {
    if (isInViewport(box)) {
      box.style.opacity = 1; // Set opacity to 1 to keep it visible
    }
  });
}

// Attach a scroll event listener to trigger the animation
window.addEventListener('scroll', animateBoxes);

// Trigger the animation on page load
animateBoxes();
}