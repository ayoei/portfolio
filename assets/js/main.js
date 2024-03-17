//=========navbar sticky on scroll===============//
let navbar = document.getElementById("header");
let scrollTopBtn = document.querySelector(".scroll_top_btn");
let mobileMenuToggle = document.getElementById("mobile_menu_toggle");
// console.log(getComputedStyle(mobileMenuToggle)["display"]);

window.onscroll = function () {
  //sticky desktop navbar toggle
  if (
    window.pageYOffset > 0 &&
    getComputedStyle(mobileMenuToggle)["display"] == "none"
  ) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  //mobile navbar
  if (getComputedStyle(mobileMenuToggle)["display"] == "block") {
    if (window.pageYOffset > 0) {
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("shadow");
    }
  }

  // When the user scrolls down 20px from the top of the document, show the button
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }

  //change menu item on scroll
  let sections = document.getElementsByTagName("section");
  let menuItems = [...document.querySelectorAll(".menu_item")];
  menuItems.pop();
  [...sections].forEach((section) => {
    let sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      menuItems.forEach((item) => {
        if (
          section.id
            .toLowerCase()
            .includes(item.querySelector("a").textContent.toLowerCase())
        ) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }
  });
};

//=========skills level progress bar===============//
let levelLine = document.querySelectorAll(".level_line");
[...levelLine].forEach((elt) => {
  level = elt.parentElement.children[0].children[1].textContent;
  elt.querySelector(".progress").style.left = `calc(-100% + ${level})`;
});

//==================swiper js===============================//
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// When the user clicks on the button, scroll to the top of the document
scrollTopBtn.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//==================scroll down to about section===============================//

let scrollDownBtn = document.querySelector(".scroll_down_container");
scrollDownBtn.addEventListener("click", (e) => {
  document.getElementById("about").scrollIntoView();
});

//==================scroll down on menu item click===============================//
let sections = document.getElementsByTagName("section");
let menuItems = [...document.querySelectorAll(".menu_item_btn")];
menuItems.pop();

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    [...sections].forEach((section) => {
      if (
        section.id
          .toLowerCase()
          .includes(e.currentTarget.textContent.toLowerCase())
      ) {
        document.getElementById(`${section.id}`).scrollIntoView();
      }
    });
  });
});

//==================dark mode toggle===============================//
let ThemeToggleBtn = document.getElementById("theme_toggle_button");
let body = document.getElementsByTagName("body")[0];

ThemeToggleBtn.addEventListener("click", (e) => {
  if (body.classList.contains("dark_theme")) {
    body.classList.remove("dark_theme");
    e.currentTarget.classList.replace("uil-sun", "uil-moon");
  } else {
    body.classList.add("dark_theme");
    e.currentTarget.classList.replace("uil-moon", "uil-sun");
  }
});

//=====================mobile menu toggle=========================//
let menu = document.querySelector(".menu");

mobileMenuToggle.addEventListener("click", (e) => {
  if (getComputedStyle(menu)["display"] == "none") {
    menu.style.display = "Grid";
    e.currentTarget.classList.replace("uil-bars", "uil-multiply");
  } else {
    menu.style.display = "none";
    e.currentTarget.classList.replace("uil-multiply", "uil-bars");
  }
});

//=====================contact form submit=========================//

document.getElementById("form_submit_btn").onclick = (e) => {
  document.getElementById("contact_form").submit();
};
