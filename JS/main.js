document.addEventListener("DOMContentLoaded", function () {
  var menuBar = document.querySelector("#menu-bar");
  var navLinks = document.querySelector(".nav-links");

  navLinks.style.top = "-550px";

  menuBar.onclick = function () {
    if (navLinks.style.top === "-243px") {
      navLinks.style.top = "-550px";
    } else {
      navLinks.style.top = "-243px";
    }
  };
});
