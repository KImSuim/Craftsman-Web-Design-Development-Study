window.onload = function () {
  const navContainer = document.querySelector(".nav > ul"); // 이벤트 감지 영역
  const header = document.getElementById("header"); // 배경이 달린 헤더
  const subMenus = document.querySelectorAll(".submenu"); // 서브메뉴들

  navContainer.addEventListener("mouseover", () => {
    header.classList.add("on");
    subMenus.forEach((sub) => {
      sub.style.maxHeight = "500px"; // 내용만큼만 열림 (넉넉하게 설정)
    });
  });
  navContainer.addEventListener("mouseout", () => {
    header.classList.remove("on");
    subMenus.forEach((sub) => {
      sub.style.maxHeight = "0px";
    });
  });
};
