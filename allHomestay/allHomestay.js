document.addEventListener("DOMContentLoaded", function () {
  var fatherElement = document.querySelector(".father");
  var childElement = document.querySelector(".child");
  fatherElement.addEventListener("click", function () {
    if (childElement.style.opacity === "1") {
      childElement.style.opacity = "0";
    } else {
      childElement.style.opacity = "1";
    }
  });
});
