import FormElement from "./formElement.js";

// const INPUT_IDS = [email, country, zip, password, password_confirmation];
const input_elements = [];

let email_input = new FormElement("email");
console.log(email_input);
email_input.isEmailInput();

let countryInput = new FormElement("country");
countryInput.isCountryInput();

let zipInput = new FormElement("zip");
zipInput.isZipCode();

let password = new FormElement("password");
password.isPassword();

let password_confirmation = new FormElement("password_confirmation");
password_confirmation.isPassword();
password_confirmation.checkPasswordEvent(password, password_confirmation);

input_elements.push(email_input, countryInput, zipInput, password, password_confirmation);

let submitButton = new FormElement("submit");
submitButton.isSubmitButton();
submitButton.submitButtonValidation(input_elements);