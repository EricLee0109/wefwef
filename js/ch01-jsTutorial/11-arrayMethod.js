console.log("Bài 11: Array Method");

//mảng trong array không nhất thiếu phải cùng kiểu
var arr1 = [1, 2, "a", { lname: "Huệ", age: 10 }, [3, 5]];
console.log(arr1);

//2. Length return độ dài của mảng
console.log(arr1.length); //5

//3. .isArray() | instanceOf Array: để hỏi xem 1 biến có phải mảng không
console.log(arr1 instanceof Array); //true

//4. .toString(): biến mảng thành chuỗi
var workerList = ["Huệ", "Lan", "Trà"];
var str1 = workerList.toString();
console.log(str1); //"Huệ,Lan,Trà" //nó chừa , vì có thể chuyển ngược lại từ string -> array

//5. split() | join()
//chèn mảng
//array là mutable: method tác động vào object | không tạo object mới
//6. push(item) thêm phần tử vào cuối mảng | retrun độ dài mới sau khi thêm
workerList = ["Huệ", "Lan", "Trà"];
let result = workerList.push("Cúc");
console.log(workerList, result); //['Huệ', 'Lan', 'Trà', 'Cúc'] 4

//7. pop() xóa phần tử vào cuối mảng | retrun item đã xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.pop();
console.log(workerList, result); //['Huệ', 'Lan'] "Trà"

//8. unshift() thêm phần tử vào đầu mảng | retrun độ dài mới
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.unshift("Cúc");
console.log(workerList, result); //['Cúc', 'Huệ', 'Lan', 'Trà'] 4

//9. shift() xóa phần tử vào đầu mảng | retrun item đã xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.unshift();
console.log(workerList, result); //['Huệ', 'Lan', 'Trà'] 3

//10. delete array[index] : xóa phần tử ở vị trí index
//                          để lại khoảng trống ở vị trí đó
//                          nếu truy cập bị undefined

//[1, 2, 'a', 15]
//delete array[2] => [1, 2, ,15]
//
//11. splice | slice | split
//***splice(index, sl cần xóa, ... phần tử muốn thêm)
//          return: mảng các item bị xóa
//thêm không xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(1, 0, "Điệp", "Khoa");
console.log(workerList, result); //['Huệ', 'Điệp', 'Khoa', 'Lan', 'Trà'] []

//xóa không them
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(1, 1);
console.log(workerList, result); //['Huệ', 'Trà'] ['Lan']

//vừa thêm vừa xóa
workerList = ["Huệ", "Lan", "Trà"];
result = workerList.splice(0, 2, "Cúc", "Cường");
console.log(workerList, result); //['Cúc', 'Cường', 'Trà'] ['Huệ', 'Lan']

//12. slice(start, end) cắt từ start đến end -1
//13. concat()
workerGirl = ["Huệ", "Lan", "Tân"];
workerBoy = ["Điệp", "Khoa", "Hùng"];
workerList = workerGirl.concat(workerBoy, "Hồng", ["Trúc", "Tâm"]);
console.log(workerList);
//['Huệ', 'Lan', 'Tân', 'Điệp', 'Khoa', 'Hùng', 'Hồng', 'Trúc', 'Tâm']

//***14. spread operator: destructuring | phân rã
//  ...[1,3,4,4] => 1,2,3,4
workerList = [...workerGirl,...workerBoy];
console.log(workerList);
//['Huệ', 'Lan', 'Tân', 'Điệp', 'Khoa', 'Hùng']
//Shallow copy: copy nông

//15. forEach(callBackFunction) : lặp mảng
//      callBackFunction(val, index, array)
//

arr1 = ["Huệ", "Cúc", "Hồng"];
arr1.forEach((item, index, array) => {
    console.log(item, index, array);
});

//***16. map(callBackFunction) : biến đổi phần tử theo công thức
//      callBackFunction(val, index, array)

arr1 = [2, 6, 9]; 
arr1 = arr1.map(item => {
    if(item % 2 == 1) return item * 3;
    return item;
});
console.log(arr1); //[2, 6, 27]
//đừng thiếu retrun, nếu thiếu return sẽ bị undefined

//17. filter(cf): trả về mảng các phần tử thỏa điều kiện
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.filter(item => item % 2 == 0);
console.log(arr1); //[2, 4]

//18. find(cf): trả về phần tử thóa điều kiện đầu tiên trong mảng
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.find(item => item > 2);
console.log(arr1); //3

