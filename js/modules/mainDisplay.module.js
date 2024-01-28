let rowData = document.getElementById("rowData");
import { getMealDetails } from "../modules/details.module.js";
export function displayMeals(list) {
  let box = "";
  let length = list.length;
  for (let i = 0; i < length; i++) {
    box += `<div class="col-xl-3 col-lg-4 col-md-6">
          <div
            data-id="${list[i].idMeal}"
            class="detailsDiv meal position-relative overflow-hidden rounded-2 cursor-pointer"
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
  // Use querySelectorAll to handle multiple elements with the same attribute
  const elementsWithDataId = document.querySelectorAll("[data-id]");

  // Iterate over the selected elements
  elementsWithDataId.forEach((element) => {
    element.addEventListener("click", function () {
      // Use getAttribute to get the value of the data-id attribute
      const dataIdValue = element.getAttribute("data-id");

      // Call getMealDetails with the data-id value
      getMealDetails(dataIdValue);
    });
  });
}
