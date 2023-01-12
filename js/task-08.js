const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const currtntDate = event.currentTarget;
  const elemOfForm = currtntDate.elements;

  const email = elemOfForm.email.value;
  const password = elemOfForm.password.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("всі поля повинні бути заповнені");
  } else {
    const elemObject = { email, password };

    console.log(elemObject);

    currtntDate.reset();
  }
}
