// import year.module
import year from "./modules/year.module.js";
year();

// import preloader.module
import preloader from "./modules/preloader.module.js";
preloader();

// import sideNav.module
import {
  openSideNav,
  closeSideNav,
  sideNav,
} from "./modules/sideNav.module.js";
closeSideNav();
sideNav();

// import api.module
import * as API from "./modules/api.module.js";
let navLinks = document.querySelectorAll(".nav-links ul li");
import {
  showSearchInputs,
  setupSearchInputListeners,
  hideSearchInputs,
  searchContainer,
} from "./modules/search.module.js";
import { getCategories } from "./modules/category.module.js";
import { getArea } from "./modules/area.module.js";
import { getIngredients } from "./modules/ingredients.module.js";
import { showContacts } from "./modules/contact.module.js";

document.addEventListener("DOMContentLoaded", () => {
  $(".inner-loading-screen").fadeIn(300);
  API.getData();
  $(".inner-loading-screen").fadeOut(300);
});

navLinks[0].addEventListener("click", function () {
  closeSideNav();
  $(".inner-loading-screen").fadeIn(300);
  API.getData();
  $(".inner-loading-screen").fadeOut(300);
});

navLinks[1].addEventListener("click", function () {
  $("body").animate({ scrollTop: 0 }, 0);
  showSearchInputs();
  closeSideNav();
  setupSearchInputListeners();
});

navLinks.forEach((link) => {
  // Attach event listener to hide search inputs
  link.addEventListener("click", function () {
    if (link !== navLinks[1]) {
      hideSearchInputs();
    }
  });
});

navLinks[2].addEventListener("click", function (event) {
  closeSideNav();
  getCategories();
});

navLinks[3].addEventListener("click", function () {
  closeSideNav();
  getArea();
});

navLinks[4].addEventListener("click", function () {
  closeSideNav();
  getIngredients();
});

navLinks[5].addEventListener("click", function () {
  closeSideNav();
  showContacts();
});
