jQuery(document).ready(function () {
  const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

  faqHeaders.forEach((header, i) => {
    header.addEventListener("click", () => {
      header.nextElementSibling.classList.toggle("active");

      const open = header.querySelector(".open");
      const close = header.querySelector(".close");

      if (header.nextElementSibling.classList.contains("active")) {
        open.classList.remove("active");
        close.classList.add("active");
        header.style.opacity = "1";
      } else {
        open.classList.add("active");
        close.classList.remove("active");
        header.style.opacity = null;
      }
    });
  });
});
