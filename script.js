let menuIcons = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = function () {
    let top = window.scrollY;

    sections.forEach(function (sec) {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){

            navLinks.forEach( function (link) {link.classList.remove("active")} );

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if(activeLink){
                activeLink.classList.add("active");
            }
        }
    })
}

if(menuIcons && navbar){
    menuIcons.onclick = () => {
        menuIcons.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    }
}

navLinks.forEach(link => {
    link.onclick = () => {
        if(menuIcons && navbar){
            menuIcons.classList.remove("bx-x");
            navbar.classList.remove("active");
        }
    }
}
);






// Read all
let btn = document.getElementById("readMoreBtn");
let dots = document.getElementById("dots");
let moreText = document.getElementById("more");

if(btn && dots && moreText){
    let isExpanded = false;

    btn.onclick = () => {
        isExpanded = !isExpanded;

        dots.style.display = isExpanded ? "none" : "inline";
        moreText.style.display = isExpanded ? "inline" : "none";
        btn.innerText = isExpanded ? "Read Less" : "Read More";
    };
}
    





// Dark-ligh theme
let themeToggle = document.querySelector("#theme-toggle");

// load saved theme
if(themeToggle){
    if(localStorage.getItem("theme") === "light"){
        document.body.classList.add("light-mode");
        themeToggle.classList.remove("bx-moon");
        themeToggle.classList.add("bx-sun");
    } else {
        themeToggle.classList.remove("bx-sun");
        themeToggle.classList.add("bx-moon");
    }

    // saved theme
    themeToggle.onclick = () => {
        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){
            localStorage.setItem("theme", "light");
            themeToggle.classList.remove("bx-moon");
            themeToggle.classList.add("bx-sun");
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.classList.remove("bx-sun");
            themeToggle.classList.add("bx-moon");
        }
    };
}






// Form valadition
const form = document.getElementById("contact-form");

if(form){
    form.addEventListener("submit", function(e) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // empty check
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill all required fields");
            e.preventDefault();
            return;
        }

        // email format check
        if (!email.match(emailPattern)) {
            alert("Enter a valid email address");
            e.preventDefault();
            return;
        }

        alert("Message sent successfully!");
    });
}