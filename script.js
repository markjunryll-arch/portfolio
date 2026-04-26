document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded successfully");

  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Message sent successfully! (Demo only)");
      form.reset();
    });
  }
});