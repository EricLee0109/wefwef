//syntax Error: lỗi sai cú pháp | do mình => try catch thua
//Logic Error: lỗi sai tư duy | do mình => try catch thua
//runtime Error: lỗi phát sinh trong quá trình sử dụng | do người dùng => try catch

//chương trình đang chạy mượt, người dùng bị khùng nhập lung tung
//nhập vào input:number mà lại nhập ký tự

//vd1: 
// try {
//     diepPiedTeam;
// } catch (error) {
//     console.log("ngu hả?");
// }
// console.log("ahihi");

//trycatch chỉ hoạt động đồng bộ
// try {
//     setTimeout(() => {
//         diepPiedTeam;
//     }, 1000);
//     console.log("ahihi");
// } catch (error) {
//     console.log("ngu hả?");
// }
// console.log("ahihi");

//cách để khắc phục (callback/promise/asyn await)
// setTimeout(() => {
//     try{
//         diepPiedTeam;
//         console.log("hihi");
//     }catch (error){
//         console.log("ngu hả?");
//     }
//     }, 1000);    
// console.log("ahihi");

//lỗi trong js dc xem là 1 object gồm có 3 prop
//name: tên
//message: thông báo lỗi
//stack: thông tin chi tiết
// try {
//     diepPiedTeam
// } catch (error) {
//     console.log(error);
//     console.log(error.name); //ReferenceError
//     console.log(error.message); //diepPiedTeam is not defined
//     console.log(error.stack); /*ReferenceError: diepPiedTeam is not defined
//                                 at 01-tryCatch.js:44:5 */
// }

//nhiều khi không phát sinh lỗi nhưng mà mình thích tạo ra lỗi
let loading = true;
try {
    let a = 10;
    //
    throw new Error ("lỗi tự tạo");
} catch (error) {
    console.log(error);
} finally{
    loading = false;
}

//finally: dù lỗi hay không thì vẫn chạy
//finally là vô dụng, vì k cần viết trong finally thì vẫn chạy dc

// ngoài throw new Error() chúng ta còn có 7 hàm (contructor function) khác phục vụ cho việc
// tường minh lỗi của mình hơn
// EvalError():     tạo 1 instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục Eval()
// InternalError(): tạo 1 instance đại diện cho một lỗi xảy ra khi 1 lỗi bên trong jsEngine
//                  được ném. vd: quá nhiều đệ quy
// RangeError()   : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham chiếu
//                  nằm ngoài phạm vi hợp lệ của nó
// ReferenceError : tạo 1 instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của 1 tham chiếu
//                  không hợp lệ
// SyntaxError    : tạo 1 instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp 
//                                                                          mã trong Eval()
// TypeError      : tạo 1 instance đại diện cho một lỗi xảy ra khi một biến hoặc 1 tham số
//                  có kiểu không hợp lệ
// URIError       : tạo 1 instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI()
//                  truyền các tham số không hợp lệ

//tự chế 1 class chuyên tạo ra lỗi
class CustomerError1 extends Error{
    constructor(message, student){
        super(message);
        this.student = student;
        this.name = "customError";
    }
}

try{
    let a = 10;
    throw new CustomerError1("Lỗi chà bá", { name: "Điệp", age: 24 });
}catch (error){
    console.log(error);
    console.log(error.name); //customError
    console.log(error.student); //{name: "Điệp", age: 24 }
}
