const INPUT_IDS = [email, country, zip, password, password_confirmation];
let input_elements = [];

class FormElement {
    constructor(element_id) {
        this.id = element_id;
        this.element = document.getElementById(element_id);
    }

    add_email_validation() {
        this.type = email;
        this.element.type = "email";
        this.element.addEventListener("change", (e) => {
            if (this.element.validity.valid) {
                this.element.style.boxShadow = "none";
            } else {
                this.element.style.boxShadow = "0px 0px 5px 5px red";
            }
        })
    }
}

let email_input = new FormElement("email");
console.log(email_input);
email_input.add_email_validation();