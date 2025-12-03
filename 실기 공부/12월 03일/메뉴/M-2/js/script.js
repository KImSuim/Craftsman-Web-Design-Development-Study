window.onload = function () {
  // nav 영역 전체를 잡습니다.
  const navContainer = document.querySelector(".nav");
  const subMenus = document.querySelectorAll(".submenu");

  // 마우스 올리면: 모든 서브메뉴 펼치기 (넉넉하게 500px)
  navContainer.addEventListener("mouseover", function () {
    subMenus.forEach((sub) => {
      sub.style.maxHeight = "500px";
    });
  });

  // 마우스 떼면: 모든 서브메뉴 닫기
  navContainer.addEventListener("mouseout", function () {
    subMenus.forEach((sub) => {
      sub.style.maxHeight = "0px";
    });
  });
};
