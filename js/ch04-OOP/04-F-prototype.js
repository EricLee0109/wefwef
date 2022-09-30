//04-F-prototype
//class(khuôn)
//trong cái không có contructor(cái phễu) dùng để class đúc object
//class muốn đúc ra 1 object sẽ dùng 1 cái phễu
//class muốn đúc ra 1 object sẽ dùng 1 cái constructor
// ở trong js thì constructor có thể nằm độc lập
//contructor k cần class
function car(name, price){
    this.name = name;
    this.price = price; 
}; 

const factory = {
    date: "2021", 
};

//tạo ra con xe auto từ constructory car
let audi = new car("Audi", "2 tỏi");
console.log(audi);//=> class -> contructor -> prototype, vòng lặp vô hạn vì cách tạo constructor
console.log(audi.date);//undefined
car.prototype = factory;
console.log(audi.date); //đúc ra trước khi factory được update nên không được updat
let toyota = new car("Toyota", "2000");
console.log(toyota.date);//đúc ra sau khi factory được update //2021

//JS có tính năng kế thừa prototype từ khi bắt đầu, là 1 trong các tính năng lõi của js
//trong quá khứ không có cách nào truy cập trực tiếp đến nó
//chỉ có cách là dùng thuộc tính prototype của constructor function
//F.prototype ở đây nghĩa là thuộc tính bth đc đặt tên là prototype
//nó có sẳn khi khởi tạo constructor

//prototype !== [[Prototype]]

//prototype chứa class của constructor function
//constructor có nhiệm vụ cung cấp [[Prototype]] cho các object đc tạo ra từ nó
//bằng cách cho [[Prototype]] đó bằng với Class chứa constructor(hoặc class tự thêm)
car.prototype = factory
audi = new car('audi','2 tỷ')
console.log(audi.date) //*2021

//lưu ý rằng nếu như ta thay dổi prototype này thì thằng object trước đó k thay đỗi
car.prototype = {location: 'VietNam'}
console.log(audi.location)

//F.prototype mặc định , thuộc tính constructor
// mỗi function đều có thuộc tính prototype ngay cả khi chưa gán hoặc cung cấp 
//      prototype mặc định là 1 object chứa thuộc tính là constructor trỏ ngược lại contructor function đó

function Animal(name){
    this.name = name
}

console.log(Animal.prototype) //Animal{}
console.log(Animal.prototype.constructor === Animal) //true
//nên nếu như có 1 object đc tạo ra từ constructor function này thì nó sẽ có constructor
//                                                                  của prototype
let dog = new Animal();
console.log(dog.constructor)//*Animal{}
console.log(dog.constructor === Animal)//*true

//vậy tức là mỗi 1 object đều có constructor 
//vậy ta có thể tạo ra 1 object tương tự object dog từ constructor mà dog có
let cat = new dog.constructor('kyky');
console.log(cat.constructor)//*Animal
console.log(cat)//*Animal {name: 'kyky'}


//NHƯNG: js không đảm bảo đúng constructor mà ta cần
//nếu như ta thay thế prototype thì nó k còn là constructor nữa
// Animal.prototype = {
//     jump: true
// }

// Thuộc tính prototype sử dụng rộng rãi trong js
// mọi constructor function có sẵn trong js đều sử dụng nó
