const element2 = document.getElementById("blogMain");
let temp3 = false;

window.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY >= 1087 && temp3 === false) {
    element2.classList.toggle("animationClassBlog");
    temp3 = true;
  }
});
