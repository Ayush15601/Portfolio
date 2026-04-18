let menuIcons = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
            })
        }
    })
}

menuIcons.onclick = () => {
    menuIcons.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

navLinks.forEach(link => {
    link.onclick = () => {
        menuIcons.classList.remove("bx-x");
        navbar.classList.remove("active");
    }
}
);





// Read all
let btn = document.getElementById("readMoreBtn");
let dots = document.getElementById("dots");
let moreText = document.getElementById("more");

btn.onclick = () => {
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.innerText = "Read More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.innerText = "Read Less";
    }
};





// Dark-ligh theme
let themeToggle = document.querySelector("#theme-toggle");

// load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeToggle.classList.replace("bx-moon","bx-sun");
} else {
    themeToggle.classList.replace("bx-sun","bx-moon");
}






// saved theme
themeToggle.onclick = () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme", "light");
        themeToggle.classList.replace("bx-moon","bx-sun");
    } else {
        localStorage.setItem("theme", "dark");
        themeToggle.classList.replace("bx-sun","bx-moon");
    }
};






// Scroll animations
ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: false
});

// Home
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img', { origin: 'bottom' });

// About
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

// Services
ScrollReveal().reveal('.services-box', { interval: 200 });

// Projects
ScrollReveal().reveal('.projects-box', { interval: 200 });

// Skills
ScrollReveal().reveal('.skill-bars', { origin: 'bottom' });

// Contact
ScrollReveal().reveal('.contact form', { origin: 'bottom' });






// automiticalll fetch projects from github
fetch("https://api.github.com/users/Ayush15601/repos")
.then(res => res.json())
.then(data => {
    const container = document.getElementById("github-projects");

    container.innerHTML = ""; // clear existing static items

    data.slice(0, 6).forEach(repo => {
        const projectBox = document.createElement("div");
        projectBox.classList.add("projects-box");

        projectBox.innerHTML = `
            <img src="assets/image.jpg">
            <div class="projects-info">
                <h2>${repo.name}</h2>
                <p>${repo.description || "No description available"}</p>
                <a href="${repo.html_url}" target="_blank">
                    <i class="bx bx-link"></i>
                </a>
            </div>
        `;

        container.appendChild(projectBox);
    });
})

.catch(err => console.error(err));






// Form valadition
const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // email pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

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
});