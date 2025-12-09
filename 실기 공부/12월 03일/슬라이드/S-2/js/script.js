// window.onload = function () {
//   let thisIndex = 0; //현재 이미지
//   const sliderWrap = document.querySelector(".sliderWrap"); //전체 이미지
//   const slider = document.querySelectorAll(".slider"); //각각의 이미지

//   const firstimg = sliderWrap.firstElementChild.cloneNode(true); //첫번째 이미지 저장
//   sliderWrap.appendChild(firstimg); //복사한 이미지를 마지막에 추가

//   setInterval(() => {
//     thisIndex++; //현재 이미지를 1씩 증가
//     sliderWrap.style.transition = "all 0.6s"; //이미지 애니메이션 설정
//     sliderWrap.style.marginLeft = -thisIndex * 100 + "%"; //이미지 이동

//     if (thisIndex == slider.length) {
//       setTimeout(() => {
//         sliderWrap.style.transition = "0s"; //애니메이션 정지
//         sliderWrap.style.marginLeft = "0"; //이미지 위치 초기화
//         thisIndex = 0; //현재 이미지 초기화
//       }, 700);
//     }
//   }, 3000);
// };

window.onload = function () {
  let thisIndex = 0;
  const sliderWrap = document.querySelector(".sliderWrap");
  const slider = document.querySelectorAll(".slider");

  const firstImg = sliderWrap.firstElementChild.cloneNode(true);
  sliderWrap.appendChild(firstImg);

  const sliderHeight = document.querySelector("#slider").offsetHeight;

  setInterval(() => {
    thisIndex++;
    sliderWrap.style.trancition = "all 0.6s";
    sliderWrap.style.marginTop = -trancition * sliderHeight + "px";

    if (thisIndex == slider.length) {
      setTimeout(() => {
        sliderWrap.style.trancition = "0s";
        sliderWrap.style.marginTop = "0px";
        thisIndex = 0;
      }, 700);
    }
  }, 3000);
};
