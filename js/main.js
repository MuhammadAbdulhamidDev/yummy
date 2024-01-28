// import from year.module
import year from "./modules/year.module.js";
year();

// import from preloader.module
import { outerLoader, innerLoader } from "./modules/preloader.module.js";
outerLoader();

// import from sideNav.module
import { sideNav, closeSideNav } from "./modules/sideNav.module.js";
sideNav();
closeSideNav();

// select nav links
let navLinks = document.querySelectorAll(".nav-links ul li");

// import from api.module
import { getData } from "./modules/api.module.js";

document.addEventListener("DOMContentLoaded", () => {
  innerLoader();
  getData();
  hideSearchInputs();
});

navLinks[0].addEventListener("click", function () {
  generalFunctions();
  getData();
});

// import from search.module
import {
  showSearchInputs,
  setupSearchInputListeners,
  hideSearchInputs,
} from "./modules/search.module.js";
navLinks[1].addEventListener("click", function () {
  $("body").animate({ scrollTop: 0 }, 0);
  closeSideNav();
  innerLoader();
  showSearchInputs();
  setupSearchInputListeners();
});

// import from category.module
import { getCategories } from "./modules/category.module.js";
navLinks[2].addEventListener("click", function () {
  generalFunctions();
  getCategories();
});

// import from area.module
import { getArea } from "./modules/area.module.js";
navLinks[3].addEventListener("click", function () {
  generalFunctions();
  getArea();
});

// import from ingredients.module
import { getIngredients } from "./modules/ingredients.module.js";
navLinks[4].addEventListener("click", function () {
  generalFunctions();
  getIngredients();
});

// import from contact.module
import { showContacts, clearForm } from "./modules/contact.module.js";
navLinks[5].addEventListener("click", function () {
  generalFunctions();
  showContacts();
  clearForm();
});

function generalFunctions() {
  closeSideNav();
  hideSearchInputs();
  innerLoader();
}
