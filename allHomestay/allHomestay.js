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
//pagination
var totalPages = 20;
var currentPage = 1;
var pagesPerPage = 3;

function populatePagination() {
  var pagesContainer = document.getElementById("pages");
  pagesContainer.innerHTML = "";
  var startPage = Math.max(currentPage - Math.floor(pagesPerPage / 2), 1);
  var endPage = Math.min(startPage + pagesPerPage - 1, totalPages);
  var firstPageItem = document.createElement("li");
  // Hiển thị dấu "..." nếu có trang trước
  if (startPage > 2) {
    var ellipsisItem = document.createElement("li");
    ellipsisItem.textContent = "...";
    pagesContainer.appendChild(ellipsisItem);
  }

  for (var i = startPage; i <= endPage; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = i;
    if (i === currentPage) {
      listItem.classList.add("active");
    }
    listItem.addEventListener("click", function () {
      currentPage = parseInt(this.textContent);
      populatePagination();
    });
    pagesContainer.appendChild(listItem);
  }

  if (endPage < totalPages - 1) {
    var ellipsisItem = document.createElement("li");
    ellipsisItem.textContent = "...";
    pagesContainer.appendChild(ellipsisItem);
  }
}

// Sự kiện khi nhấp vào nút trái
document.getElementById("left").addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    populatePagination();
  }
});

// Sự kiện khi nhấp vào nút phải
document.getElementById("right").addEventListener("click", function () {
  if (currentPage < totalPages) {
    currentPage++;
    populatePagination();
  }
});

populatePagination();
