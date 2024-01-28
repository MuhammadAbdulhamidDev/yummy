import { displayMeals, rowData } from "../modules/mainDisplay.module.js";
import { innerLoader } from "../modules/preloader.module.js";

async function getArea() {
  rowData.innerHTML = "";

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  response = await response.json();

  displayArea(response.meals);
}

function displayArea(list) {
  let box = "";
  const length = list.length;

  for (let i = 0; i < length; i++) {
    box += `
        <div class="col-md-3">
            <div class="areaDiv rounded-2 text-center cursor-pointer text-light">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${list[i].strArea}</h3>
            </div>
        </div>
        `;
  }

  rowData.innerHTML = box;

  setupAreaListeners();
}

function setupAreaListeners() {
  const areaDivs = document.querySelectorAll(".areaDiv");

  areaDivs.forEach((areaDiv) => {
    areaDiv.addEventListener("click", function () {
      const currentArea = areaDiv.querySelector("h3").textContent;
      getAreaMeals(currentArea);
    });
  });
}

async function getAreaMeals(area) {
  rowData.innerHTML = "";
  innerLoader();

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
  );
  response = await response.json();

  displayMeals(response.meals.slice(0, 20));
}

export { getArea };
