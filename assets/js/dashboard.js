const primaryHeader = document.querySelector(".dashboard-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".dashboard-navigation");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

document.addEventListener("DOMContentLoaded", function () {
  var dropdownToggle = document.querySelector(".dropdown-toggle");
  var dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.style.display = "none";
    }

    console.log(primaryNav.hasAttribute("data-visible"));
    if (
      primaryNav.hasAttribute("data-visible") &&
      !navToggle.contains(event.target) &&
      !primaryNav.contains(event.target)
    ) {
      primaryNav.toggleAttribute("data-visible");
      primaryHeader.toggleAttribute("data-overlay");
      navToggle.setAttribute("aria-expanded", false);
    }
  });
});
