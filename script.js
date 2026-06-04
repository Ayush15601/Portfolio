let button = document.querySelector(".about-button");
let text = document.querySelector(".about-span");
let dots = document.querySelector(".about-dots");

button.addEventListener("click", () => {
  if (text.style.display === "") {
    text.style.display = "inline";
    dots.style.display = "none";
    button.value = "Read Less";
  } else {
    text.style.display = "";
    dots.style.display = "inline";
    button.value = "Read More";
  }
});

let form_button = document.querySelector(".contact-form");

form_button.addEventListener("submit", (e) => {

  // trim cleans the input by removing spaces, allow uers cant bypass it by adding spaces.

  // put these two variable inside submit event listiner otherwise it reads only once.
  let email = document.querySelector(".email").value.trim();
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email.match(emailPattern)) {
    alert("Enter a valid email");

    // used to prevent browser refreshing when submitting form
    e.preventDefault();
    return;
  }

  alert("Message sent successfully!");
});

// Dark-ligh theme
let themeToggle = document.querySelector("#theme-toggle");

// for saving
if (themeToggle) {
  
  // its a good practise write it
  let item = localStorage.getItem("theme");

  if (item === "light") {
    document.body.classList.add("light-mode");
    themeToggle.classList.remove("bx-moon");
    themeToggle.classList.add("bx-sun");
  } else {
    document.body.classList.remove("light-mode");
    themeToggle.classList.remove("bx-sun");
    themeToggle.classList.add("bx-moon");
  }

  // main
  themeToggle.addEventListener("click", () => {
    let islight = document.body.classList.toggle("light-mode"); // toggle means: “Switch between two states.” if class exists → remove it if class does not exist → add it

    if (islight) {
      localStorage.setItem("theme", "light"); // It stores data in the browser. Here: "theme" -> key  "light" -> value
      themeToggle.classList.remove("bx-moon");
      themeToggle.classList.add("bx-sun");
    } else {
      localStorage.setItem("theme", "dark");
      themeToggle.classList.remove("bx-sun");
      themeToggle.classList.add("bx-moon");
    }
  });
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

addEventListener("scroll", () => {
  let scroll = window.scrollY;

  sections.forEach(function (sec) {
    // offsetTop: distance (in pixels) from the top edge of the element to the top edge of its parent.
    let top = sec.offsetTop - 125;

    // offsrtHeight: total height of the element, including its content, padding, and borders, not margin
    let height = sec.offsetHeight;
    let bottom = top + height;

    // getAttribute("id"): method used to return the unique ID of an HTML element as a string. No id return null
    let id = sec.getAttribute("id");

    if (scroll >= top && scroll < bottom) {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });

      // difference between using *= (contains) and = (exact match) for these links
      let activeLink = document.querySelector(`header nav a[href *= "${id}"]`);
      activeLink.classList.add("active");
    }
  });
});

let menuIcons = document.querySelector("#menu-icon");
let navbar = document.querySelector(".header-items");

menuIcons.addEventListener("click", () => {
  menuIcons.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcons.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});