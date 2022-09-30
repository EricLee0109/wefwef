console.log("Bài 14: Window Object");
//windowObject là đại diện cho cửa sổ trình duyệt
//tất cả các global js object, function, biến tạo bằng var đều
//được ngầm hiểu là prop hoặc method của windowObject
//(không phải let và const)
//ngay cả DOM(Document object model) cũng thuộc windowObject

//1. Prop và Method
//1.1 window.innerHeight: trả ra chiều cao của cửa sổ trình duyệt
console.log(window.innerHeight);
//1.2 window.innerWidth: trả ra chiều rộng của cửa sổ trình duyệt
console.log(window.innerWidth);
//1.3 window.open(url, target, fieldter): mở 1 tab mới
// window.open("https://gearvn.com", "_blank", "width = 500, height = 500"); 
// setTimeout(() => {
//     window.open("https://gearvn.com", "_blank", "width = 500, height = 500");
// }, 3000)

//1.4 window.close(): đóng tab
// window.close
//1.5 window.resizeTo(): chỉnh lại kích thước của tab đã mở
// let mytab = window.open(
//     "https://gearvn.com", 
//     "_blank",
//     "width = 500, height = 500"
// );
// mytab.resizeTo(700, 300);

//2. window location
console.log(window.location);
//2.1 windowLocation
console.log(location.href);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.pathname);
//href = protocol + domain / pathName
//          http    gearvn.com  /pages/maytinhvanphong

//.assign(url): chuyển hướng trang
//location.assign("https://gearvn.com");

//navigator: thuộc tính người dùng trình duyệt
console.log(navigator);

//history: lịch sử duyệt web của trình duyệt đối với tab
console.log(history);
//history.back(): lùi lại 1 trang
//history.forward(): tiến lên 1 trang

//trình duyệt cung cấp cho bạn 3 loại pop-up
alert("ahihi đồ chó");
//confirm: true/ false
let result = confirm("anh Điệp có đẹp trai hong?");
if(result){
    console.log("Khiếp, toàn nói sự thật");
} else{
    console.log("Đồ dối lòng");
}

//prompt
result = prompt("Nhập tên của bạn đi");
console.log(result);
