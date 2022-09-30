// 07-classInheritance
//class là cái khuôn
// bên trong class có constructor function(cái phễu), thuộc tính, method
// class sẽ dùng constructor function để tạo ra đối tượng

class User {
    constructor(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");
    }
    show(){
        console.log(`First name của tui là ${this.firstName},
                     Last name của tui là ${this.lastName}`);
    }
}

//anh muốn tạo 1 user tên là Điệp
let diep = new User("Lê Điệp"); //new User ám chỉ tới constructor của User
//diep có firstName vs lastName thôi
//nhưng trong diep có thuộc tính ẩn [[Prototype]]
//trong [[Prototype có cả 1 class User]]
console.log(diep.__proto__ == User.prototype); //true
console.log(diep);
//trong object Điệp có gì?
//  firstName: "Lê"
//  lastName: "Điệp"
//  [[Prototype]]: User.prototype => class User
//      trong class User có gì?
//              constructor
//              show()
//Trong constructor thì có Prototype, trong class thì có [[Prototype]]
//khi nhắc đến User là nhắc đến class hay constructor function
//  là nhắc đến constructor function
console.log(typeof User);//function(ám chỉ constructor)
console.log(User.prototype);//class User();
console.log(User == User.prototype.contructor); //true, vì User.prototype == class User, mà User.constructor thì == User là function(constructor)

//class còn được gọi với 1 cái tên nữa là 'syntactic sugar'
//'syntactic sugar': cú pháp kẹo đường -> ý chỉ sự thay đổi về mặt syntax cho để tiếp cận
//      nhưng không làm thay đổi hay thêm tính năng mới gì cả
// bởi vì ngay từ đầu chúng ta có thể tạo ra class mà không hề dùng đến từ khóa class
//      như các bài trước đã học

//tạo constructor function
function Student(fullName){
    [this.firstName, this.lastName] = fullName.split(" ");

    // this.show = function(){
    //     console.log(
    //         `First name của tui là ${this.firstName},
    //          Last name của tui là ${this.lastName}`);
    // };
}
Student.prototype.show = function() {
    console.log(
            `First name của tui là ${this.firstName},
             Last name của tui là ${this.lastName}`);
    };
let tuan = new Student("Phạm Tuấn");
console.log(tuan);

//điểm khac 1nhau giữa object tạo từ class và object tạo từ constructor function
//1. constructor function có thể tạo object mà k cần toán tử new
// let hue = User("Hồng Huệ"); //lỗi

let hung = Student("Phạm Hùng"); //vẫn chạy dc, vì nó là function, không phải class

//2. log User và Student
console.log(User);
console.log(Student);

//3. code bên trong class phải là use strict, không hoisting

//class mà nãy giờ đang tạo là class declaration
//  ta còn có Class Expression
let User1 = class ahihi {
    constructor(fullName){
        [this.firstName, this.lastName] = fullName.split(" ");
    }
    show(){
        console.log(`First name của tui là ${this.firstName},
                     Last name của tui là ${this.lastName}`);
    }
}
//nếu viết như này thì ahihi chỉ dùng dc trong body

/*Biểu diễn*/ 
// Class Expression
// tạo ra 1 function chuyên dùng để tạo ra class
//
function makeClass(){
    class ahihi{
        constructor(fullName){
            this.fullName = fullName;
        }
        show(){
            console.log(`Fullname của tui là ${this.fullName}`);
        }
    }

    return ahihi;
}

let User3 = makeClass();
let dieppp = new User3("Điệp Lê");
dieppp.show(); //Fullname của tui là Điệp Lê

//
// computed Name [...]
class User5 {
    firstName = "Nguyễn";
    ["show" + "Infor"](){
        console.log("Hello");
    }
}
let hue1 = new User5();
hue1.showInfor();

// cảnh giác với this trong class
class Button {
    constructor(value){
        this.value = value;
    }
    click(){
        console.log("giá trị là: " + this.value);
    }
}
//
let btn = new Button("Hello");
btn.click(); //giá trị là: Hello

