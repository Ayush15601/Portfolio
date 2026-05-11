let button = document.querySelector(".about-button");
let text = document.querySelector(".about-span");
let dots = document.querySelector(".about-dots");

button.addEventListener("click", () => {

    if(text.style.display === "none"){

        text.style.display = "inline";
        dots.style.display = "none";
        button.value = "Read Less";
    }else{

        text.style.display = "";
        dots.style.display = "inline";
        button.value = "Read More";        
    }
})





let form_button = document.querySelector(".contact-form");

form_button.addEventListener("submit", (e) => {
    
    // trim cleans the input by removing spaces, allow uers cant bypass it by adding spaces.
    // otherwise it reads only once.
    let email = document.querySelector(".email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email.match(emailPattern)){
        
        alert("Enter a valid email");
        
        // used to prevent browser refreshing when submitting form
        e.preventDefault();
        return;
    }

    alert("Message sent successfully!");
})






// Dark-ligh theme
let themeToggle = document.querySelector("#theme-toggle");

// for saving
if(themeToggle){
    if(localStorage.getItem("theme") === "light"){
        document.body.classList.add("light-mode");
        themeToggle.classList.remove("bx-moon");
        themeToggle.classList.add("bx-sun");
    } else {
        themeToggle.classList.remove("bx-sun");
        themeToggle.classList.add("bx-moon");
    }

    // main
    themeToggle.addEventListener( "click", () => {
        document.body.classList.toggle("light-mode");               // toggle means: “Switch between two states.” if class exists → remove it if class does not exist → add it

        if(document.body.classList.contains("light-mode")){

            localStorage.setItem("theme", "light");                 // It stores data in the browser. Here: "theme" -> key  "light" -> value 
            themeToggle.classList.remove("bx-moon");
            themeToggle.classList.add("bx-sun");
        } else {

            localStorage.setItem("theme", "dark");
            themeToggle.classList.remove("bx-sun");
            themeToggle.classList.add("bx-moon");
        }
    });
}






let menuIcons = document.querySelector("#menu-icon");
let navbar = document.querySelector(".header-items");

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