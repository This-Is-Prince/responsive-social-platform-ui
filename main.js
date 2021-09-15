import "normalize.css";
import "./style.css";

const closeBtn = document.querySelector(".menu__tab-close__btn");
const openBtn = document.querySelector(".menu__bar-open__btn");
const menuBar = document.querySelector(".menu__bar");
const menuTab = document.querySelector(".menu__tab");

const appLeft = document.querySelector(".app__left");
const appMiddle = document.querySelector(".app__middle");
const appRight = document.querySelector(".app__right");
const accountBtn = document.querySelector(".account-menu-open-btn");

window.addEventListener("click", (e) => {
  if (appRight.getBoundingClientRect().x < window.innerWidth) {
    if (e.x < appRight.getBoundingClientRect().x) {
      appRight.classList.remove("show-app__right");
      appLeft.classList.remove("opacity");
      appMiddle.classList.remove("opacity");
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 425) {
    menuBar.style.display = "flex";
    menuTab.style.display = "none";
    appLeft.style.width = "45px";
  } else if (window.innerWidth < 927) {
    menuBar.style.display = "flex";
    menuTab.style.display = "none";
    appLeft.style.width = "60px";
  } else if (window.innerWidth > 1170) {
    appRight.classList.remove("show-app__right");
    appLeft.classList.remove("opacity");
    appMiddle.classList.remove("opacity");
  }
});

accountBtn.addEventListener("click", () => {
  appRight.classList.add("show-app__right");
  appLeft.classList.add("opacity");
  appMiddle.classList.add("opacity");
});
openBtn.addEventListener("click", () => {
  menuBar.style.display = "none";
  menuTab.style.display = "block";
  appLeft.style.width = "275px";
});
closeBtn.addEventListener("click", () => {
  menuBar.style.display = "flex";
  menuTab.style.display = "none";
  if (window.innerWidth < 425) {
    appLeft.style.width = "45px";
  } else {
    appLeft.style.width = "60px";
  }
});
