document.addEventListener("DOMContentLoaded", function () {
  var headerHeight = document.getElementById("header").offsetHeight; // Lấy chiều cao của header
  var h2Elements = document.querySelectorAll(".contentSinglePost h2");
  var mobileMenu = document.getElementById("mobile-menu");
  var menuMbBlock = document.getElementById("menuMBBlock");

  // Tạo một mảng lưu trữ vị trí top của mỗi phần tử h2
  var h2Positions = Array.from(h2Elements).map(function (element) {
    return element.offsetTop - headerHeight;
  });

  // Function để kiểm tra phần tử nào đang hiển thị trên màn hình và cập nhật activeScroll tương ứng
  function updateActiveScroll() {
    var currentPosition = window.scrollY + headerHeight + 50; // 50 làm biên dễ nhìn
    var activeIndex = h2Positions.findIndex(function (position) {
      return position > currentPosition;
    });
    // Nếu không tìm thấy phần tử nào lớn hơn vị trí hiện tại, sử dụng phần tử cuối cùng
    if (activeIndex === -1) {
      activeIndex = h2Positions.length - 1;
    }
    // Loại bỏ lớp activeScroll từ tất cả các mục menu
    mobileMenu.querySelectorAll("li").forEach(function (item) {
      item.classList.remove("activeScroll");
    });
    // Thêm lớp activeScroll cho mục menu tương ứng với vị trí hiện tại của trang
    mobileMenu
      .querySelectorAll("li")
      [activeIndex].classList.add("activeScroll");
  }

  // Thêm sự kiện cuộn trang để cập nhật activeScroll
  window.addEventListener("scroll", updateActiveScroll);

  // Tạo menu liên kết và menu di động
  h2Elements.forEach(function (element, index) {
    var listItem = document.createElement("li");
    var listSelector = document.createElement("option");
    listItem.textContent = element.textContent;
    listSelector.textContent = element.textContent;

    listItem.addEventListener("click", function () {
      var scrollPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    });

    mobileMenu.appendChild(listItem);
    menuMbBlock.appendChild(listSelector);

    // Thêm hành vi cuộn mượt vào phần tử select
    listSelector.addEventListener("click", function () {
      var scrollPosition = element.offsetTop - headerHeight;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    });
  });

  // Thêm sự kiện change vào menu di động để xử lý cuộn trang và activeScroll
  menuMbBlock.addEventListener("change", function () {
    var selectedOptionIndex = menuMbBlock.selectedIndex;
    var selectedH2Element = h2Elements[selectedOptionIndex];
    var scrollPosition = selectedH2Element.offsetTop - headerHeight;

    // Loại bỏ lớp selectedOption từ tất cả các tùy chọn
    menuMbBlock.querySelectorAll("option").forEach(function (option) {
      option.classList.remove("selectedOption");
    });
    // Thêm lớp selectedOption cho tùy chọn đã chọn
    menuMbBlock
      .querySelectorAll("option")
      [selectedOptionIndex].classList.add("selectedOption");

    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  });
});
