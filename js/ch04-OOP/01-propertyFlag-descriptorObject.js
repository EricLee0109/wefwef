// 01-propertyFlag-descriptorObject.js


//ngoài các property, trong object còn các các thuộc tính cờ
// Khái niệm: Property flag
// value: giá trị của prop
// writable     : nếu true thì value có thể thay đổi, false thì read-only
// enumerable   : nếu true thì property được liệt kê khi lặp, false thì không được liệt kê
// configurable : nếu true thì property có thể bị xóa writable và enumerable có thể bị thay đổi,
                    //false thì không thể, nhưng value thì vẫn thay đổi dc

// 1 thuộc tính có đủ 3 cờ và value(tính là 1),bộ 4 cờ này người ta gọi đó 
//                                              là bộ mô tả thuộc tính (property descriptor)

let profile = {
    name: "Điệp",
    age: 18,
};

//1. Object.getOwnPropertyDescriptor(obj, 'propName')
// lấy ra tất cả các bộ cờ của prop trong obj
console.log(Object.getOwnPropertyDescriptor(profile, "age"));
// configurable: true, enumerable: true, value: 18, writable: true
//2. thay đổi/ thêm mới 1 prop và cỡ bằng object.defindProperty(obj)
Object.defineProperty(profile, "name", {
    writable: false,
});

//vậy trhì lúc này thuộc tính name sẽ có writable là false
profile.name = "Huệ"; //k chạy
console.log(profile);

//tạo một prop
Object.defineProperty(profile, "job", {
    value: "yangho",
    writable: true,
    configurable: true,
});
// lúc này profile của anh có gì
// trong quá trình tạo mới prop
// flag nào không dc nhắc đến sẽ có giá trị là false
console.log(profile);

for (const key in profile){
    console.log(key);
}
// for in chỉ chạy qua name và age thôi
//còn job nó k duyệt vì job là enumerable: false

//* một khi đã set configurable: false thì k thể dùng defineProperty để set lại thành true
// configurable: false thì sẽ có những hạn chế sau
// 1. không thể thay đổi configurable
// 2. không thể thay đổi enumerable
// 3. không thể thay đổi writable: false -> true(nhưng ngược lại true -> false thì đc)
// 4. không thể thay đổi getter/setter


//Object.defineProperties(obj,{
        // key : {value:' ',descriptor}
        // key : {value:' ',descriptor}
// })
// giúp định nghĩa nhiều thuộc tính cùng lúc

// Object.getOwnPropertyDescriptors(obj,'PI')
// giúp return nhiều thuộc tính cùng lúc
// nếu kết hợp definesProperties có thể clone một object có full bộ cờ

//xem tất cả các cờ của tất cả các prop trong object
console.log(Object.getOwnPropertyDescriptors(profile));

//clone Object: kèm bộ cờ của prop
//anh muốn tạo ra object giống y chang profile

let cloneObj = {...profile}; //dùng spread
// nó chỉ clone dc prop có enumerable và nó k clone dc các lá cờ
console.log(Object.getOwnPropertyDescriptors(cloneObj));

//cách clone thứ 2 thông qua method của object
cloneObj = Object.defineProperties({}, Object.getOwnPropertyDescriptors(profile));
console.log(Object.getOwnPropertyDescriptors(cloneObj)); //sao chép 100% kể cả job

//có 2 loại thuộc tính trong object
//      thuộc tính dữ liệu: value property
// thuộc tính bộ truy cập: accessor property

let student = {
    lastName: "Điệp", //value property
    firstName: "Lê", //value property

    //accessor property: get / set 
    //get lấy giá trị
    get fullName(){
        return this.lastName + " " + this.firstName;
    },
    //set: chỉnh sửa giá trị
    set fullName(newName){
        [this.lastName, this.firstName] = newName.split(" ");
    },
}
console.log(student.fullName); //Điệp Lê
student.fullName = "Trà Long";
console.log(student.fullName); //Trà Long
console.log(student); //lastName: "Trà" | firstName: "Long"
//Bộ mô tả (descriptor) của bộ accessor properties sẽ 
//          không có writable và value như value properties
//          nhưng có thêm get và set function
//get: 1 function không có tham số, hoạt động khi thuộc tính được đọc(gọi)
//set: 1 function có tham số,       hoạt động khi thuộc tính được set
//enumerable:
//configurable:

//có thể tạo thêm getter và setter cho object được tạo sẳn
//           thông qua defineProperty
console.log(Object.getOwnPropertyDescriptors(student));
//value property: value, writable, enumerable, configturable
//accessor property: get, set, enumerable, configturable
