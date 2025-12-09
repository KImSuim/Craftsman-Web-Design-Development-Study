window.onload = function () {
  const allNav = document.querySelector(".nav");
  const header = document.getElementById("header");
  const submenu = document.querySelectorAll(".submenu");

  allNav.addEventListener("mouseover", () => {
    header.classList.add("on");
    submenu.forEach((el) => {
      el.style.maxHeight = "500px";
    });
  });
  allNav.addEventListener("mouseout", () => {
    header.classList.remove("on");
    submenu.forEach((el) => {
      el.style.maxHeight = "0px";
    });
  });
};
