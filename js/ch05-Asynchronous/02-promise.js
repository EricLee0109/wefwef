//02-promise.js
//Promist: dùng để thay thể cho callback
//Promise: lời hứa rằng trong tương lai sẽ làm gì đó, hoặc không làm
//ES6

//một Promise sẽ có 3 trạng thái
//pending: đang chờ kết quả
//fulfilled: kết quả thành công, dùng resolve để retun kết quả
//reject: kết quả thất bại dùng resolve để retrun kết quả

//cú pháp tạo promise
new Promise (function(resolve, reject) {

})
//viết tắt bằng arrow
new Promise ((resolve, reject) => { //1 lời hứa thì có thành công or thất bại

})
//vd: anh ny hứa rằng CN này sẽ mang về cho em 5000
//      nếu như ảnh thất hứa: => "ảnh là jack"
//      nếu như ảnh thành công: => "ảnh không phải là jack"

//tạo ra 1 lời hứa
// let wallet = prompt("Nhập giá trị trong ví") //hiện cái pop để nhập vào, và sẽ lưu gtri vào wallet
// //tạo ra một lời hứa
// const p2 = new Promise((resolve, reject) => {
//     if(wallet > 5000){
//         resolve("ảnh không phải là jack")
//     }else{
//         reject("ảnh là jack")
//     }
// })
// //lúc viết xong lời hứa thì nó đã viết và chạy xong rồi
// p2.then(value =>{ //resolve
//         console.log("thành công rồi: " + value);
// }).catch(error =>{ //reject
//     console.log("thất bại rồi: " + error);
// })

//Thử chuyển 1 cái code callback về thành promise
setTimeout(()=> {
    console.log("hello");
}, 3000)

//chuyền về promise
let p2 = new Promise((resolve) => {
    setTimeout(()=> {
        resolve("hello");
    }, 3000)
})

p2.then(value => {
    console.log(value);
})

//thời gian đợi giá trị là pending
//trạng thái resolve dc như này gọi là fulfilled

//lưu ý: promise are eager not lazy: promise chạy code ngay khi viết chứ k phải lúc
//.then
let a= 1;
// let p3 = new Promise((resolve, reject) =>{
//     a++;
//     resolve("ahihi")
// })
//p3.then()

//cách xử lý
//bọc vào function
function ahihi(){
    let p3 = new Promise((resolve, reject) =>{
        a++;
            resolve("ahihi")
    })
    return p3
}
//ahihi();

//viết tắt bằng arrow
let p3 = () => new Promise((resolve, reject) => {
        a++;
        resolve("ahihi")
    })
//p3();
console.log(a);//
