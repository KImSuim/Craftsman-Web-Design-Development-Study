window.onload = function () {
  let thisIndex = 0;
  const sliderWrap = document.querySelector(".sliderWrap");
  const slider = document.querySelectorAll(".slider");

  const firstImg = sliderWrap.firstElementChild.cloneNode(true);
  sliderWrap.appendChild(firstImg);

  const sliderHeight = document.querySelector("#slider").offsetHeight;

  setInterval(() => {
    thisIndex++;
    sliderWrap.style.transition = "all 0.6s";
    sliderWrap.style.marginTop = -thisIndex * sliderHeight + "px";

    if (thisIndex == slider.length) {
      setTimeout(() => {
        sliderWrap.style.transition = "0s";
        sliderWrap.style.marginTop = "0px";
        thisIndex = 0;
      }, 700);
    }
  }, 3000);
};
