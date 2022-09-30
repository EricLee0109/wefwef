//cookie
//cho phép lưu trữ tin người dùng web vào máy tính
const date = new Date(2022, 7, 26).toString;
document.cookie = `username = Khoa; expires = ${Date}; path=/`;
console.log(document.cookie);

//khi mà ngta thoa tác với cookie thì ngta dùng thư viện js.cookie

//localStorages : hiệu lực lưu trữ vĩnh viễn
localStorage.setItem("name","Khoa dễ thương");
//localStorage hay Cookie: CHỈ Lưu chuỗi | hoặc Json
const profile = {
    name: "Anh Điệp đạp chai",
    age: 24.
};
console.log(profile);
//biến object thành chuỗi JSON
const str = JSON.stringify(profile);
console.log(str);
//lưu trữ JSON lên localStorage
localStorage.setItem("profile", str);

//tui muốn lấy cái JSON đó về
let str1 = localStorage.getItem("profile"); //lấy đúng cái chuỗi
console.log(str1);
//biến object từ chuỗi thành mảng
let object = JSON.parse(str1);
console.log(object);

