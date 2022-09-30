document.querySelector("form").addEventListener("submit", event =>{
    event.preventDefault();//chặn sự kiện submit làm reset trang
    let name = document.querySelector("#name").value //lấy giá trị trong ô input có id là name
    // tạo ra 1 đối tượng có id là thời gian đã tạo, name là giá trị trong ô input
    let item = {
        id : new Date().toISOString(), //cần id để phục vụ cho việc remove
        name : name.trim()
    }
    //render cái item mới tạo lên màn hình
    addItemToUI(item)
    //lưu lại cái item vào localStorage
    addItemToLS(item)
})

//getList(): viết hàm lấy 'danh sách item'(list) trong localStorage
const getList = ()=>{
    return JSON.parse(localStorage.getItem("list")) || []
}
//hàm nhận vào 1 item và render nó lên màn hình
const addItemToUI = item => {
    //tạo 1 cái card
    const newCard = document.createElement("div");
    newCard.className = "card d-flex flex-row justify-content-between align-items-center p-2 mb-3"
    newCard.innerHTML = 
    `<span>${item.name}</span>
    <button type="button" class="btn btn-danger btn-sm btn-remove" data-id=${item.id}>Remove</button>`
    document.querySelector(".list").appendChild(newCard);
}
//hàm thêm item vào trong LS
const addItemToLS = item =>{
    //lấy cái list từ LS xuống
    let list = getList();
    list.push(item)
    localStorage.setItem("list", JSON.stringify(list))
}

//hàm render tất cả các item trong list lên ui mỗi lần vào trang
const init = ()=>{
    let list = getList();
    list.forEach(item => {
        addItemToUI(item)
    });
}
init();
//hàm nhận vào id của item và xóa item
const removeItemToLS = idItem => {
    //lấy mảng
    let list = getList();
    //từ idItem tìm vị trí của đối tượng trong mảng
    let index = list.findIndex(item => item.id == idItem);
    list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(list)); //cập nhật lại list trên LS
}
//remove: chức năng xóa 1 item (card)
document.querySelector(".list").addEventListener("click", event => {
    if(event.target.classList.contains("btn-remove")){
        let nameItem = event.target.previousElementSibling.innerHTML; //lấy nội dung ở trên, khi 2 cái cùng cấp
        let isConfirmed = confirm(`Are you sure to remove : ${nameItem}`);
        if(isConfirmed){
            //xóa item trên UI
            let cardItem = event.target.parentElement;
            cardItem.remove();
            //xóa item trên LS
            removeItemToLS(event.target.dataset.id); //đưa cho hàm removeItemToLS cái data-id
        }
    }
});

//Remove All (xóa tất cả)
document.querySelector("#btn-remove-all").addEventListener("click", event => {
    let isConfirmed = confirm("Are you sure to remove all?");
    if(isConfirmed){
        //cập nhật UI
        document.querySelector(".list").innerHTML = "";
        //cập nhật LS
        localStorage.removeItem("list");
    }
});
//
document.querySelector("#filter").addEventListener("keyup", event => {
    const valueInput = event.target.value;
    //lấy cái list
    let list = getList();
    let filteredList = list.filter(item => item.name.includes(valueInput));
    //xóa danh sách cũ
    document.querySelector(".list").innerHTML = "";
    //render lên danh sách đã lọc
    filteredList.forEach(item =>{
        addItemToUI(item);
    });
});

