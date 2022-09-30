console.log("Bài 10: String Method");

//chuỗi trong js được bọc bằng ' "
//method trong string

//1.Length //prop của string
let str = "ahihi";
console.log(str.length); //5
//2.indexOf()//tìm ra vị trí đầu tiên của chuỗi hoặc char trong str
console.log(str.indexOf("h")); //1
console.log(str.indexOf("ih")); //2
console.log(str.indexOf("s")); //-1
//Tách chuỗi
//1.slice(start, end) trả ra từ start đến end -1
var x = "xin chào PiedTeam, mình là Khoa";
let result = x.slice(9,17); //PiedTeam
console.log(result);
let result1 = x.slice(19,31); //mình là Khoa
console.log(result1);
console.log(x);
//string là immutable: object có method không làm thay đổi object mà chỉ
// trả ra 1 object mới sau xử lý

// cắt ngược
console.log(x.slice(-22, -14)); //PiedTeam

// cắt 1 parameter
console.log(x.slice(9)); //"PiedTeam, mình là Khoa"
// cắt 1 parameter theo chiều ngược
console.log(x.slice(-12)); //"mình là Khoa"

//2. subString(start, end) cũng cắ theo start đến end - 1,
//                  giống slice nhưng mà không có chiều âm

//3. substr(start, length) return ra chuỗi tính từ start và có độ dài là length
x = "xin chào PiedTeam, mình là Khoa";
console.log(x.substr(9, 8));// PiedTeam

//I - các method phổ biến
//1. replace: thay thế chuỗi
var str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
// str1.replace("nhiều", "ít"); //vì string là Immutable không dc viết như vậy
str1 = str1.replace("nhiều", "ít");
console.log(str1); //"PiedTeam có ít bạn rất nhiều tiền"
//cách 2
str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
str1 = str1.replaceAll("nhiều", "ít");
console.log(str1); //"PiedTeam có ít bạn rất ít tiền"
//cách 3
str1 = "PiedTeam có nhiều bạn rất nhiều tiền";
str1 = str1.replace(/nhiều/g, "ít");
console.log(str1); //"PiedTeam có ít bạn rất ít tiền"

//II. Chuyển đổi hoa thường .toUpperCase .toLowerCase
//3. concat() nối chuỗi
str1 = "xin chào";
str2 = "PiedTeam";
str3 = str1.concat(" ", "mừng các bạn đến với", " ", str2); //nối bao nhiêu cũng được
//nối bằng: + 
str3 = str1 + " " + "mừng các bạn đến với" + " " + str2;
console.log(str3);
//4. trim(): xóa khoảng cách 2 bên
str1 = "    xin     chào      các      bạn   ";
str1 = str1.trim(); //chỉ xóa được khoảng cách 2 bên
console.log(str1);
//
str1 = "    xin     chào      các      bạn   ";
str1 = str1.replace(/\s+/g, " ").trim();
console.log(str1);
//
str1 = "    xin     chào      các      bạn   ";
//"Khoa/01/09"
str1 = str1
        .split(" ") //dùng để băm
        .filter((items) => items != "") // lọc có điều kiện
        .join("-"); //nối các phần tử
console.log(str1); //xin-chào-các-bạn
//5. so sánh chuỗi == / ===

//6. chatAt(inedex) return char ở vị trí index
x = "Khoa  đẹp trai";
console.log(x.charAt(2)); //o
x[2] = "e"; //không lỗi | không ăn
//vì String là immutable, nó vẫn trả ra giá trị gốc





