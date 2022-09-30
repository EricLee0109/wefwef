// 03-Prototypal-inheritance.js
// propotypal - inheritance: kế thừa nguyên mẫu
// kế thừa nguyên mẫu xảy ra với Object cụ thể 

// trong mỗi object đều có [[Prototype]]
// trong js 1 số thuộc tính ẩn trong obj được gọi là [[Prototype]]
//          dù bị ẫn nhưng có nhiều cách sử dụng nó 
//          một trong những cách dùng là thông qua getter và setter là __proto__
//          vd: tạo object rabbit kế thừa object animal
//chúng ta có thể có thể cho 2 object kế thừa nguyên mẫu bằng [[Prototype]], nhưng phải dùng __proto__

let congido = {
    eats: true,
    walk(){
        console.log("tao chạy bộ nè");
    },
};

let rabitYellow = {
    jumps: true, 
};

let longEar = {
    ear: 'long', 
    __proto__: rabitYellow
}
// set longEar.[[Prototype]] = rabbitYellow
// longEar kế thừa nguyên mẫu của rabbitYellow
rabitYellow.__proto__ = congido; // set rabbitYellow.[[Prototype]] = congido
console.log(longEar.jumps); //true
console.log(longEar.eats); //true
congido.eats = false;
console.log(longEar.eats); //false
//nếu có cập nhật 1 đối tượng trong dây phả hệ
//thì các thằng số lớn (những thằng sinh sau đẻ muộn) sẽ bị ảnh hưởng

student = {
    lastName: "Điệp", //value property
    firstName: "Lê", //value property
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
       [this.firstName, this.lastName] = value.split(" ");
    }
}

let user = {
    __proto__: student,
    isUser: true
}
user.fullName = "Khủng Long";

console.log(student);
console.log(user);
