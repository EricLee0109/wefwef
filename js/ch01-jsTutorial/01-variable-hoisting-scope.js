// "use strict";
console.log("Bài 1: Khai báo biến, Hoisting, Scope");

//var  : xuất hiện từ thửa sơ khai của js
//reassigning: gán lại giá trị
//Khai báo và gán biến
var name1 = "Điệp";
console.log(name1); //"Điệp"
name1 = "ahihi đồ chó"; //reassigning (gán lại)
console.log(name1); //"ahihi đồ chó"

//khai báo biến mà không gán
var age; //undefined
console.log(age) //undefined
age = 10;
console.log(age) //10

//Quy tắc đặt tên cho biến 
// không bắt đầu bằng số -> phải bằng chứ cái
// áp dụng commelCase, underscore, pasal case (UpperCammelCase)
// được phép dùng _ (private) và $ (protected) (Programmers tự quy ước với nhau)
var _emThatDamDang;
var $em_that_dam_dang;

//Hoisting với var
//hoisting là tính năng, không phải bug
console.log(msg); //undefined
var msg = "hello";
console.log("hello") //"hello"

// var msg;
// console.log(msg);    nó sẽ móc ngược cái khai báo biến lên trên
// msg = "hello";       được gọi là Hoisting

//NormalMode/ Use strict mode
message = "thông báo"; //tự hiểu là tạo biến message
//NormalMode thì dòng code 36 rất bth, máy tự táo biến message
//Use strict mode thì dòng code 36 được tính là sai

//Let và const (ES6 2015)
//Let và const thay thế cho var
//Let giống y chang var (Let thì không có hoisting)
//const: hằng số
const a = 10; //giống như sự chung thủy vậy, không thay đổi

//const với primitive(kiểu nguyên thủy)

//const với object(đối tượng)
const myGirl = { name:'Tiến', height: 160 }; //dù giá trị bên trong có thay đổi thì vẫn liên kiết vs myGirl
console.log(myGirl.name); //"Tiến"
myGirl.name = "Tiến lùn";
// myGirl = { name:'Tiến lùn', height: 160 }; //bậy nha, hết const
//const với object thì được thay đổi giá trị bên trong vẫn bảo toàn const

//array cũng là object
const array1 = [1, 2, 3, 4 , 5];
array1.push(6);
// array1 = [1, 2, 3, 4, 5, 6]; //không được, mất liên kết

//scope
// Global scope: toàn cục
// Function scope: trong hàm
// Block scope: cục bộ
// var: out scope
if(true){
    let toilet = "thơm";
}
console.log(toilet); //toilet nằm trong nhà, sao mà biết nó thơm hay k :))

// Let/const không có hoisting | var: có hoisting (dù use strict hay k)
//          có blockScope      |  var outScope

