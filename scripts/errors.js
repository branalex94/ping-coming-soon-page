const form = document.querySelector(".main__form");
const emailInput = document.querySelector(".form__input");
const errorMsg = document.querySelector(".form__error-msg");

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();
  const validateEmail = validateMail(emailInput.value);
  if (!validateEmail) {
    showError();
    return;
  }
}

function validateMail(mail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}

function showError() {
  emailInput.classList.add("warning");
  errorMsg.classList.add("active");
  setTimeout(() => {
    emailInput.classList.remove("warning");
    errorMsg.classList.remove("active");
  }, 2000);
}
