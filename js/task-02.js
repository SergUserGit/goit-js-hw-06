const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItems = ingredients.map((el) => {
  const newItem = document.createElement("li");
  newItem.textContent = el;
  newItem.classList.add("item");
  return newItem;
});

const ingredientsList = document.querySelector("#ingredients");

ingredientsList.append(...ingredientsItems);
