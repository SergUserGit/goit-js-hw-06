const elInput = document.querySelector("#font-size-control");
const elSpanText = document.querySelector("#text");
elInput.addEventListener("input", onSizeControlInput);

function onSizeControlInput(event) {
  const elInputValue = event.currentTarget.value;
  elSpanText.style["font-size"] = elInputValue + "px";
}
