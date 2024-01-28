let rowData = document.getElementById("rowData");
import { displayMeals } from "../modules/mainDisplay.module.js";

async function getIngredients() {
  rowData.innerHTML = "";
  $(".inner-loading-screen").fadeIn(300);

  let respone = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  respone = await respone.json();

  displayIngredients(respone.meals.slice(0, 20));
  $(".inner-loading-screen").fadeOut(300);
}

function displayIngredients(arr) {
  let box = "";
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    box += `
        <div class="col-md-3">
                <div class="ingredientDiv rounded-2 text-center cursor-pointer text-light">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${arr[i].strIngredient}</h3>
                        <p>${arr[i].strDescription
                          .split(" ")
                          .slice(0, 20)
                          .join(" ")}</p>
                </div>
        </div>
        `;
  }

  rowData.innerHTML = box;

  setupIngredientListeners();
}

function setupIngredientListeners() {
  const ingredientDivs = document.querySelectorAll(".ingredientDiv");

  ingredientDivs.forEach((ingredientDiv) => {
    ingredientDiv.addEventListener("click", function () {
      const currentIngredient = ingredientDiv.querySelector("h3").textContent;
      getIngredientsMeals(currentIngredient);
    });
  });
}

async function getIngredientsMeals(ingredients) {
  rowData.innerHTML = "";
  $(".inner-loading-screen").fadeIn(300);

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`
  );
  response = await response.json();

  displayMeals(response.meals.slice(0, 20));
  $(".inner-loading-screen").fadeOut(300);
}

export { getIngredients };
