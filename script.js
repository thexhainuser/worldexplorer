const button = document.getElementById("scrollBtn");
button.addEventListener("click", function () {
  const section = document.querySelector(".black-section");
  section.scrollIntoView({ behavior: "smooth" });
});
