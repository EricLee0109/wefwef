// ch05-asynchronous
//01-asynchronous-callback.js

//vd: ta có 2 dòng code lần lượt theo thứ tự là L1(3p) và L2(1p)
//đơn luồng: L1 chạy mất 3p, sau đó L2 mới chạy: 4p
//đa luồng: L1 mất 3p, nhưng mà trong quá trình đợi L1 thì L2 cũng chạy: 3p

//Js là ngôn ngữ đơn luồng
//PHP ha JAVA là ngôn ngữ đa luồng

//call stack: là một cấu trúc dữ liệu đạng ngăn xếp (stack) dùng để chưa thông tin
// hoạt động của chương trình trong quá trình thực thi
// code chạy xong thì k còn
// LIFO: vào sau ra trước

//
function a(x){
    console.log(x); //8
}

function b(y) {
    a(y + 2);
}

function c(z) {
    b(z+1);
}

c(5); //giá trị xuất ra màn hình là bao nhiêu

//Event loop và callback queue
//torng mợt js runtime(môi trường js(web)) thì có rất nhiều thứ qtrong khác
// không kém gì với callstack

//tổng thể js có gì?
// về vùng nhớ: memory heap     call stack

//event loop: liên tục lặp đi lặp lại chờ đợi 1 sự kiện "click, submit, change,..."
//          event loop                          sự kiện đó gọi là callback queue //addEventListener

//webAPIS(nội dung trong trang của mình): DOM | AJAX(XMLhttpRequest) | timeout(setTimeout)

function handle() {
    console.log("command1");
    setTimeout(function ahihi(){
        console.log("command2");

    }, 3000);
    console.log("command3");

}

handle();

//có 2 kịch bản diễn ra
//kịch bản 1: xuất command1, đợi 3s xuất tiếp command2, command3

//kịch bản: xuất command1, trong lúc đợi 3s nó xuất comand3, sau khi 3s xong xuất command2

//Async callback: bất đồng bộ callback
//callback có thể dùng để xử lý bất đồng bộ
//ưu điểm: dễ viết
//nhược điểm: khó đọc, khó fix bug, code lồng vào nhau(callback hell)

//tầm quan trọng của việc đồng bộ và bất đồng bộ
//vd1: splider
//vd2: anh có 2 dòng code
//L1: chuyển nội dung trong file thành mảng cac student (5p)
//L2: in ra danh sách các student lấy được từ file

//cẩn thận dùng callback trong try catch
//vd: 
try{
    setTimeout(() => {
        throw new Error("Lỗi rồi cưng!")
    }, 3000);
}catch(error){
    console.log(error);
}   //sẽ lỗi, vì try catch k bắt dc lỗi ném ra