//19. findIndex(): trả về vị trí thóa điều kiện đầu tiên trong mảng
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.findIndex(item => item > 2);
console.log(arr1); //2


//20. indexOf(): tìm vị trí dựa trên value
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.indexOf(3);
console.log(arr1); //2
//find(cf) thỏa thì trả item
//findIndex(cf) thỏa thì trả ra index
//indexOf(val) trả ra index

//21. every(cf) giống như all trong DBI
//      tất cả thỏa điều kiện thì true
//      1 đứa không thỏe thì cả đám false
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.every(item => item > 1);
console.log(arr1); //false
//vì thằng 1 không lớn hơn 1 nên cả every false hết
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.every(item => item < 6);
console.log(arr1); //true

//22. some(cf) giống như in trong DBI
//          chỉ cần 1 thằng thỏa là true
//          không ai thỏa thì false
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.some(item => item > 5);
console.log(arr1); //false
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.some(item => item < 2);
console.log(arr1); //true

//23. includes(val) tìm xem value có tồn tại trong mảng không 
//(true | false); //true
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.includes(7);
console.log(arr1); //false

//24. reverse() đảo ngược mảng
arr1 = [1, 2, 3, 4 , 5];
arr1 = arr1.reverse();
console.log(arr1); //[5, 4, 3, 2, 1]

//25.sort() sắp xếp
// 1. String
arr1 = ["Điệp", "An", "Bảo"];
arr1 = arr1.sort();
console.log(arr1); //['An', 'Bảo', 'Điệp']
//2. Số
arr1 = [1, 3, 20, 100];
arr1 = arr1.sort();
console.log(arr1); //[1, 100, 20, 3]
//vì lúc này nó coi item là String, nên nó xếp theo utf-16

//mình phải dạy cho nó cách xếp => bỏ vào cf đại diện cho comparator
arr1 = [1, 3, 20, 100];
arr1 = arr1.sort((a, b) => a - b);
console.log(arr1); //[1, 3, 20, 100]

//***25. reduce(cf)
//  nếu map dùng để thay đổi từng phần tử theo công thức
// reduce có khả năng dồn số
arr1 = [1, 3, 20, 100];

var sum = arr1.reduce((total, current, currentIndex) => {
    return total + current;
}, 0); //0 initialValue //khởi tạo total = 0
console.log(sum); //124

var sum = arr1.reduce((total, current, currentIndex) => {
    return total + current;
}, ""); //"" initialValue //khởi tạo total = ""
console.log(sum); //1320100

//biến mảng thành object bằng reduce
arr1 = ["Điệp", 10, 22];
var newObject = arr1.reduce((total, current, currentIndex) => {
    total[currentIndex] = current;
    return total;
}, {});
console.log(newObject); //{0: 'Điệp', 1: 10, 2: 22}

console.log("Bài 12: Object - Method");
//Object
//Entry của object Key : Value
//Key thì luôn là String hoặc number
//Value: object, number, String, function

var woker1 = {
    lname: "Khoa đẹp trai",
    age: 24,
    showInfor(){
        console.log(this.lname + " " + this.age);
    }
};
woker1.showInfor(); 

//thêm thuộc tính: point = 10
woker1["point"] = 10;
woker1.point = 10;
//update thuộc tính
woker1.lname = "Điệp PiedTeam";
//delete thuộc tính : không để lại lổ
delete woker1.age;
console.log(woker1);

//1. Object.assign()
//      merge Object
//      có rồi thì ghi đè, chưa có thì thêm vào
var person1 = {
    lname: "Khoa",
    age: 20,
    job: ["Yangho", "coder"],
};
var person2 = {
    lname: "Điệp",
    age: 20,
    company: "PiedTeam",
};
var person3 = Object.assign(person1, person2);
console.log(person1);
console.log(person1 == person3); //true //trỏ chung vùng nhớ
//shallow copy: copy chưa hết
//spread operator
person3 = { ...person1, ...person3 };
console.log(person1 == person3); //false
//vẫn đang là shallow copy //vì array vẫn là object
person3.job.push("Đua xe");
console.log(person1);
//person1 và person3  vẫn còn liên kết ở job
//cách giải quyết
person3.job = [...person3.job];
person3.job.push("Bợm nhậu");
console.log(person3);

//Object.key(person3) : mảng các key và object
console.log(Object.keys(person3));
//['lname', 'age', 'job', 'company']

//Object.values(person3) : mảng các value và object
console.log(Object.values(person3));
//['Điệp', 20, Array(4), 'PiedTeam']

//lập object : for-in