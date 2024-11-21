document.addEventListener("DOMContentLoaded", function () {
  const fontSizeLinks = document.querySelectorAll(".font-size");
  const bookElement = document.getElementById("book");

  fontSizeLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      fontSizeLinks.forEach((link) =>
        link.classList.remove("font-size_active")
      );

      this.classList.add("font-size_active");

      bookElement.classList.remove("book_fs-small", "book_fs-big");

      const size = this.getAttribute("data-size");
      if (size) {
        bookElement.classList.add(`book_fs-${size}`);
      }
    });
  });

  const textColorLinks = document.querySelectorAll(".color[data-text-color]");
  textColorLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      textColorLinks.forEach((link) => link.classList.remove("color_active"));

      this.classList.add("color_active");

      bookElement.classList.remove(
        "book_color-black",
        "book_color-gray",
        "book_color-whitesmoke"
      );

      const color = this.getAttribute("data-text-color");
      if (color) {
        bookElement.classList.add(`book_color-${color}`);
      }
    });
  });

  const bgColorLinks = document.querySelectorAll(".color[data-bg-color]");
  bgColorLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      bgColorLinks.forEach((link) => link.classList.remove("color_active"));

      this.classList.add("color_active");

      bookElement.classList.remove(
        "book_bg-black",
        "book_bg-gray",
        "book_bg-white"
      );

      const bgColor = this.getAttribute("data-bg-color");
      if (bgColor) {
        bookElement.classList.add(`book_bg-${bgColor}`);
      }
    });
  });
});
