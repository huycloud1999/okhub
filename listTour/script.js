document.addEventListener("DOMContentLoaded", function () {
  var fatherElement = document.querySelector(".filterTravelStyleCT");
  var childElement = document.querySelector(".menuChildTravelStyle");
  fatherElement.addEventListener("click", function () {
    if (childElement.style.opacity === "1") {
      childElement.style.opacity = "0";
    } else {
      childElement.style.opacity = "1";
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var fatherElement2 = document.querySelector(".filterTravelDestinationCT");
  var childElement2 = document.querySelector(".menuChildDestinations");
  fatherElement2.addEventListener("click", function () {
    if (childElement2.style.opacity === "1") {
      childElement2.style.opacity = "0";
    } else {
      childElement2.style.opacity = "1";
    }
  });
});
//pagination
