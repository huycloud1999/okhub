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
