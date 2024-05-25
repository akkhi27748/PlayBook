// script.js
let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function showCarouselItem(index) {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

function moveCarousel(direction) {
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  showCarouselItem(currentIndex);
}

// Initialize carousel by showing the first image
showCarouselItem(currentIndex);
