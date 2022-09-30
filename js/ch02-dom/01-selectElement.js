//liên kết | dom | móc : liên kết 1 biến 
//              với 1 node(1 phần tử element trong liên kết)

//dom 1 đối tượng đơn: 
// document.getElementById("...."); //truyền theo tên của id : live
// document.querySelector("....");  //truyền theo selector css : non-live
let input = document.getElementById("name");
input = document.querySelector("#name"); //id dùng #, class dùng .
console.log(input);

//
//dom 1 danh sách các đối tượng thỏa selector:
let cardList = document.querySelectorAll(".card"); //NodeList
// cardList = [...document.getElementsByClassName("card")]; //HTMLCollection

//HTMLCollection giống array nhưng thiếu method quan trọng (forEach)
//  mình phải chuyển HTMLCollection về array bằng spread thì mới dc

//NodeList giống array và có đầy đủ method
console.log(cardList);
cardList.forEach(item => {
    console.log(item);
});

//method hay dùng
console.log("Demo Method");
let a = document.querySelector(".card");
console.log(a);
console.log(a.children); //mảng các phần tử con HTMLCollection(2) [h2, p] //*Ưu tiên hơn
console.log(a.childNodes); //mảng các phần tử con
//                          NodeList(5) [text, h2, text, p, text]
console.log(a.parentElement);//lấy ra cha của thằng a
console.log(a.nextElementSibling);//lấy ra phần tử giống nó nhưng ở dưới
console.log(a.firstChild);//text
console.log(a.lastChild);//text

//tạo 1 element
const newCard = document.createElement("div");
// newCard.classList.add("card", "mb-3", "p-2"); //nhét thêm vào
newCard.className = "card p-2 mb-3"; //vứt luôn những class cũ và đập class mới vô
newCard.innerHTML = 
    "<h2>Tui là phần tử được tạo bằng dom</h2><p>Xin chào mọi ngừi</p>";
let cardGroup = document.querySelector(".card-group");
cardGroup.appendChild(newCard); //nhét newCard vào cuối cardGroup
cardGroup.replaceChild(newCard, cardGroup.children[1]);

input.setAttribute("data-id", "1"); //them | update
console.log(input.getAttribute("data-id"));
input.removeAttribute("data-id");