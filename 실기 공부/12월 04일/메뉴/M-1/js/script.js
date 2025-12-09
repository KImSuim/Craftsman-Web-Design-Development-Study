window.onload = function () {
  const thisNav = document.querySelectorAll(".nav > ul > li");

  thisNav.forEach((el) => {
    el.addEventListener("mouseover", function () {
      this.querySelector(".submenu").style.maxHeight = "500px";
    });

    el.addEventListener("mouseout", function () {
      this.querySelector(".submenu").style.maxHeight = "0px";
    });
  });
};
