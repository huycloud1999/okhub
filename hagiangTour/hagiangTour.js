const listItems = document.querySelectorAll("#list li");

listItems.forEach((item) => {
  item.addEventListener("click", function () {
    listItems.forEach((li) => {
      li.classList.remove("active");
    });

    this.classList.add("active");
  });
});

const listItemsMenu = document.querySelectorAll("#listMenu li");
const funtion = document.getElementById("funtion");
const paragraphs = document.querySelector(".mapDescription .parag");
const tables = document.querySelector(".mapDescription .table");

listItemsMenu.forEach((item, index) => {
  item.addEventListener("click", function () {
    listItemsMenu.forEach((li) => {
      li.classList.remove("activeLeft");
    });
    this.classList.add("activeLeft");

    paragraphs.classList.add("hidden");
    tables.classList.add("hidden");
    funtion.classList.remove("hidden");
    if (index === 0) {
      paragraphs.classList.remove("hidden");
    } else {
      tables.classList.remove("hidden");
      if (window.innerWidth < 768) {
        funtion.classList.add("hidden");
      } else {
        funtion.classList.remove("hidden");
      }
    }
  });
});

// Kiểm tra kích thước màn hình khi resize

///play video
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
document.addEventListener("DOMContentLoaded", function () {
  var video2 = document.getElementById("myVideo2");
  var playButton2 = document.getElementById("playButton2");

  playButton2.addEventListener("click", function () {
    video2.style.display = "block";
    video2.play();
    video2.controls = true;
    video2.muted = false;
    playButton2.style.display = "none";
  });
  video2.addEventListener("ended", function () {
    playButton2.style.display = "block";
    video2.controls = false;
  });
});
////faq
function toggleContent(contentId) {
  var cheersStay = document.getElementsByClassName("cheersStay")[0];
  var cheersTour = document.getElementsByClassName("cheersTour")[0];

  var menuItems = document.querySelectorAll(".menuFaq ul li");
  menuItems.forEach(function (item) {
    item.classList.remove("activeFaq");
  });

  var selectedItem = document.querySelector(
    '.menuFaq ul li[data-content="' + contentId + '"]'
  );

  if (selectedItem) {
    console.log(selectedItem);
    selectedItem.classList.add("activeFaq");
    if (contentId === "cheersStay") {
      cheersStay.classList.add("activeFaqContent");
      cheersTour.classList.remove("activeFaqContent");
    } else if (contentId === "cheersTour") {
      cheersStay.classList.remove("activeFaqContent");
      cheersTour.classList.add("activeFaqContent");
    }
  }
}
//
document.addEventListener("DOMContentLoaded", function () {
  var headerItems = document.querySelectorAll(".headerItem");

  headerItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var detailItem = this.nextElementSibling;
      var question = this.querySelector(".question");
      var iconDown = this.querySelector(".iconDown");

      // Check if the clicked headerItem is already active
      var isActive = this.classList.contains("headerItemsActive");

      // Deactivate all headerItems
      headerItems.forEach(function (headerItem) {
        headerItem.classList.remove("headerItemsActive");
        var detailItem = headerItem.nextElementSibling;
        var question = headerItem.querySelector(".question");
        var iconDown = headerItem.querySelector(".iconDown");
        detailItem.classList.remove("showDetail");
        question.classList.remove("activeItem");
        iconDown.classList.remove("activeIconDown");
      });

      // If the clicked headerItem is not already active, activate it
      if (!isActive) {
        this.classList.add("headerItemsActive");
        detailItem.classList.add("showDetail");
        question.classList.add("activeItem");
        iconDown.classList.add("activeIconDown");
      }
    });
  });
});
//popop
document.addEventListener("DOMContentLoaded", function () {
  var itemClick = document.getElementsByClassName("galleryItem");
  var popup = document.getElementsByClassName("popup")[0];
  var close = document.getElementsByClassName("closePopup")[0];
  var popupContent = document.querySelector(".popUpmenu ul");
  var menuItems = document.querySelectorAll(".menuItem");
  var containerSlidePopup = document.querySelector(".containerSlidePopup");

  for (var i = 0; i < itemClick.length; i++) {
    (function (index) {
      itemClick[index].addEventListener("click", function (event) {
        console.log("Clicked element index:", index);

        var experienceType = this.querySelector("span").innerText;

        var menuItem = popupContent.querySelector(
          "[data-target='" + experienceType + "']"
        );
        if (menuItem) {
          var activeMenuItem = popupContent.querySelector(".popUpActive");
          if (activeMenuItem) {
            activeMenuItem.classList.remove("popUpActive");
          }

          menuItem.classList.add("popUpActive");
        }

        // Hiển thị nội dung tương ứng với menu đang được active
        var activeSlide = containerSlidePopup.querySelector(
          ".slider[data-target='" + experienceType + "']"
        );
        if (activeSlide) {
          // Ẩn tất cả các slide trước khi hiển thị slide tương ứng
          var allSlides = containerSlidePopup.querySelectorAll(".slider");
          allSlides.forEach(function (slide) {
            slide.style.display = "none";
          });
          activeSlide.style.display = "block";
        }

        popup.classList.add("popupActive");
        document.body.classList.add("noScroll");
      });
    })(i);
  }

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var target = this.getAttribute("data-target");

      var allSlides = containerSlidePopup.querySelectorAll(".slider");
      allSlides.forEach(function (slide) {
        slide.style.display = "none";
      });

      var targetSlide = containerSlidePopup.querySelector(".slides" + target);
      if (targetSlide) {
        targetSlide.style.display = "block";
      }

      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("popUpActive");
      });

      this.classList.add("popUpActive");

      var popup = document.querySelector(".popup");
      popup.classList.add("popupActive");
      document.body.classList.add("noScroll");
    });
  });

  close.addEventListener("click", function () {
    popup.classList.remove("popupActive");
    document.body.classList.remove("noScroll");
  });
});
