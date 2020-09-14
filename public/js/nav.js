const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const coverDiv = document.getElementById("coverDiv");
const crossClass = document.getElementById("crossClass");

hamburger.addEventListener("click", () => {
  if (navLinks !== null && coverDiv !== null) {
    navLinks.style.transform = "translateX(0)";
    coverDiv.style.transform = "translateX(0)";
  }
});

const closeSidebar = () => {
  if (navLinks !== null && coverDiv !== null) {
    navLinks.style.transform = "translateX(450px)";
    coverDiv.style.transform = "translateX(-1000px)";
  }
};

coverDiv.addEventListener("click", () => {
  closeSidebar();
});

crossClass.addEventListener("click", () => {
  closeSidebar();
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav.classList.add("newNavClass");
  } else {
    nav.classList.remove("newNavClass");
  }
});
