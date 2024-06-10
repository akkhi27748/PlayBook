// script.js

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const paginationContainer = document.querySelector(".carousel-pagination");

// Create pagination dots
items.forEach((item, index) => {
  const dot = document.createElement("button");
  dot.addEventListener("click", () => moveToIndex(index));
  paginationContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".carousel-pagination button");

function updateCarousel(index) {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function moveCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = items.length - 1;
  } else if (currentIndex >= items.length) {
    currentIndex = 0;
  }
  updateCarousel(currentIndex);
}

function moveToIndex(index) {
  currentIndex = index;
  updateCarousel(currentIndex);
}

function moveToFirst() {
  currentIndex = 0;
  updateCarousel(currentIndex);
}

// Initialize the carousel with the first item active
updateCarousel(currentIndex);

// // Handle form submission
// document
//   .getElementById("feedbackForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const formData = new FormData(this);
//     const data = {
//       name: formData.get("name"),
//       email: formData.get("email"),
//       contact: formData.get("contact"),
//       feedback: formData.get("feedback"),
//     };

//     fetch("https://your-server-endpoint.com/submit-feedback", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((response) => response.json())
//       .then((result) => {
//         console.log("Success:", result);
//         alert(`Thank you for your feedback, ${data.name}!`);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });

//     this.reset();
//   });

// Handle form submission
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    console.log("Name:", formData.get("name"));
    console.log("Email:", formData.get("email"));
    console.log("Contact:", formData.get("contact"));
    console.log("Feedback:", formData.get("feedback"));
    alert("Thank you for your feedback!");
    this.reset();
  });
