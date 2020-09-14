const element1 = document.getElementById("portfolioMain");
let temp2 = false;

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY >= 1087 && temp2 === false) {
    element1.classList.toggle("animationClassPortfolio");
    temp2 = true;
  }
});
