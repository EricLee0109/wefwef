let btnList = document.querySelectorAll(".navTab-btn");
let contentList = document.querySelectorAll(".tab-content-item");
btnList.forEach(btn => {
    btn.addEventListener("click", event => {
        //xóa các actived 
        btnList.forEach(_btn => {
            _btn.classList.remove("actived");
        });
        //thêm actived cho nút vừa nhấn
        event.target.classList.add("actived");
        contentList.forEach((content) => {
            content.classList.remove("actived");
        });
        //lấy id của nút vừa nhấn 
        let id = event.target.id;
        //dom tới content có data-id trùng với id của btn vừa nhấn
        let contentChecked = document.
            querySelector(`.tab-content-item[data-id='${id}']`)
        contentChecked.classList.add("actived");
    });
});