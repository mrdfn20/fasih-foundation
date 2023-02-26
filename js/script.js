//make toggle (fitur yg ada jd gk ada (contary))

//toggle class active
//call class navbar from html and declare
const navbarNav = document.querySelector(".navbar-nav");

//hamburger menu on click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click outside sidebar to close sidebar
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
