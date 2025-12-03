window.onload = function () {
  const navList = document.querySelectorAll(".nav > ul > li");

  navList.forEach(function (navItem) {
    navItem.addEventListener("mouseover", function () {
      this.querySelector(".submenu").style.height = "155px";
    });
    navItem.addEventListener("mouseout", function () {
      this.querySelector(".submenu").style.height = "0px";
    });
  });
};
