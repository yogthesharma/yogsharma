const element = document.getElementById("problemsMain");
let temp = false;
let temp1 = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= 380 && temp === false) {
    element.classList.toggle("animationClass");
    temp = true;
  }
});
