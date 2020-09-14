const image = document.querySelector(".heroImage svg");

const movement1 = () => {
  image.style.width = 0;
};
const movement2 = () => {
  image.style.width = "80%";
};

const parentFun = async () => {
  setInterval(movement1, 3000);
  setInterval(movement2, 3000);
};
