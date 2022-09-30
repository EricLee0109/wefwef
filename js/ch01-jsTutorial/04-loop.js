console.log("Bài 5: Vòng lặp - Loop");
//reuse: dùng lại --- repeat: lặp lại
//loop - repeat
//while | do-while | for

var student1 = { name:"Điệp", point: 10, major:"SE" };
//              thuộc tính | properties | entry
//              entry = key : value
var array1 = [12, 17, 19];
// array nó là object | con trỏ
//           {0:12, 1:17, 2:19}
//  trong array key mình gọi là index
console.log(student1["name"]); //"Điệp"
console.log(student1.name); //"Điệp"
console.log(array1[1]); //17

// vòng for cơ bản đều duyệt từ start đến end

//các vòng for cải tiến luôn duyệt từ đầu tới cuối:
//  iterable: tính khả duyệt (xuất hiện trong object)
//for-in: duyệt key của object
for (const x in student1) { //forin chỉ duyệt key
    console.log(x);
}
//name point major

//Set: tập giá trị loại trùng
var demoSet = new Set("Điệp", "Huệ", "Lan", "Huệ");
// demoSet "Điệp", "Huệ", "Lan"
// => Set thì KHÔNG có key
for (const x in demoSet) {
    console.log(x);
}//không có gì hết | vì forin duyệt key | mà set thì k có key

//for-of: duyệt value 
let workerList = ["Điệp", "Huệ", "Lan", "Huệ"];
for (const x of workerList) {
    console.log(x)
}
//"Điệp", "Huệ", "Lan", "Huệ"

//đa phần các object đều có chiều sâu (iterable)
//nhưng mà các object mà mình thường tạo thủ công nó không iterable
//tức là không có tính khả duyệt
//  thằng forof không chơi với plain object (object phẳng)
// for (const x of student1) {
//     console.log(x);
// } //error
// student1 is not iterable
// iterable chơi với object có chiều sâu, hầu như object tạo thủ công đều là object phẳng

//for-each: duyệt được value có thể kèm key(index)
["a", "b", "c"].forEach((val, key) => {
    console.log(val, key);
});

//*For-in: duyệt key(chơi được với object)
//*For-of: duyệt value(chê object phằng)
//*For-each: duyệt được cả value và key(index)

