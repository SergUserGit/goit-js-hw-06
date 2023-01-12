//function getRandomHexColor() {
//  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector("[data-create]");

createBtn.addEventListener("click", onCreateBtnClick);

const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  const elementInput = document.querySelector("input");

  const inputValue = elementInput.value;

  const inputValueNumber = Number.parseInt(inputValue);

  console.log(!inputValueNumber);

  console.log(typeof inputValueNumber);
}

function onDestroyBtnClick() {
  alert("Удаление");
}

function createBoxes(amount) {
  for (let i = 0; i <= amount; i += 1) {}
}
