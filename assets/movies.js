// Header Shadow on Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 0){
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});

// Home Swiper
var homeSwiper = new Swiper(".home", {
  spaceBetween: 4,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Coming Swiper
var comingSwiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  breakpoints: {
    568: { slidesPerView: 2 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 6 },
    1400: { slidesPerView: 8 },
    1600: { slidesPerView: 10 },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Mobile Menu Toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
