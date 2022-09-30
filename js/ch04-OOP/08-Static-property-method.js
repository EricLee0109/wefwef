//08-Static-property-method
class User {
    name = "Điệp";
    static name2 = "Điệp2";
    show(){
        console.log("ahihi");
    }
    static show2(){
        console.log("ahihi2");
    }
}
class Vip extends User{}; //nó kế thừa name, show(), nhưng vẫn phải dùng chung name2 và show2()
//static: tĩnh(đứng yên 1 chỗ không đi)
let diep = new User();
console.log(diep.name); //Điệp

console.log(diep.name2); //undefined
console.log(User.name2); //Điệp2

//static ở đây ám chỉ prop hay method đó thuộc về class
//nên các object sẽ k sở hữu hay nhân bản mà phải xài chung
//Class truy cập vào static được (các lập trình viên ưu tiên truy cập cách này)
//object thì không được (trong java thì được)

//
class Article {
    constructor(title, date){
        this.title = title;
        this.date = date;
    }
    static compare(ariticleA, ariticleB){
        return ariticleA.date = ariticleB.date;
    }
}
//tạo ra mảng chứa các bài báo
let articleList = [
    new Article("Anna lấy xe của quý nhân bỏ chại", new Date(2022, 8, 21)),
    new Article("Bí quyết chạy grab chỉ với 1 tỷ", new Date(2022, 0, 11)),
    new Article("60 người Việt trốn về từ nhà tuyển dụng Cam", new Date(2022, 11, 12)),
];
//muốn sắp xếp danh sách các bài báo theo ngày, tăng dần
//c1: comparator: người trọng tài (bài báo a, bài báo b) => ai lớn hơn => sắp xếp
//c2: comparable: tính đố kỵ, mỗi 1 bài báo sẽ tự đố kỵ lẫn nhau
//          => từ đó phân định ai lớn => sắp xếp
articleList.sort(Article.compare);
console.log(articleList);