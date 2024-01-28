let rowData = document.getElementById("rowData");
import { displayMeals } from "../modules/mainDisplay.module.js";

async function getCategories() {
  rowData.innerHTML = "";
  $(".inner-loading-screen").fadeIn(300);

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  response = await response.json();

  displayCategories(response.categories);
  $(".inner-loading-screen").fadeOut(300);
}

function displayCategories(list) {
  let box = "";
  let length = list.length;
  for (let i = 0; i < length; i++) {
    box += `
        <div class="col-md-3">
                <div class="categoryDiv meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${
                      list[i].strCategoryThumb
                    }" alt="" srcset="">
                    <div class="meal-layer position-absolute text-center text-black p-2">
                        <h3>${list[i].strCategory}</h3>
                        <p>${list[i].strCategoryDescription
                          .split(" ")
                          .slice(0, 20)
                          .join(" ")}</p>
                    </div>
                </div>
        </div>
        `;
  }

  rowData.innerHTML = box;

  setupCategoryListeners();
}

function setupCategoryListeners() {
  const categoryDivs = document.querySelectorAll(".categoryDiv");

  categoryDivs.forEach((categoryDiv) => {
    categoryDiv.addEventListener("click", function () {
      const currentCategory = categoryDiv.querySelector("h3").textContent;
      getCategoryMeals(currentCategory);
    });
  });
}

async function getCategoryMeals(category) {
  rowData.innerHTML = "";

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  response = await response.json();

  displayMeals(response.meals.slice(0, 20));
}
export { getCategories };
