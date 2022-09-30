let btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.clientX, event.clientY);
    //trả ra tọa độ theo trục với hệ quy chiếu là viewport
    console.log(event.offsetX, event.offsetY);
    //trả ra tọa độ theo trục với hệ quy chiếu là element
    console.log(event.target); //return ra cái element vừa bấm, vừa dính sự kiện

    //dom đến input
    let inputNode = document.querySelector("#name").value;

    let newCard = document.createElement("li");
    newCard.classList.add("card", "mb-3", "p-2");
    newCard.innerHTML = `<p>${inputNode}</p>`;
    let listNode = document.querySelector("#list");
    listNode.appendChild(newCard);
});

//ngoài sự kiện click thì mình còn 1 vài sự kiện sau
//event submit : khi bấm vào nút submit (bắt được event trên form)
//event mouseover : đưa chuột vào thì thực thi
//event mouseout : đưa chuột ra thì thực thi
//event dbclick : nhấn 2 lần mới chạy

//event keyboard
//keydown: nhận tất cả phím khi nhấn 1 phím bất kỳ
//keypress: nhận tất cả phím(trừ alt,esc,shift,ctrl) khi nhấn 1 phím bất kỳ
//keyup: nhận tất cả các phím(trừ alt,esc,shift,ctrl) khi nhả 1 phím bấy kỳ
//oninput: thực thi khi có thay đổi (chết rồi)
//onchange: thực thi khi bỏ focus (chết rồi)
let inputNode = document.querySelector("#name");
inputNode.addEventListener("keyup", (event) => {
    console.log(inputNode.value);
})


