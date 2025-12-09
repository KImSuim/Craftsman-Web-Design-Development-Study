window.onload = function () {
  // tab
  const tabBtn = document.querySelectorAll(".tab-menu > ul > li");
  const tabCont = document.querySelectorAll(".tab-contents > ul > li");

  tabCont.forEach((el) => (el.style.display = "none"));
  tabCont[0].style.display = "block";

  tabBtn.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabBtn.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");

      tabCont.forEach((el) => {
        el.style.display = "none";
      });
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
  // slider
  let currentIndex = 0; //현재 이미지
  const slider = document.querySelectorAll(".slider"); //모든 이미지를 변수에 저장
  slider.forEach((img) => (img.style.opacity = "0")); //모든 이미지를 투명하게
  slider[0].style.opacity = "1"; //첫번째 이미지만 보이게

  setInterval(() => {
    //3초에 한번씩 실행
    let nextIndex = (currentIndex + 1) % slider.length; // 1 2 0 1 2 무한반복

    slider[currentIndex].style.opacity = "0"; //첫번째 이미지 사라짐
    slider[nextIndex].style.opacity = "1"; //두번째 이미지 나타남
    slider.forEach((img) => (img.style.transition = "all 1s")); //이미지 애니메이션 추가

    currentIndex = nextIndex; //두번째 인덱스 값을 현재 인덱스 값에 저장
  }, 3000);

  // menu
  let navList = document.querySelectorAll(".nav > ul > li");

  navList.forEach(function (navItem) {
    navItem.addEventListener("mouseover", function () {
      this.querySelector(".submenu").style.height = "200px";
    });
  });
  navList.forEach(function (navItem) {
    navItem.addEventListener("mouseout", function () {
      this.querySelector(".submenu").style.height = "0px";
    });
  });
};
