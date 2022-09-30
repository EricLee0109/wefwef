// c1: Prototype và dung constructor function
//trong project này ta cần quản lý những gì
//Student
function Student(name, birthday){
    this.name = name;
    this.birthday = birthday;
    this.id = new Date().toISOString();//toISOString mới lưu vào localStore dc
}


//---------------------Store-----------------
//Store: LocalStore
function Store() {
    
}
Store.prototype.getStudents = function() { //lấy ra danh sách sv từ local Store
    return JSON.parse(localStorage.getItem("students")) || []; //vì localStore lưu ở dạng chuỗi, nên mình phải chuyển nó ra mảng
}


//------------------------Student------------------
// // add: nhét 1 student vào localStore
// Store.prototype.add = function (student) {
//     // lấy danh sách về
//     // const store = new Store();
//     // const students = store.getStudents();
//     // --
//     // const student = new Store().getStudents();
//     const students = this.getStudents(); //vì đang viết trong Store nên dùng rút gọn
//     students.push(student);
//     // cập nhật students lên localStorage
//     localStorage.setItem("students", JSON.stringify(students));
// }
// //hàm tìm ra thông tin gstudent từ danh sách
// Store.prototype.getStudent = function(id){ //lấy ra 1 sv hợp lệ dựa trên id
//     students = this.getStudents(); //lấy ra danh sách các student
//     return students.find(student => student.id === id); //tìm và trả ra ngoài cho người gọi
// }
// //hàm xóa đối tượng khỏi danh sách dựa trên id
// Store.prototype.remove = function(id){
//     students = this.getStudents(); //lấy ra danh sách các student
//     //tìm vị trí của đối tượng cần xóa trong danh sách thông qua id
//     const indexRemove = students.findIndex(student => student.id === id)
//     students.splice(indexRemove, 1) //từ vị trí tìm dc xóa 1 phần tử
//     localStorage.setItem("students", JSON.stringify(students)) //chuyển từ mảng sang chuỗi để đưa lên LS
// }


//--------------------------RenderUI--------------------------
//RenderUI: ui giao diện ng dùng
function RenderUI(){
    RenderUI.prototype.add = function(student) {
        const newTr = document.createElement("tr");
        const students = new Store().getStudents();
        newTr.innerHTML =   `
            <td>${students.length + 1}</td>
            <td>${student.name}</td>
            <td>${student.birthday}</td>
            <td>
                <button class="btn btn-danger btn-sm btn-remove" 
                        data-id="${student.id}">Xóa</button>
            </td>
        `;
        document.querySelector("tbody").appendChild(newTr);
        document.querySelector("#name").value = "";
        document.querySelector("#birthday").value = "";
    }
}
RenderUI.prototype.alert = function(msg, type = "success") {
    const divAlert = document.createElement("div");
    divAlert.className = `alert alert-${type}`;
    divAlert.innerHTML = msg;
    document.querySelector("#notification").appendChild(divAlert);
    setTimeout(() => {
        divAlert.remove();
    }, 2000)
}
RenderUI.prototype.renderAll = function() {
    const students = new Store().getStudents();
    let htmlContent = students.reduce((total, studentCurrent, currentIndex) => {
        return total + `
        <tr>
            <td>${currentIndex + 1}</td>
            <td>${studentCurrent.name}</td>
            <td>${studentCurrent.birthday}</td>
            <td>
                <button class="btn btn-danger btn-sm btn-remove" 
                        data-id="${studentCurrent.id}">
                    Xóa
                </button>
            </td>
        </tr> 
        `
    }); //các phần tử xử lý sẽ dc cộng dồn và nhân dồn
    document.querySelector("tbody").innerHTML = htmlContent;
}

//chuyển từ constructor thành Class
class Student {
    constructor();
    // add: nhét 1 student vào localStore
    add(student) {
    // lấy danh sách về
    // const store = new Store();
    // const students = store.getStudents();
    // --
    // const student = new Store().getStudents();
    const students = this.getStudents(); //vì đang viết trong Store nên dùng rút gọn
    students.push(student);
    // cập nhật students lên localStorage
    localStorage.setItem("students", JSON.stringify(students));
}
//hàm tìm ra thông tin gstudent từ danh sách
    getStudent(id){ //lấy ra 1 sv hợp lệ dựa trên id
    students = this.getStudents(); //lấy ra danh sách các student
    return students.find(student => student.id === id); //tìm và trả ra ngoài cho người gọi
}
//hàm xóa đối tượng khỏi danh sách dựa trên id
    remove = function(id){
    students = this.getStudents(); //lấy ra danh sách các student
    //tìm vị trí của đối tượng cần xóa trong danh sách thông qua id
    const indexRemove = students.findIndex(student => student.id === id)
    students.splice(indexRemove, 1) //từ vị trí tìm dc xóa 1 phần tử
    localStorage.setItem("students", JSON.stringify(students)) //chuyển từ mảng sang chuỗi để đưa lên LS
}
}
//consturctor Event 
class Event{
    
}
//--------------------------Event---------------------------
//sự kiện chính
// document.querySelector("form").addEventListener("submit", event => {
//     event.preventDefault();//chặn sự kiện reload
//     //lấy name và birthday từ các input
//     const store = new Store();
//     const ui = new RenderUI();
//     const name = document.querySelector("#name").value;
//     const birthday = document.querySelector("#birthday").value;
//     //tạo 1 student từ 2 dữ kiện trên
//     let newStudent = new Student(name, birthday);
//     // lưu vào store
//     store.add(newStudent);
//     // lưu vào ui
//     ui.add(newStudent);
//     // 3 việc cần phải làm sau khi tạo ra newStudent
//     // lưu vào localStore
//     // hiển thị lên giao diện
//     // thông báo thành công
//     ui.alert(`Bạn thêm thành công ${name}`);
// });
// //sự kiện reset trang
// document.addEventListener("DOMContentLoaded", event => {
//     const ui = new RenderUI();
//     ui.renderAll();
// } ) //khi nào t load xong hết các phần tử thì t ms chạy

// //xóa
// document.querySelector("tbody").addEventListener("click", event => {
//     if(event.target.classList.contains("btn-remove")){
//         let idRemove = event.target.dataset.id //lấy id từ nút của data đã click
//         console.log(idRemove);
//         const store = new Store();
//         const ui = new RenderUI();
//         //khi có id của student thì ta làm gì?
//         //từ id tìm được đầy đủ thông tin student tương ứng trong danh sách: Store
//         const student = store.getStudent(idRemove)
//         //từ đó hỏi rằng mày có muốn xóa thằng đó không?
//         const isConfirmed = confirm(`Bạn có chắc là muốn xóa ${student.name}`)
//         //từ id ta có thể xóa đối tượng đó khỏi danh sách: Store
//         if(isConfirmed){
//             //từ id ta có thể xóa đối tượng đó khỏi danh sách: Store
//             store.remove(idRemove)
//             //renderALL lại: RenderUI
//             ui.renderAll();
//             //Thông báo đã xóa thành công: RenderUI
//             ui.alert(`Đã xóa thành công ${student.name}`)
//         }
//     }
// })