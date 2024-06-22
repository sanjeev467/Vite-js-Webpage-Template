// import "./assets/js/navLoader";

// function hamburger() {
//   const ham = document.querySelector(".hamburger");
//   ham.addEventListener("click", () => {
//     ham.classList.toggle("fa-xmark");
//     showNav(ham);
//   });
// }

// function showNav(ham) {
//   const navMenus = document.querySelector(".nav-menus");
//   if (ham.classList.contains("fa-xmark")) {
//     navMenus.classList.add("navbar-toggle");
//   } else {
//     navMenus.classList.remove("navbar-toggle");
//   }
// }

// window.addEventListener("resize", (e) => {
//   console.log(document.querySelector(".nav-menus"));
// });

// hamburger();

import "./assets/js/navLoader";

function hamburger() {
  const ham = document.querySelector(".hamburger");
  ham.addEventListener("click", () => {
    ham.classList.toggle("fa-xmark");
    showNav(ham);
  });
}

function showNav(ham) {
  const navMenus = document.querySelector(".nav-menus");
  if (ham.classList.contains("fa-xmark")) {
    navMenus.classList.add("navbar-toggle");
  } else {
    navMenus.classList.remove("navbar-toggle");
  }
}

window.addEventListener("resize", (e) => {
  const navMenus = document.querySelector(".nav-menus");
  const hamburger = document.querySelector(".hamburger");
  console.log(navMenus);
  // Example operation: Add or remove a class based on window width
  if (window.innerWidth > 992) {
    navMenus.classList.remove("navbar-toggle");

    if (!hamburger.classList.contains("fa-xmark")) {
      console.log("xmark-active");
    }
  }
});

hamburger();
