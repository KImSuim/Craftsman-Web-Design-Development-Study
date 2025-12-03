window.onload = function () {
  let currentIndex = 0;
  const sliderWrap = document.querySelector(".sliderWrap");
  const slider = document.querySelectorAll(".slider");
  const sliderClone = sliderWrap.firstElementChild.cloneNode(true);
  sliderWrap.appendChild(sliderClone);

  // [핵심] 높이를 직접 재서 변수에 저장 (300px이든 800px이든 상관없음)
  const sliderHeight = document.querySelector("#slider").offsetHeight;

  setInterval(() => {
    currentIndex++;
    sliderWrap.style.transition = "all 0.6s";
    // [핵심] 구해온 높이만큼 이동 (속성은 marginTop이든 transform이든 상관없음)
    sliderWrap.style.marginTop = -currentIndex * sliderHeight + "px";

    if (currentIndex == slider.length) {
      setTimeout(() => {
        sliderWrap.style.transition = "0s";
        sliderWrap.style.marginTop = "0px";
        currentIndex = 0;
      }, 700);
    }
  }, 3000);
};
