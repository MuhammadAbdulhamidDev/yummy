const searchContainer = document.getElementById("searchContainer");
import { displayMeals } from "../modules/mainDisplay.module.js";
import { closeSideNav } from "../modules/sideNav.module.js";

function showSearchInputs() {
  searchContainer.style.display = "block";
  searchContainer.innerHTML = `
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input id="searchByNameInput" class="form-control bg-transparent text-light" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input id="searchByFirstLetterInput" maxlength="1" class="form-control bg-transparent text-light" type="text" placeholder="Search By First Letter">
        </div>
    </div>`;

  rowData.innerHTML = "";
}
function hideSearchInputs() {
  searchContainer.style.display = "none";
}

function setupSearchInputListeners() {
  const nameInput = document.getElementById("searchByNameInput");
  const letterInput = document.getElementById("searchByFirstLetterInput");
  if (nameInput) {
    nameInput.addEventListener("input", (event) => {
      searchByName(event.target.value);
    });
    nameInput.addEventListener("blur", function () {
      nameInput.value = "";
    });
  }

  if (letterInput) {
    letterInput.addEventListener("input", (event) => {
      searchByFirstLetter(event.target.value);
    });
    letterInput.addEventListener("blur", function () {
      letterInput.value = "";
    });
  }
}

async function searchByName(searchTerm) {
  closeSideNav();
  rowData.innerHTML = "";
  $(".inner-loading-screen").fadeIn(300);

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
  );
  response = await response.json();

  response.meals ? displayMeals(response.meals) : displayMeals([]);
  $(".inner-loading-screen").fadeOut(300);
}

async function searchByFirstLetter(letter) {
  closeSideNav();
  rowData.innerHTML = "";
  $(".inner-loading-screen").fadeIn(300);

  letter == "" ? (letter = "a") : "";
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  response = await response.json();

  response.meals ? displayMeals(response.meals) : displayMeals([]);
  $(".inner-loading-screen").fadeOut(300);
}

export {
  showSearchInputs,
  hideSearchInputs,
  setupSearchInputListeners,
  searchContainer,
};
