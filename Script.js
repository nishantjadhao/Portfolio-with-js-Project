/*  Mobile Menu Toggle */
const menuIcon = document.getElementById("Menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

/* Active Navbar on Scroll*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("Active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("Active");
    }
  });
});

/* Image Hover Effect */
const homeImg = document.querySelector(".home-Img img");

homeImg.addEventListener("mouseenter", () => {
  homeImg.style.transform = "scale(1.1)";
});

homeImg.addEventListener("mouseleave", () => {
  homeImg.style.transform = "scale(1)";
});

/* Skill Box Click Interaction */
const skillBoxes = document.querySelectorAll(".skill-box");

skillBoxes.forEach(box => {
  box.addEventListener("click", () => {
    alert("Skill Selected!");
  });
});

/* Project Box Animation*/
const projectBoxes = document.querySelectorAll(".project .skill-box");

projectBoxes.forEach(box => {
  box.addEventListener("mouseenter", () => {
    box.style.transform = "scale(1.05)";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transform = "scale(1)";
  });
});

/*  Contact Form Validation*/
const form = document.querySelector(".contact from");
const inputs = document.querySelectorAll(".contact input, .contact textarea");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.borderColor = "red";
      isValid = false;
    } else {
      input.style.borderColor = "#00ffee";
    }
  });

  if (!isValid) {
    alert("Please fill all fields correctly");
    return;
  }

  alert("Message sent successfully!");
  form.reset();
});

/* Smooth Scroll*/
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");
  });
});

/* Scroll Reveal Animation */
window.addEventListener("scroll", () => {
  const revealElements = document.querySelectorAll(".timeline-content, .skill-box");

  revealElements.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

/* Initial Animation State */
document.querySelectorAll(".timeline-content, .skill-box").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "0.6s ease-in-out";
});

console.log("Portfolio JavaScript Loaded Successfully ");
