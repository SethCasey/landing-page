import DefaultCountryList from "./countryList.js";
const countryList = new DefaultCountryList;

export default class FormElement {
    constructor(elementId) {
        this.id = elementId;
        this.element = document.getElementById(elementId);
        this.validity = false;
    };

    isEmailInput() {
        this.type = "email";
        this.element.type = "email";
        this.element.addEventListener("blur", (e) => {
            if (this.element.value === "") {
                this.element.style.boxShadow = "0px 0px 5px 5px red";
                this.validity = false;
            }
            else if (this.element.validity.valid) {
                this.element.style.boxShadow = "none";
                this.validity = true;
            } else {
                this.element.style.boxShadow = "0px 0px 5px 5px red";
                this.validity = false;
            };
        });
    };

    isCountryInput() {
        this.type = "countryList";
        this.element.addEventListener("blur", (e) => {
            if (this.element.value === "") {
                this.element.style.boxShadow = "0px 0px 5px 5px red";
                this.validity = false;
            }else if (countryList.array.includes(this.element.value)) {
                this.element.style.boxShadow = "none";
                this.validity = true;
            } else {
                this.element.style.boxShadow = "0px 0px 5px 5px red";
                this.validity = false;
            };
        });
        
        let dropdownMenu = document.getElementById("country");
        function addToList(value) {
            let option = document.createElement("option");
            option.textContent = value;
            option.value = value;
            dropdownMenu.appendChild(option);
        };
        countryList.array.forEach(addToList);
    };

    isZipCode() {
        this.type = "zip";
        this.element.type = "text";
        this.element.addEventListener("blur", (e) => {
            console.log(this.element.value);
            console.log(typeof(this.element.value));
            let regexBooleanResult = /^\d{5}(-\d{4})?$/.test(this.element.value);
            if (regexBooleanResult) {
                this.element.style.boxShadow = "none";
                this.validity = true;
            } else {
                this.element.style.boxShadow = "0px 0px 5px 5px red";
                this.validity = false;
            };
        });
    };

    isPassword() {
        this.type = "password";
        this.element.type = "password";
    }

    checkPasswordEvent(passwordField, passwordConfirmationField) {
        passwordConfirmationField.element.addEventListener("blur", (e) => {
            if (passwordField.element.value.length < 10) {
                passwordField.element.style.boxShadow = "0px 0px 5px 5px red";
                passwordField.validity = false;
                passwordConfirmationField.element.style.boxShadow = "0px 0px 5px 5px red";
                passwordConfirmationField.validity = false;
            } else if (passwordField.element.value != passwordConfirmationField.element.value) {
                passwordField.element.style.boxShadow = "0px 0px 5px 5px red";
                passwordField.validity = false;
                passwordConfirmationField.element.style.boxShadow = "0px 0px 5px 5px red";
                passwordConfirmationField.validity = false;
            } else {
                passwordField.element.style.boxShadow = "none";
                passwordField.validity = true;
                passwordConfirmationField.element.style.boxShadow = "none";
                passwordConfirmationField.validity = true;

            };
        });
    };

    isSubmitButton() {
        this.type = "submit";
        this.element.type = "submit";
    };

    submitButtonValidation(inputElementArray = []) {
        this.element.addEventListener("click", (e) => {
            for (let x = 0; x < inputElementArray.length; x++) {
                if (inputElementArray[x].type == "password") {
                    checkPasswordEvent();
                }
                
                if (!inputElementArray[x].validity) {
                    alert("You must fill out the fields properly before submission");
                    return;
                } else {
                    alert("Everything checks out!");
                    return;
                };
            };
        });
    }
};
