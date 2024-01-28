let rowData = document.getElementById("rowData");
import { closeSideNav } from "../modules/sideNav.module.js";

async function getMealDetails(mealID) {
  closeSideNav();
  rowData.innerHTML = "";

  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
  );
  response = await response.json();

  displayMealDetails(response.meals[0]);
}

function displayMealDetails(meal) {
  let ingredients = ``;

  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients += `<li class="alert alert-info m-2 p-1">${
        meal[`strMeasure${i}`]
      } ${meal[`strIngredient${i}`]}</li>`;
    }
  }

  let tagList = meal.strTags?.split(",") || [];

  let tagListHtml = "";
  for (let tag of tagList) {
    if (!tag) continue;
    tagListHtml += `
        <li class="alert alert-danger m-2 py-1 px-3">${tag}</li>`;
  }

  let box = `
          <div class="col-md-4 text-light">
            <img class="w-100 rounded-3" src="${meal.strMealThumb}"
            alt="${meal.strMeal}">
            <h2><i class="fa-solid fa-tag me-2"></i> ${meal.strMeal}</h2>
          </div>
          <div class="col-md-8 text-light">
            <h2>Instructions</h2>
            <p>${meal.strInstructions}</p>
            <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
            <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
            <h3>Recipes :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                ${ingredients}
            </ul>
            <h3>Tags :</h3>
            <ul class="list-unstyled d-flex g-3 flex-wrap">
                ${tagListHtml}
            </ul>
            <h3>Links :</h3>
            <a target="_blank" href="${meal.strSource}" class="btn btn-success ms-2">Source</a>
            <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger ms-3">Youtube</a>
          </div>`;

  rowData.innerHTML = box;
}

export { getMealDetails };
