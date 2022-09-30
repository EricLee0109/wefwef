const REG_MAIL = 
        /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-\_]{1,65}\.[a-zA-Z]{1,5}$/;
const REG_NAME =
        /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)+)?$/;

const isRequired = (value) => (value !== "" ? "" : "This field is required!");
const isEmail = (value) => REG_MAIL.test(value) ? "" : "This email is not valid!";
const isName = (value) => REG_NAME.test(value) ? "" : "This name is not valid!";
//currying
const min = (min) => (value) => value.length >= min ? "" : `Min number is ${min}`;
const max = (max) => (value) => value.length <= max ? "" : `Max number is ${max}`;

const createMsg = (parentNode, controlNode, msg) => {
        const invalidDiv = document.createElement("div");
        invalidDiv.className = "invalid-feedback";
        invalidDiv.textContent = msg;
        parentNode.appendChild(invalidDiv);
        controlNode.forEach(item => {
                item.classList.add("is-invalid");
        });
}


        