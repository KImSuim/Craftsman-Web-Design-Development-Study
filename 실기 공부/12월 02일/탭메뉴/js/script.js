window.onload = function () {
  const tabBtn = document.querySelectorAll(".tab-btn > ul > li");
  const tabCont = document.querySelectorAll(".tab-cont > div");

  tabCont.forEach((el) => (el.style.display = "none")); //모든 콘텐츠를 숨김
  tabCont[0].style.display = "block";

  tabBtn.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabBtn.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      tabCont.forEach((cont) => (cont.style.display = "none")); //모든 콘텐츠를 숨김
      tabCont[index].style.display = "block";
    });
  });
};
