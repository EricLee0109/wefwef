console.log("07-objectMethod-this-function");
//
//object: đối tượng
//      tất cả những gì sở được, đếm được đề là đối tượng
//      các đối tượng(object) có thể được miêu tả bằng properties(thuộc tính)
//          các đội tượng có hành động function 
//              (hàm ở ngoài gọi là function, nếu hàm được viết trong object
//                      thì được gọi là method - phương thức)

//
let promotionBoy1 = {
    nickName: "Lê Mười Đẹp", // properties
    age: 24, //.................properties
    //hành động: method(function)
    //fd
    sayHi(){
        console.log("Ahihi quẹo lựa quẹo lựa");
    },
    //fe
    sayHi1: function(){
        console.log("Ahihi quẹo lựa quẹo lựa");
    },
    //fo
    sayHi2: function(){
        console.log("Ahihi quẹo lựa quẹo lựa");
    },
};
//cách tạo method bằng fe|fd về mặt lý thuyết có sự khác nhau trên cơ
//sở kế thừa | nhưng không đáng kể
//ngta thường chọn viết method bằng fd để đặt hiệu quả rút gọn
//dân chơi object chuộng fd
//dân chơi function chuộng fe|fa

//ta có thể tạo thêm prop hay method ngay sau khi đã tạo object
console.log(promotionBoy1.money); //undefined
promotionBoy1.money = 10000;
promotionBoy1.chuiKhach = function(){
    console.log("Sao đéo mua?");
};

//NÂNG CAO 1 TÝ
//THIS trong method
let promotionBoy2 = {
    nickName: "Lê Mười Đẹp", 
    age: 24, 
    //fd
    showName(){
        console.log("nickname là: " + this.nickName); //this: undefined
    },
    //fe
    showName1: function(){
        console.log("nickname là: " + this.nickName); //this: undefined
    },
    //fo
    showName2: () => {
        console.log("nickname là: " + this.nickName); //this: undefined
    },
};
//this chỉ có giá trị khi runtime | khi mà hàm được gọi thì this mới có giá trị
promotionBoy2.showName(); //"nickname là: Lê Mười Đẹp" 
//showName được ai gọi: promotionBoy2 | fd
//  showName:fd => giam this => ép this phải là người gọi
//      this => promotionBoy2

promotionBoy2.showName2(); //"nickname là: undefined"
//showName2 là ai gọi: promotionBoy2 | fa
//  fa = thả this => this là global(window)
//      this là window => window.nickName => undefined

//=> viết method thì không chơi với fa

//NÂNG THÊM 1 TÝ
//tại sao phải cần có this
let promotionBoy3 = {
    nickName: "Lê Mười Đẹp", 
    age: 24, 
    //fd
    showName(){
        console.log("nickname là: " + promotionBoy3.nickName); //this: undefined
    },
};
//tại sao dùng this mà không dùng promotionBoy3
let promotionBoy4 = promotionBoy3; //2 chàng chỏ 1 nàng
promotionBoy3 = null;
// promotionBoy4.showName(); // lỗi, vì null không có nickName
//=> this không ràng buộc giá trị, ai gọi tui tui là người đó 


//NÂNG CAO 1 TÝ NỮA
//this trong function trong method(object > method > function > this)
let promotionBoy5 = {
    nickName: "Lê Mười Đẹp", 
    age: 24, 
    //fd
    showName(){
        let arrow = ()=>{
            console.log("nickname là: " + this.nickName);
        };
        arrow();
    },
    //fd
    showName1(){
        let expression = function(){
            console.log("nickname là: " + this.nickName);
        };
        expression();
    },
};
promotionBoy5.showName(); //"nickname là: Lê Mười Đẹp"
//showName ai gọi: promotionBoy5 : fd
//      arrow: ai gọi? Không ai gọi : fa => không giam this
//          fa thả this, nhưng sau đó this lại bị chặn showName
//              => showName là fd => giam this => this phải là ng gọi showName
//              =>>> this là promotionBoy5
promotionBoy5.showName1();
//showName ai gọi? promotionBoy5 : fd => giam this
//  expression: ai gọi? không ai gọi : fe => giam this
//      this bị giam nhưng không có ai gọi thì...
//      (use strict)          |     normal
//          undefined         |     global(window)
//  undefined.nickname  Lỗi   |  window.nickname => undefined


//NÂNG LÊN 1 TÝ NỮA NỮA
//this trong callback
//callback: nhận 1 hàm vào làm paratmeter
let promotionBoy6 = {
    nickName: "Lê Mười Đẹp", 
    age: 24, 
    //fd
    showName(){
        setTimeout(function() {
            console.log("nickname là: " + this.nickName);
        }, 1000);
    },
};
promotionBoy6.showName();
//this là gì?
//showname : promotionBoy6 : fd => giam this
//  hàm vô danh: không ai gọi :fe => giam this
//          use strict          |   normal
//          undefined           |   global(window)
//      underfined.nickName Lỗi |   window.nickName => undefined

//
let promotionBoy7 = {
    nickName: "Lê Mười Đẹp", 
    age: 24, 
    //fd
    showName(){
        setTimeout(() => {
            console.log("nickname là: " + this.nickName);
        }, 1000);
    },
};
promotionBoy7.showName(); //"nickname là: Lê Mười Đẹp"
//showName : promotionBoy7 : fd => giam this
//  hàm vô danh : không ai gọi : fa => không giam this
//      this ra ngoài gặp showName là fd
//          showName : fd => giam this => ép this phải là người gọi
//          =>>> this = promotionBoy7

//NÂNG CAO: HOF
//Higher Order Function: 
//  1. callback : hàm nhận vào 1 hàm làm parameter
//  2. closure
//  3. currying

