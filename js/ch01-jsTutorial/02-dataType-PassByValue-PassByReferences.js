console.log("Bài 2: dataType/ tham trị/ tham chiếu");
// I Datatype
// I-Primititive datatype: kiểu dữ liệu nguyên thủy
//      number : 10, 12.4
//      string : 'anh điệp đẹp trai 2 mái nhà'
//      boolean : true(1) | false(0)
//      null : rõng, nhưng biết kiểu dữ liệu
//      undefined: rỗng, nhưng không biết kiểu dữ liệu

//giống nhau về giá trị, khác nhau về kiểu
console.log(typeof null); // kiểu của null là object nhưng nó thuộc primitive
console.log(typeof undefined); // kiểu của undefined

//==: so sánh châm chước | so sánh về giá trị
//===: so sánh nghiêm khác | so sánh về giá trị và kiểu
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(2 == "2"); //true
console.log(2 === "2"); //false

//Undefined: rỗng, không biết giá trị, không biết kiểu
// tạo biến mà không gán giá trị
// thuộc tính chưa khởi tạo trong object
const khoa = { name:'Khoa', money: 10000000 };
console.log(khoa.girlFriend); //undefined

//truyền thiếu parameter
function handle1(a, b){
    return b;
}

let result = handle1(2);

console.log(result); //undefined 

//*Null: rỗng, không biết giá trị, nhưng biết kiểu
let str1 = " "; //rỗng (chuỗi rỗng)
str1 = null; //rỗng (object) nhưng được xếp vào primitive

const myBike = null; //undefined
// console.log(myBike.name);    //error
//-----
// I.2 Object datatype: là những kiểu khác primitive
// Plain Object : đối tượng phẳng () | không có gì lồng thêm bên trong
var student = { name:"Điệp", point: 10 };
//array
var array1 = ["Hoa", "Cúc", "Huệ", 1999];
//regular expression: tính là object
var regex = /ab+c/;

//Function typeof là function nhưng thuộc Object
console.log(typeof handle1); //function nhưng thuộc object

console.log(10 / "D"); //NaN: not a number
console.log(typeof NaN); //number (tục =)) )

//Tất cả các cách khai báo với kiểu dữ liệu nguyên thủy đều là constructor
//Wrapper Class: Class Trai bao
var str = "ahihi";
var str2 = new String("ahihi"); //Wrapper Class
console.log(str);
console.log(str2);
console.log(str === str2); //false, 1 thằng primitive | 1 thằng object(box)
console.log(str == str2.valueOf()); //true
// .valueOf() lấy cái core bên trong hộp
console.log(str == str2); //true auto-unboxing

//ép kiểu bằng wrapper constructor
//số-> chuỗi
var year = String(1999);
console.log(year);
//chuỗi-> số
year = Number("1999");
console.log(year);

//bàn riêng về Boolean
var isFind = Boolean(1999); // số
console.log(isFind); //true
//
isFind = Boolean(0); //số 0
console.log(isFind); //false
//
isFind = Boolean("0"); //chuỗi có ký tự 0
console.log(isFind); //true
//
isFind = Boolean("") // chuỗi rỗng
console.log(isFind); // false
//
isFind = Boolean(null); //chuỗi rỗng là false
console.log(isFind); //false
//
isFind = Boolean({}); //object rỗng
console.log(isFind); //true
//
isFind = Boolean([]); //array rỗng
console.log(isFind); //false
//
isFind = Boolean(false); //false
console.log(isFind); //false

//Falsy: trong js cái gì rỗng là false
//      null, undefined, 0, -0, "", false, NaN
//Truthy: ngược lại, có giá trị là true
//      chuỗi khác rỗng, số khác 0, object đều là true

//1. Pass by value: truyền tham trị;
let a = 1;
let b = a;
b = 2;
// a = 1 | b = 2
//vd2:
function updatePoint(pointCurrent){
    pointCurrent = 10;
}
var myPoint = 4;
updatePoint(myPoint);
//pointCurrent = myPoint = 4
//pointCurrent = 10
console.log(myPoint); //4

//Pass by references: truyền tham chiếu
var hotBoy1 = { name:"hotGirl", size: "E cub" };
var hotBoy2 = hotBoy1; //trỏ chung tới 1 object
hotBoy2.size = "D cub";
console.log(hotBoy1); //

// OPERATOR Toán tử
//trong js có 10 loại toán tử
/*
1  Assignment            gán =
2  Comparison            so sánh ==  ==
3  Arithmetic            toán hạng
4  bitwase               bitwase
5  logical               logic && ||
6  String                chuỗi
7  Conditional(ternary)  ba ngôi
8  Comma                 phẩy
9  Unary                 một ngôi
10 Relational            Quan hệ
*/
// 
// Arithmetic Operator toán tử toán hạng
//  + | - | * | ** | / | % | variable++ | variable-- | ++variable | --variable |
//  không được n++ ++n --n n-- với n là số bất kỳ
// 2**3 = 2 ^ 3;

// Assignment Operator toán tử gán
//  = | += | -= | *= | **= | /= | %= |
// 

// Comparison Operator toán tử so sánh
//  == bằng giá trị là được (không quan tâm kiểu)


//toán tử ba ngôi là gì
var diep = "đẹp trai";
var isDepTrai = diep == "đẹp trai" ? true : false;
console.log(isDepTrai); //true

//logic AND(&&) OR(||) !(phủ định kết quả của cả mệnh đề condition)
//  true && false false
//  true && true  true
//  false&& false false
//  true || false true
//  true || true  true
//  false|| false false
//  AND(&&) luôn đi tìm mệnh đề false thấy false là dừng trả ra false 
//                                    thấy 0 là đừng trả ra 0
//  OR(||) luôn đi tìm mệnh đề true thấy true là dừng trả ra true 
//                                    thấy 1 là đừng trả ra 1

console.log(0 && 1); //0 not false
console.log(0 || 0 || 4); // //4
console.log(0); //0
console.log(!0); //true
console.log(""); //""
console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
console.log(!""); //true
console.log(!"" && 0 && 1); //0
