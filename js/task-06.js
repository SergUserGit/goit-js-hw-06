const elemInput = document.querySelector("#validation-input");

elemInput.addEventListener("blur", onValidationInput);

function onValidationInput(event) {
  const countCharInput = Number.parseInt(elemInput.dataset.length);

  const curVlueLength = event.currentTarget.value.length;

  const classListInput = elemInput.classList;

  if (countCharInput === curVlueLength) {
    if (classListInput.contains("invalid")) {
      classListInput.remove("invalid");
    }
    classListInput.add("valid");
  } else {
    if (classListInput.contains("valid")) {
      classListInput.remove("valid");
    }
    classListInput.add("invalid");
  }
}
