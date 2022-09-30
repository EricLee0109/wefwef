//06-PrototypeMethod-ObjectWithoutProto
//các phương thức của prototype và nếu object k có prototype thì sẽ như thế nào
//mình đang code ở thời đại 2021 rồi, mình biết __proto__ là gì, xài như nào, nhưng
//  hãy xem như nó đã bị loại bỏ rồi, giờ mình dùng các method khác 
//Object.create(proto, [descriptor]) - tạo 1 object rỗng với việc cung cấp proto như một [[Prototype]]
//                                          và tùy chọn các bộ mô tả thuộc tính property descriptor
//Object.getPrototypeOf(obj)         - return về [[Prototype]] của object
//Object.setPrototypeOf(obj,proto)   - set [[Prototype]] của object thành proto

let animal = {
    eats: true,
};
//trong animal ngoài eats ra, còn có [[Prototype]] - (__proto__)
console.log(animal.__proto__ == Object.prototype); //true
//vì animal được tào từ class Object mà
// nên Object.[[Prototype]] sẽ là OBject.prototype
let rabitYellow = Object.create(animal);

rabitYellow.jumps = true;

console.log(rabitYellow.__proto__ == animal); //true
console.log(Object.getPrototypeOf(rabitYellow) == animal); //true

//giả sử anh k muốn rabitYellow kế thừa animal 
//tui muốn rabitYellow kế thừa object rỗng
console.log(rabitYellow);
// rabitYellow.__proto__ = {}; //thế kỉ 2021 rồi k dc viết vậy
Object.setPrototypeOf(rabitYellow, {});
console.log(rabitYellow);

// tạo tắt rabitYellow
rabitYellow = Object.create(animal, {
    jumps:{
        value: true,
        writable: false,
        enumerable: false,
        configurable: true,
    },
});

//giờ anh muốn clone rabitYellow thì sao?
//spread ... (clone sơ xài)
let objClone = { ...rabitYellow };
console.log(objClone);
//ta sẽ clone dc thuộc tính không ẩn, không clone dc bộ cờ, 
//không clone dc [[Prototype]]

//cách clone thông qua defineProp
objClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(rabitYellow));
console.log(objClone);
//lấy được thuộc tính ẩn, lấy được bộ cờ, không lấy dc [[Prototype]]
console.log(objClone);//clone dc bộ cờ, nhưng vẫn chưa clone dc animal Object

//cách clone đầy đủ nhất
//Object.create
objClone = Object.create(rabitYellow, Object.getOwnPropertyDescriptors(rabitYellow));
console.log(objClone);
//clone dc thuộc tính ẩn, bộ cờ, [[Prototype]]

/*
Như đã thấy thì chúng ta có nhiều cách để quản lý [[Prototype]]. Nhiều cách để làm cùng 1 thứ. Tại sao? Sau đây là nguyên nhân lịch sử

Thuộc tính prototype của constructor function đã có từ xa xưa
Sau đó, vào năm 2012, Object.create xuất hiện trong JS tiêu chuẩn. Nó cung cấp khả năng tạo một object với một prototype được cung cấp, nhưng không cung cấp khả năng get/set nó. Vì thế các trình duyệt thêm một thuộc tính "không thuộc JS tiêu chuẩn" là __proto__ để cho phép người dùng có thể get/set một prototype bất cứ lúc nào.
Sau đó, vào năm 2015, Object.setPrototypeOf và Object.getProtypeOf được thêm vào JS tiêu chuẩn, để thực hiện chức năng tương tự như__proto__.
Tại sao __proto__ bị thay thế bởi các hàm getPrototypeOf/setPrototypeOf? Đây là một câu hỏi thú vị, đòi hỏi chúng ta phải hiểu tại sao __proto__ khá tệ. Đọc thêm để biết câu trả lời. "very plain Object" để hiểu rỏ tại sao nó tệ

Đừng thay đổi [[Prototype]] trên các object đang tồn tại nếu quan tâm đến vấn đề tốc độ Về mặt kỹ thuật, chúng ta có thể get/set [[Prototype]] bất kỳ lúc nào. Nhưng thường thì chúng ta chỉ set một lần khi object khởi tạo và không thay đổi nó nữa: rabbit kế thừa từ animal, và nó sẽ không thay đổi.

Và các Javascript engine được tối ưu hóa cao cho việc này. Thay đổi một prototype "đang hoạt động" với Object.setPrototypeOf hoặc obj.__proto__= là một phép tất rất chậm bởi vì nó phá vỡ sự tối ưu hóa nội bộ cho các hoạt động truy cập đến thuộc tính object. Vì thế tránh sử dụng nó nếu bạn không biết nó làm gì, hoặc tốc độ Javasript không phải là vấn đề bạn quan tâm.
*/

//Very plain object - Object siêu phẳng | Base Object
// [[Prototype]] không thể là string dc, nó chỉ chứa object, class, null
obj = {}; //tạo 1 Object rỗng
let key = prompt("Nhập vào key đi");
obj[key] = "Giá trị bất kì";
console.log(obj);
//key có thể là gì cũng oke, nhưng nếu kye là __proto__ thì không dc
//vì [[Prototype]] không thể là String

obj = Object.create(null); //object siêu phẳng
key = prompt("Nhập vào key đi");
obj[key] = "Giá trị bất kì";
console.log(obj);
// khi nhập vào __proto__ thì nó không hiểu này là [[Prototype]]
// nên nó cho em tạo 1 thược tính __proto__



