const elemInputName = document.querySelector("#name-input");

const elemSpan = document.querySelector("#name-output");

elemInputName.addEventListener("input", onNameInput);

function onNameInput(event) {
  const curVlue = event.currentTarget.value;

  if (curVlue.trim() === "") {
    elemSpan.textContent = "Anonymous";
  } else {
    elemSpan.textContent = curVlue;
  }
}
