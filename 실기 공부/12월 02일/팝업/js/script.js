window.onload = function () {
  // tab
  const tabBtn = document.querySelectorAll(".tab-menu ul li");
  const tabCont = document.querySelectorAll(".tab-cont div");

  tabCont.forEach((el) => (el.style.display = "none"));
  tabCont[0].style.display = "block";

  tabBtn.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabBtn.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");
      tabCont.forEach((el) => (el.style.display = "none"));
      tabCont[index].style.display = "block";
    });
  });

  // popup
  document.querySelector(".popup-open").addEventListener("click", function () {
    document.querySelector(".popup-view").style.display = "block";
  });
  document.querySelector(".popup-close").addEventListener("click", function () {
    document.querySelector(".popup-view").style.display = "none";
  });
};
