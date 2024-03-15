document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var playButton = document.getElementById("playButton");

  playButton.addEventListener("click", function () {
    video.style.display = "block";
    video.play();
    video.controls = true;
    video.muted = false;
    playButton.style.display = "none";
  });
  video.addEventListener("ended", function () {
    playButton.style.display = "block";
    video.controls = false;
  });
});
///

const showPopupButton = document.getElementById("showPopupButton");
const showPopupButton2 = document.getElementById("showPopupButton2");
const hidePopupButton = document.getElementById("hidePopupButton");
const popup = document.querySelector(".popUp");

// Thêm sự kiện click cho nút hiển thị popup
showPopupButton.addEventListener("click", function () {
  // Hiển thị popup bằng cách thêm class 'visible'
  popup.classList.add("visible");
  document.body.classList.add("noScroll");
});
showPopupButton2.addEventListener("click", function () {
  // Hiển thị popup bằng cách thêm class 'visible'
  popup.classList.add("visible");
  document.body.classList.add("noScroll");
});
// Thêm sự kiện click cho nút ẩn popup
hidePopupButton.addEventListener("click", function () {
  // Ẩn popup bằng cách loại bỏ class 'visible'
  popup.classList.remove("visible");
  document.body.classList.remove("noScroll");
});
////
const listSw = document.querySelectorAll(".tourDetail__imgSw");

listSw.forEach((item, index) => {
  const tourDetailImgSw = new Swiper(`.tourDetail__imgSw${index}`, {
    slidesPerView: 1,
    spaceBetween: (window.innerWidth / 100) * 3.75,
    navigation: {
      nextEl: `.tourDetail__imgSw-next${index}`,
      prevEl: `.tourDetail__imgSw-prev${index}`,
    },
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: (window.innerWidth / 100) * 1.5,
      },
    },
  });
});

let listItem = document.querySelectorAll(".tourDetail-main .detail-item");

listItem.forEach((item, index) => {
  const itemBtn = item.querySelector(".item-header-right");

  itemBtn.addEventListener("click", () => {
    if (item.className.includes("full")) {
      item.classList.remove("full");
    } else {
      item.classList.add("full");
    }
  });
});
