// navbar fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if(window.pageYOffset > fixedNav){
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.remove('flex');
  }else{
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active"); //toggle berfungsi bisa add bisa remove
  navMenu.classList.toggle("hidden"); //toggle berfungsi bisa add bisa remove
});

// click out of humberger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000, // Change to your preferred interval
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      // Add more breakpoints as needed
    },
  });
});

//accordion
const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", (event) => {
    accordionHeader.classList.toggle("active");
    const accordionBody = accordionHeader.nextElementSibling;
    if (accordionHeader.classList.contains("active")) {
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      accordionBody.style.maxHeight = 0;
    }
  });
});

// Mendapatkan elemen navbar
var navbar = document.getElementById("nav-menu");
var logos = document.getElementById("logo");
var hamburgers = document.getElementById("hamburger");

// Menambahkan event listener untuk scroll
window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
    logos.classList.add("scrolled");
    hamburgers.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
    logos.classList.remove("scrolled");
    hamburgers.classList.remove("scrolled");
  }
});
