console.log("Hello");
var arr = [1, 2, 3 , 4, 5, 6];
arr = arr.every((item) => item > 1);
console.log(arr);

arr = [1, 2, 3, 4, 5, 6];
arr = arr.some((item) => item > 1);
console.log(arr);

console.log("Includes nè");
arr = [1, 2, 3, 4, 5];
arr = arr.includes(6);
console.log(arr);

arr = [1, 2, 3, 4, 5];
arr = arr.reverse();
console.log(arr);

arr = ["Khoa", "Huy", "An"];
arr = arr.sort();
console.log(arr);

arr = [1, 3, 20, 100];
arr = arr.sort();
console.log(arr);

arr = [1, 3, 20, 100];
arr = arr.sort((a, b) => a - b);
console.log(arr);

arr = [1, 3, 20, 100];
arr = arr.reduce((total, current, currentIndex) => {
    return total + current;
}, 0);
console.log(arr);

arr = [1, 3, 20, 100];
arr = arr.reduce((total, current, currentIndex) => {
    return total + current;
}, "");
console.log(arr);

arr = ["Khoa", 20, 9];
arr = arr.reduce((total, current, currentIndex) => {
    total[currentIndex] = current;
    return total;
}, {});
console.log(arr);

console.log("Object");
var person1 = {
    lNmame: "Thái Khoa",
    age: 20,
    showInfor(){
        console.log(this.lNmame + " " + this.age);
    }
};
person1.showInfor();

person1["score"] = 10;
person1.score = 10;
console.log(person1);