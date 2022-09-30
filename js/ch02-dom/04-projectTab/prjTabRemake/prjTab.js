let btnList = document.querySelectorAll(".navTab-btn");
let contentList = document.querySelectorAll(".tab-content-item");

btnList.forEach(btn => {
    btn.addEventListener("click", event => {
        btnList.forEach(_btn => {
            _btn.classList.remove("actived");
        });
        event.target.classList.add("actived");

        contentList.forEach(content => {
            content.classList.remove("actived");
        });
        let id = event.target.id;
        let contentChecked = document.
            querySelector(`.tab-content-item[data-id='${id}']`);
        contentChecked.classList.add("actived");
    })
});