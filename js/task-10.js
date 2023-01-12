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

  if (!inputValueNumber) {
    alert("Потрібно вибрати значення від 1 !");
  } else {
    createBoxes(inputValueNumber);
  }
}

function onDestroyBtnClick() {
  destroyBoxes();
}

function createBoxes(amount) {
  destroyBoxes();

  const divBoxes = document.querySelector("#boxes");
  const masElem = [];

  let elGeometry = 30;

  for (let i = 1; i <= amount; i += 1) {
    const colorValue = getRandomHexColor();
    const newElem = document.createElement("div");
    const newElemStyle = newElem.style;

    newElemStyle.backgroundColor = colorValue;
    newElemStyle.width = String(elGeometry) + "px";
    newElemStyle.height = String(elGeometry) + "px";

    masElem.push(newElem);

    elGeometry += 10;
  }

  divBoxes.append(...masElem);
}

function destroyBoxes() {
  const newElemets = document.querySelectorAll("#boxes > div");
  for (const element of newElemets) {
    element.remove();
  }
}
