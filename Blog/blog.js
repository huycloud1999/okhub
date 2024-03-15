const menuItems = document.querySelectorAll(".menuBlog li");

menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
  });
});
