window.onload = function () {
  const navList = document.querySelectorAll(".nav > ul > li");

  navList.forEach((navItem) => {
    navItem.addEventListener("mouseover", function () {
      this.querySelector(".submenu").style.maxHeight = "500px";
    });

    navItem.addEventListener("mouseout", function () {
      this.querySelector(".submenu").style.maxHeight = "0px";
    });
  });
};
