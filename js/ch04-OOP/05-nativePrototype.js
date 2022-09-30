//05-nativePrototype
//https://javascript.info/native-prototypes (cây phả hệ)
//Tổng kết các khái niệm như sau:
//-[[Prototype]] là 1 thuộc tính ẩn trong object(function).đại diện cho prototype thực tế
//-__proto__ là get/set truy cập của [[Prototype]]
//-thuộc tính 'prototype' tồn tại trong constructor function nó là 1 thuộc tính bình thường
//      không phải là [[Prototype]]. nó giúp ta kế thừa khi tạo object từ constructor function

//Object.prototype

let obj = {}; //đối tượng không có thuộc tính gì hết
console.log(obj.toString());
console.log(obj.__proto___ == Object.prototype); //true
console.log(Object.prototype.__proto__); //null, cây phả hệ
console.log(obj.__proto__.__proto__); //null

let mang1 = [1, 2, 3];
console.log(mang1.__proto__ === Array.prototype); //true
console.log(mang1.__proto__.__proto__ === Object.prototype); //false
console.log(mang1.__proto__.__proto__ === Array.prototype.__proto__); //true, [[Prototype]] == __proto__

//mang1 < Array(toString) < Object(toString) < null
//nếu mang1.toString là nó đang xài method của Array hay của Object?
//con kế thừa của cha và nên có thêm thuộc tính mới nên Array > Object (con chỉ có bự or lớn hơn cha, k có bé hơn)
//overide: vượt mặt, thằng con vượt mặt thằng cha
// mang1 sẽ xài toString của thằng cha gần nhất (Array)
//
let a = 4; 
console.log(a.toString()); //Được! Vì nó dc quy về object, Number.prototype


