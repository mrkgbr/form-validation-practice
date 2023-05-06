const email = document.getElementById("email");
const emailError = document.getElementById("email-helper");
showError(email, emailError, "Email address");

const country = document.getElementById("country");
const countryError = document.getElementById("country-helper");
showError(country, countryError, "Country");

const zip = document.getElementById("zip");
const zipError = document.getElementById("zip-helper");
showError(zip, zipError, "ZIP code");

const pw = document.getElementById("pw");
const pwError = document.getElementById("pw-helper");
showError(pw, pwError, "Password");

const pwConf = document.getElementById("pw-conf");
const pwConfError = document.getElementById("pw-conf-helper");
showError(pwConf, pwConfError, "Password");

listener(email, emailError, "email address");
listener(country, countryError, "country");
listener(zip, zipError, "ZIP-code");
listener(pw, pwError, "Password");
pwCheck();

function listener(item, itemError, itemName) {
  item.addEventListener("input", () => {
    if (item.validity.valid) {
      itemError.textContent = "";
      itemError.classList.remove("warning");
    } else {
      showError(item, itemError, itemName);
    }
  });
}

function pwCheck() {
  pwConf.addEventListener("input", () => {
    if (pw.value !== "" && pwConf.value !== "" && pw.value !== pwConf.value) {
      pwConfError.textContent = "Passwords do not match.";
      pwConf.setCustomValidity("Invalid field.");
    } else if (pwConf.value === "") {
      pwConfError.textContent = "\u26a0 Please fill out this field.";
    } else {
      pwConfError.textContent = "";
      pwConf.setCustomValidity("");
    }
  });
}

function showError(item, itemError, itemName) {
  if (item.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    itemError.textContent = "\u26a0 Please fill out this field.";
  } else if (item.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    itemError.textContent = `\u26a0 Entered value does not match the format.`;
  } else if (item.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    itemError.textContent = `\u26a0 ${itemName} should be at least ${item.minLength} characters; you entered ${item.value.length}.`;
  }
}
