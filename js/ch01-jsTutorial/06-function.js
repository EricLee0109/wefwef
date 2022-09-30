console.log("Bài 6: Hàm - function");
//Hàm trong js dc chia làm 2 loại
//Function declaration | Function expression
//1. Function declaration(khai báo hàm) : có hoisting
handle1(); //hoisted
function handle1(){
    console.log("Tui là hàm tạo bằng Function declaration");
}
handle1(); //call function

//2. Function expression(biểu thức hàm) : không hoisting
const handle2 = function() { //dù dùng var, const, let thì đều vậy
    console.log("Tui là hàm tạo bằng Function expression");
};
handle2(); //call function

//IIFE(immediately invokable function expression)
//mình tạo hàm không đặt tên và dùng liền sau khi tạo "function expression"
//IIFE + async wait | promise   nhớ dùng ;trước khi xài IIFE để tránh phát sinh lỗi

;(function(){ 
    let a = 10;
    let b = 20;
    console.log(a + b);
})();
//nên có ;
//ứng dụng của thằng này là code tạo hàm không cần tên, dùng liền,
//không có tính tái sử dụng

//Anonymouse Function (FE)
//Callback: gọi lại | hàm nhận 1 hàm làm đối số(parameter)
//function1(function2())    --callback | functione2() callback function

//setTimeout(handle1, milisecond)
//sau milisecond sẽ call cho function
//setTimeout: callback | handle1: callback function

var handle3 = function(){
    console.log("ahihi đồ chó");
};
// setTimeout(handle3, 3000);
//viết ngắn hơn đỡ đặt tên
// setTimeout(function(){
//     console.log("ahihi đồ chó");
// }, 3000);

setTimeout(() => {
    console.log("ahihi đồ chó");
}, 3000);
//arrow function (nó là cách viết tắt của FE(Function Expression))
// thằng này sẽ thả this | và this sẽ đi đến được global(window)

function handle4(){
    console.log(this);
};

const handle5 = function(){
    console.log(this);
};

const handle6 = () =>{
    console.log(this);
};

//chạy          normal(châm chước)      use strict(khắt khe)
handle4(); //FD     windowObject           undefined
handle5(); //FE     windowObject           undefined
handle6(); //FA     windowObject           windowObject

//this nó đại diện cho người gọi nó
//FD    | FE giam this (tốt) | nếu có cụ thể người gọi thì this mới có giá trị
//              còn không thì this là undefined
//FA (Function Express(arrow function)) thì luôn thả this ra ngoài 

//vd2:
var person1 = {
    fullname: "Điệp đẹp trai",
    getNameByFd(){
        console.log(this.fullname); //lúc này this không undefined
    },
    getNameByFe : function(){
        console.log(this.fullname); //lúc này this không undefined
    },
    getNameByFa : () => {
        console.log(this.fullname); //lúc này this không undefined
    },
};
//this đại diện cho thằng nào gọi nó
person1.getNameByFd(); //"Điệp đẹp trai"
person1.getNameByFe(); //"Điệp đẹp trai"
person1.getNameByFa(); //window.fullname => undefined
//vì arrow function không giam this nên this đi ra global tìm đến window,
//do window không có fullname => undefined

//=> nếu bạn viết hàm có this thì đừng dùng arrow function
//      .call   .blind

//phân biệt parameter(tham số) và argument(đối số)
function handle7(a, b = 10){
    console.log(a + b);
} //b = 10 default parameter
//a, b parameter (tham số | biến đang đợi tham khảo giá trị)
handle7(3, 5); //3, 5 là argument(đối số | số cho parameter tham khảo)
//a = 3, b = 5
//default parameter
handle7(3);//13, Nếu không truyền tham số cho b thì nó sẽ dùng default parameter
//a = 3, b = 10

//tham số còn lại | tham số nghỉ | tham số đợi (rest parameter)
function handle8(a, b, ...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
//...c : rest parameter | nếu không có giá trị thì nó là [] mảng rỗng
//nếu có giá trị nó là mảng
handle8(1, 2, 3, 4, 5, 6);
//a : 1
//b : 2
//c : [3, 4, 5, 6]
//ứng dụng:
//viết hàm nhận vào 1 đống giá trị, rồi tính tổng số đó
function sumAll(...numbList){
    let sum = 0;
    numbList.forEach((items) => {
        sum += items;
    });
    return sum;
}
let result = sumAll(1, 2, 3, 4, 5, 6, 7); //truyền bao nhiêu tùy thích
console.log(result);

//Bài 9: Number methods
//không ai dùng js để làm app ngân hàng
//số trong js chỉ có dạng number
//số nguyên, đối với số nguyên độ chính xác của nó là 15 chữ số
var x = 999999999999999; //15   999999999999999
x = 999999999999999; //16   1000000000000000
//đối với số thập phân, thì độ chính xác là 17
x = 0.2 + 0.1; //0.30000000000000004
x = (0.2*10 + 0.1*10) / 10; //0.3
x = Number((0.2 + 0.1).toFixed(1));
//toFixed(1) trả ra String | nên ép kiểu về Number
//          bằng number(Wrapper Constructor)

//Math.js(nodejs)
//số + số = số
//số + string = string
console.log(2 + 2); //4
console.log(2 + "2"); //"22" 
console.log(2 + "d"); //"2d" 
//số - string 
console.log(2 - "2"); //0 
console.log(2 - "d"); //NaN 
console.log(2 / 0); //infinity 
console.log(-2 / 0); //-infinity
x = 07; //không phải là 7 mà là hệ Octal(hệ 8)
x = 0xff; //hệ hexa(16)

//ép số về string
x = 10;
//x = String(x); //wrapper constructor
x.toString();//immutable
console.log(x);
