window.onload = function () {
  const allNav = document.querySelector(".nav");
  const submenu = document.querySelectorall(".submenu");

  allNav.addEventListener("mouseover", function () {
    submenu.forEach((el) => {
      el.style.maxHeigt = "500px";
    });
  });
  allNav.addEventListener("mouseout", function () {
    submenu.forEach((el) => {
      el.style.maxHeigt = "0px";
    });
  });
};