//cẩn thận this trong callback
setTimeout(btn.click, 1000); //giá trị là underfined //vì khi callback function nó gọi thì chỉ gọi click chứ không gọi btn.click, mà click .this không ai gọi thì undefined

//c1: wrapper function: tạo 1 hàm khác bọc hàm đó lại
setTimeout(() => {
    btn.click();
}, 1000); //giá trị là Hello

//c2: cách không tốt
class Button2 {
    constructor(value){
        this.value = value;
        this.click = this.click.bind(this); //nhờ vào bind
    }
    click(){
        console.log("giá trị là: " + this.value);
    }
}
let btn2 = new Button2("Huhu");
setTimeout(btn2.click, 1000);
//c3: arrow thay thế cho method (cũng là cách không tốt)
class Button3 {
    constructor(value){
        this.value = value;
        this.click = this.click.bind(this); //nhờ vào bind
    }
    click = ()=> {
        console.log("giá trị là: " + this.value);
    }
}
let btn3 = new Button3("Hihi");
setTimeout(btn3.click, 1000); //giá trị là Hihi

//Class inheritance: kế thừa thông qua class
//lịch sử: khi mà giống loài lập trình viên mới được hình thành
// Ngài js toàn năng không tạo ra class, ổng chỉ tao ra constructor
// dùng để tạo ra object, và kế thừa thông qua prototype
//---
// về sau vì cú pháp code khó đọc, khó hiểu, ổng phát triển ra
// cú pháp kẹo đường để thay thế (không thay thế được)

// class có trước hay constructor có trước? constructor

// trước khi có class ngta có kế thừa không? có
// vậy thời điểm đó họ kế thừa bằng gì ? prototype của constructor

// về sau có class dòi, ta có cách viết kế thừa dễ đọc hơn
// chỉ cần dùng từ khóa "extends"

//
class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }
    run(speed){
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }
    stop(){
        console.log(`${this.name} stands still`);
    }
}
let ani = new Animal("My Animal");
//trong ani có gì?
//      speed = 0
//      name = "My Animal"
//      [[Prototype]] : Animal.prototype => Class Animal
//          constructor
//          run()
//          stop()
//          [[Prototype]] : Object.prototype => class Object
//              ...
//              [[Prototype]] : Null

//Rabbit kế thừa tất Animal
//Rabbit có tất cả những gì animal có
//  những method riêng của Rabbit thì animal không có
class Rabbit extends Animal {
    constructor(name){
        super(name); //super: new Animal(name)
    }
    hide(){
        console.log(`${this.name} hides!!!`);
    }
    stop(){
        setTimeout(() => {
            super.stop();
        }, 1000);
    }
}
//
let rb = new Rabbit("White Rabbit");
// trong rb có gì
//      name: "white Rabbit"
//      speed: 0
//      [[Prototype]]: Rabbit.prototype => Class Rabbit
//          constructor
//          hide()
//          [[Prototype]] : Animal.prototype => Class Animal
//          constructor
//          run()
//          stop()
//          [[Prototype]] : Object.prototype => class Object
//              ...
//              [[Prototype]] : Null
rb.run(5); //White Rabbit runs with speed 5
rb.hide(); //
// ani.hide(); //không nha, ani được tạo bằng animal
//nếu ani dùng method stop thì nó dùng method của Animal
//rb thì dùng của Rabbit (nhưng mà nó có stop của Animal luôn)
class Animal1{
    name = "isAnimal"; //class field
    constructor(){
        console.log(this.name);
    }
}

class Rabbit1 extends Animal1{
    name = "isRabbit"; //class field
}
let ani1 = new Animal1(); //isAnimal
let rb1 = new Rabbit1(); //isAnimal
//class field, nếu constructor đề cặp tới thì nó mặc định dùng class field
//      của nó

