import { displayMeals } from "../modules/mainDisplay.module.js";

async function getData() {
  let response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=`
  );
  response = await response.json();

  response.meals ? displayMeals(response.meals) : displayMeals([]);
}

export { getData };
