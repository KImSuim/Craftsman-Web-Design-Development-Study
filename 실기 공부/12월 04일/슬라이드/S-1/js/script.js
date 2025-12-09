window.onload = function () {
  let thisIndex = "0";
  const slider = document.querySelectorAll(".slider");
  slider.forEach((img) => (img.style.opacity = "0")); //모든 이미지를 투명하게
  slider[0].style.opacity = "1";

  setInterval(() => {
    let nextIndex = (thisIndex + 1) % slider.length;
    slider[thisIndex].style.opacity = "0";
    slider[nextIndex].style.opacity = "1";
    slider.forEach((img) => (img.style.transition = "all 1s"));

    thisIndex = nextIndex;
  }, 3000);
};
