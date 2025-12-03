// window.onload = function () {
//   // 1. 변하지 않으니 const 사용
//   const navList = document.querySelectorAll(".nav > ul > li");

//   // 2. 한 번의 루프에서 모든 작업 처리
//   navList.forEach(function (navItem) {
//     // (1) 초기 스타일 설정 (CSS에서 하는 게 좋지만 JS로 한다면 여기서)
//     const sub = navItem.querySelector("ul");
//     sub.style.display = "block";
//     sub.style.height = "0";
//     sub.style.overflow = "hidden";
//     sub.style.transition = "height 400ms";

//     // (2) 마우스 오버 이벤트
//     navItem.addEventListener("mouseover", function () {
//       this.querySelector(".submenu").style.height = "155px";
//     });

//     // (3) 마우스 아웃 이벤트
//     navItem.addEventListener("mouseout", function () {
//       this.querySelector(".submenu").style.height = "0px";
//     });
//   });
// };

window.onload = function () {
  const navItems = document.querySelectorAll(".nav > ul > li");

  navItems.forEach((li) => {
    // 마우스 올렸을 때
    li.addEventListener("mouseover", function () {
      // CSS에서 이미 transition이 있으므로 높이만 주면 됨
      const sub = this.querySelector(".submenu");
      if (sub) sub.style.maxHeight = "500px";
    });

    // 마우스 뗐을 때
    li.addEventListener("mouseout", function () {
      const sub = this.querySelector(".submenu");
      if (sub) sub.style.maxHeight = "0px";
    });
  });
};
