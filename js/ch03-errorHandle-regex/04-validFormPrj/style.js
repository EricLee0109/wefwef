//rule validate
//  Email: isRequired, isEmail
//  Name : isRequired, isName(tên tiếng anh hay việt đều được, không chứa số) max(50) ký tự
//  Gender: isRequired
//  Country: isRequired
//  Password: isRequired, min 8 , max 20
//  confirmedPassword: isRequired, min 8 , max 20, isSame cái password

//tạo regex cho name và email
//email
const REG_EMAIL =
    /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-]{1,65}\.[a-zA-Z]{1,6}$/;
const REG_NAME =
    /^[a-zA-Z'\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z'\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/;

//viết những cái hàm kiểm tra value
//  nếu khớp yêu cầu hàm thì trả ra chuỗi rỗng, nếu không khớp thì trả ra "chửi"
const isRequired = (value) => (value !== "" ? "" : "that field is required");
const isEmail = (value) =>
    REG_EMAIL.test(value) ? "" : "Email is not validate";
const isName = (value) => (REG_NAME.test(value) ? "" : "Name is not validate");
const max = (num) => (value) => value.length <= num ? "" : `Max is ${num}`;
const min = (num) => (value) => value.length >= num ? "" : `Min is ${num}`;
const isSame = (paramValue, fieldName1, fieldName2) => (value) =>
    paramValue == value ? "" : `${fieldName1} Không khớp ${fieldName2}`;
// khái niệm cần nắm trong bài
//value: value là giá trị bên trong của input
//funcs: mảng chứa các hàm dùng để check value
//      vd: cần check value của email
//          funcs: [isRequired, isEmail]
//      vd: cần check value của name
//          funcs: [isRequired, isName, max(50)]
//parentNode: element cha dùng để hiển thị lỗi|element cha của control node
//controlNodes: element input

//khi mà mình chạy các hàm check sẽ nhận chuỗi ""
// hoặc là chuỗi "chữi" => hiển thị ra màn hình
// ta cần 1 cái hàm để hiển thị báo lỗi ra màn hình
const createMsg = (parentNode, controlNodes, msg) => {
    //tạo div thông báo
    const invalidDiv = document.createElement("div");
    invalidDiv.className = "invalid-feedback";
    invalidDiv.textContent = msg;
    parentNode.appendChild(invalidDiv); //chèn vào node cha
    //cho các input có thêm class "is-invalid"
    controlNodes.forEach((inputItem) => {
        inputItem.classList.add("is-invalid");
    });
};

//thằng gọi tổng hợp
//là 1 hàm nhận vào value, funcs , parentNode, controlNodes
//      funcs là mảng chứa các hàm
//          duyệt funcs để các hàm chạy lần lượt với value
//           => kiểm tra value bằng các hàm trong funcs
//      trong quá trình kiểm tra từng hàm
//         nếu hàm trả "" thì nothing
//         nếu hàm trả msg = "chữi" => createMsg(parentNode, controlNodes, msg)

//
const isValid = (paramObject) => {
    const { value, funcs, parentNode, controlNodes } = paramObject; //destructuring
    // không nên dùng forEach vì nó k ăn return(ép ngừng)
    for (const funcCheck of funcs) {
        let msg = funcCheck(value);
        if (msg) {
            createMsg(parentNode, controlNodes, msg);
            return msg;
        }
    }
    return "";
};
const clearMsg = () => {
    document.querySelectorAll(".is-invalid").forEach((inputNode) => {
        inputNode.classList.remove("is-invalid");
    });
    document.querySelectorAll(".invalid-feedback").forEach((divMsg) => {
        divMsg.remove();
    });
};
// sự kiện chính : sự kiện submit
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    //xóa các thông báo lỗi
    clearMsg();
    // dom tới các Controlnodes
    const emailNode = document.querySelector("#email");
    const nameNode = document.querySelector("#name");
    const genderNode = document.querySelector("#gender");
    const countryNode = document.querySelector("input[name='country']:checked");
    const passwordNode = document.querySelector("#password");
    const confirmedPasswordNode = document.querySelector("#confirmedPassword");
    const agreeNode = document.querySelector("input#agree:checked");

    const errorForm = [
        //email
        isValid({
            value: emailNode.value,
            funcs: [isRequired, isEmail],
            parentNode: emailNode.parentElement,
            controlNodes: [emailNode],
        }),
        //name
        isValid({
            value: nameNode.value,
            funcs: [isRequired, isName, max(50)], //currying
            parentNode: nameNode.parentElement,
            controlNodes: [nameNode],
        }),
        //gender
        isValid({
            value: genderNode.value,
            funcs: [isRequired], //currying
            parentNode: genderNode.parentElement,
            controlNodes: [genderNode],
        }),
        //country
        isValid({
            value: countryNode ? countryNode.value : "",
            funcs: [isRequired], //currying
            parentNode: document.querySelector(".form-check-country")
                .parentElement,
            controlNodes: document.querySelectorAll("input[name='country']"),
        }),
        //password
        isValid({
            value: passwordNode.value,
            funcs: [isRequired, min(8), max(20)], //currying
            parentNode: passwordNode.parentElement,
            controlNodes: [passwordNode],
        }),
        //confirmedPassword
        isValid({
            value: confirmedPasswordNode.value,
            funcs: [
                isRequired,
                min(8),
                max(20),
                isSame(passwordNode.value, "Mật khẩu", "Nhập lại mật khẩu"),
            ], //currying
            parentNode: confirmedPasswordNode.parentElement,
            controlNodes: [confirmedPasswordNode],
        }),
        //agree
        isValid({
            value: agreeNode ? agreeNode.value : "",
            funcs: [isRequired], //currying
            parentNode: document.querySelector("#agree").parentElement,
            controlNodes: [document.querySelector("#agree")],
        }),
    ];

    let isValidForm = errorForm.every((item) => !item);
    if (isValidForm) {
        alert("Form is valid");
        clearMsg();
    }
});