//viết hàm nhận vào 2 số, trả ra tổng của 2 số đó
let sumDemo = (a, b) =>{
    return a + b;
}
//HOF
sumDemo = (a) => {
    return (b) => {
        return a + b;
    };
}
//viết tắt của trên
//truyền cho a, nhận b, trả ra a + b, tiếp tục truyền vào b, trả ra a + b
sumDemo = (a) => (b) => a + b;
// console.log(sumDemo(2, 5)); //7
console.log(sumDemo(2));
/*
    (b) => {
        return a + b;
    };
*/
console.log(sumDemo(2)(5));

//HOF: có 3 khái niệm
//1. callback: hàm nhận vào 1 hàm làm parameter
const array1 = [1, 2, 3, 4, 5];
array1.forEach(item => {
    console.log(item);
});
//1 2 3 4 5

//2. Closure
//  2.1 Lexical scpoing: hàm con dùng biến của hàm cha (cha có cái biến, con xài cái biến đó)
//  2.2 Closure: 1 function return 1 function

//ứng dụng: tạo ra 1 hàm chuyên render id(máy tạo key tự tăng)
const initIdentity = () => {
    let newID = 0;
    return () => ++newID;
};

console.log(initIdentity()); //() => ++newId; | kèm theo newId = 0
console.log(initIdentity()()); //1 | kèm theo newId = 0
console.log(initIdentity()()); //1; | kèm theo newId = 0
//trong quá trình gọi initIdentity()()
//đã gọi thằng initIdentity() => lại tạo newId = 0

//xài đúng cách
let demoClosure = initIdentity(); //() => ++newId;
console.log(demoClosure()); //1
console.log(demoClosure()); //2
console.log(demoClosure()); //3
console.log(demoClosure()); //4
console.log(demoClosure()); //5

//------
//3. currying: kỹ thuật chuyển đổi từ 1 function nhận vào nhiều parameter
//          thành những funciton liên tiếp có tham số

//viết 1 hàm xử lý 3 bài toán
//  1 hàm có thể sử dụng để giải quyết 3 bài toán
//      Tìm các số từ 0 - 10 là số lẻ
//      Tìm các số từ 0 - 20 là số chẵn
//      Tìm các số từ 0 - 30 là số chia 3 dư 2
//=> callback | callback + currying
//làm 1 cái hàm nhận vào 1 số number, bà 1 hàm check theo yêu cầu
function handle3(number, funct){
    let result = [];
    for(let i = 0; i <= number; i++){
        if(funct(i)) result.push(i);
    }
    return result;
}
console.log(handle3(10, (number) => number % 2 == 1));
console.log(handle3(20, (number) => number % 2 == 0));
console.log(handle3(30, (number) => number % 3 == 2));

//currying
const handle4 = (number) => (funct) => {
    let result = [];
    for(let i = 0; i <= number; i++){
        if(funct(i)) result.push(i);
    }
    return result;
}
console.log(handle4(10)((number) => number % 2 == 1));
//xét về mặt ứng dụng trong code thì bth thì currying k có tác dụng
//chỉ làm code khó đọc hơn thôi | react + angular thì nó mạnh

//------------------
//Call Apply Bind
const people = {
    print(age, location){
        console.log(this.fullname + " " + age + " " + location)
    },
};
people.print(10, "TP HCM"); //undefined 10 TP HCM
//this? people
// people.fullname => undefined

//ta có thể bẻ cong đường dẫn của this Call Apply Bind
const diep = { fullname: "Lê Mười Đẹp" };
//1. call(object,... paratmeter cũ)
people.print.call(diep, 10, "TP HCM"); //Lê Mười Đẹp 10 TP HCM
//2. apply(object,... [paratmeter cũ])
people.print.apply(diep, [10, "TP HCM"]); //Lê Mười Đẹp 10 TP HCM
//2. bind(object)(... paratmeter cũ)() => closure
//2. bind(object)(... paratmeter cũ)() => closure
people.print.bind(diep, 10, "TP HCM")(); //Lê Mười Đẹp 10 TP HCM
people.print.bind(diep)(10, "TP HCM"); //Lê Mười Đẹp 10 TP HCM

let promotionBoy8 = {
    nickName: "Lê Mười Đẹp", 
    age: 24, 
    //fd
    showName(){
        setTimeout(function() {
            console.log("nickname là: " + this.nickName);
        }.bind(this), 1000);
    },
};
promotionBoy8.showName();
//datetime
//thời gian trong js là object | dựa vào milisecond
//được tính vào 1/1/1970 theo chuẩn UTC
//có 4 cách khởi tạo
let a = new Date(); //Wed Aug 17 2022 21:07:15 GMT+0700 (Indochina Time)
a = new Date(1660745320788); //Wed Aug 17 2022 21:08:40 GMT+0700 (Indochina Time)
a = new Date("2022-8-17"); //Wed Aug 17 2022 00:00:00 GMT+0700 (Indochina Time)

a = new Date(2022, 7, 17, 21, 10, 32, 100); //Wed Aug 17 2022 21:10:32 GMT+0700 (Indochina Time)
//y/m-1/d/h/m/s/ms

// getDate()        : lấy ngày trong tháng //16
// getDay()         : lấy ngày trong tuần (0: chủ nhật - 6:thứ 7);
// getFullYear()    : lấy năm
// getHours()       : lấy giờ 0-23
// getMilliseconds(): lấy mili giây (0-999)
// getMinutes()     : lấy về phút (0-59)
// getMonth()       : lấy về tháng (0 -11)
// getSeconds()     : lấy về giây (0-59)
// toISOString()    : lấy định dạng thời gian chuẩn
//dùng toISOString để bỏ vào DBI/ vì các ngôn ngữ trình duyệt khác
//đểu có thể chuyển từ ISO này về dạng bth được
console.log(a);