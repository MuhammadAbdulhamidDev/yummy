const rowData = document.getElementById("rowData");

// import from details.module
import { getMealDetails } from "../modules/details.module.js";

function displayMeals(list) {
  let box = "";
  const length = list.length;
  for (let i = 0; i < length; i++) {
    box += `<div class="col-xl-3 col-lg-4 col-md-6">
          <div
            data-id="${list[i].idMeal}"
            class="meal position-relative overflow-hidden rounded-2 cursor-pointer"
          >
            <img
              class="w-100"
              src="${list[i].strMealThumb}"
              alt="${list[i].strMeal}"
            />
            <div
              class="meal-layer position-absolute d-flex align-items-center justify-content-center text-black p-2"
            >
              <h3>${list[i].strMeal}</h3>
            </div>
          </div>
        </div>`;
  }
  rowData.innerHTML = box;

  setupDetailsListeners();
}

function setupDetailsListeners() {
  const elementsWithDataId = document.querySelectorAll("[data-id]");

  elementsWithDataId.forEach((element) => {
    element.addEventListener("click", function () {

      const dataIdValue = element.getAttribute("data-id");

      // Call getMealDetails with the data-id value
      getMealDetails(dataIdValue);
    });
  });
}

export { displayMeals, rowData };
