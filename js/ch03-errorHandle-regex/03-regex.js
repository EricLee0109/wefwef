// I-regex:
// regex: regular expression | pattern | biểu thức chính quy (chuỗi có định dạng)
//vd: kiểm tra email có hợp lệ không
// giống toán tử like trong SQL
// regex là 1 object
// thì nó sẽ có các method đi kèm

 let regex1 = /nam/; //chuỗi nào có "nam" là khớp
 let str = "Khoa is my name";

 //1. regex.test(str) : kiểm tra xem str có khớp regex hay không
 //     true | false
 console.log(regex1.test(str)); //true

 //vd2: i: ignoreCase
regex1 = /nam/i; 
str = "Khoa is my Name";
console.log(regex1.test(str)); //có i thì true | không i thì false

//2. regex.exec(str): trả ra mảng | null
regex1 = /nam/i; 
str = "Khoa is my Name";
console.log(regex1.exec(str)); //['Nam', index: 11, input: 'Khoa is my Name', groups: undefined]
console.log(str.match(regex1)); //['Nam', index: 11, input: 'Khoa is my Name', groups: undefined]
// 2 cái cùi k xài

//3. str.search(regex)      index|-1
console.log(str.search(regex1)); //11 | nếu không tìm dc thì return -1

//4. str.replace(regex, newString)
regex1 = /Điệp/gi;//g: global search (biến toàn cục)
str = "Điệp đẹp trai nên Điệp làm đũy ngựa (Phò mã)";
str = str.replace(regex1, "Tiến"); 
console.log(str); //Tiến đẹp trai nên Tiến làm đũy ngựa (Phò mã) | nếu không có g thì chỉ thay chữ Điệp đầu tiên

//II.Regex Metcharacter Symbols : // nên test code regex trên trang này https://regexr.com/
    //bắt đầu bằng: vd: /^hello/i chuỗi bắt đầu bằng hello

    //kết thúc bằng:                 vd: /hello$/i  chuỗi kết thúc bằng hello
    //kết thúc cũng là bắt đầu bằng: vd: /^hello$/i chuỗi chỉ có hello
    //khớp với 1 ký tự bất kỳ(khong dai dien enter):       vd: /m.y/i     .đại diện 1 ký tự bất kỳ 
    //                                              m y|may|mey true
    //                                              my          false
    //cho phép ký tự trước lập lại nhiều lần hoặc không :
    //                               vd: /m*y/i     my|mmmy|ey true
    //khớp ký tự tùy chọn: ký tự phía trước dấu ? có hoặc không cũng đc
                                    //  vd: /ma?y?h?o?r?n?y/i 
    //escape character bằng \ phía trước ký tự cần escape

//III.Regex character sets and Quantifiers
//      chuỗi ký tự và giới hạn ký tự
//  [...] set các ký tự                  vd: /m[an]/i        ma|mn true
//  [^..] set các ký tự phải khác        vd: /m[^an]/i       ma|mn false
                                                           //me|mo true
//  khớp tất cả các chữ cái
    // [a-z]                             vd:/[a-z]hello/    zhello true |hello false
    // [A-Z]
    // [a-zA-Z]

//  khớp số
    // [0-9]

//  giới hạn số lượng ký tự {}          vd:/me{2}t/     met|meeet false    || meet true
                                        // /me{2,5}t/   met false   meet|meeet|meeeet|meeeeet true
//                                         /me{2,}t/    từ 2 ký tự trở lên
//  gom nhóm ()
//                                         /(me){2,}t/  memememememet true

// hoặc |                               vd:/(Hồ|Lê) Điệp/  Hồ Điệp| Lê Điệp true

// Regex ShortHand Character classes
//  khớp 1 chữ cái hoặc số, _             vd: /Die\w/  Diet|Diee|Diev true
//                                                   Diett false
//  khớp nhiều chữ cái hoặc số \w+/     vd: /Die\w/  Dietttt|Dieeeee|Dievvvvvv true
//                                                   Die false                       
//  khớp không phải chữ cái hoặc số \W/
//  khớp 1 số \d | khớp nhiều số \d+ | khớp không phải số \D
//  khớp với dấu cách \s | khớp không phải là dấu cách \S
//  khớp nếu b theo ngay sau a          vd: /a(?=b)/   ac false  |  ab true
//          lưu ý kết quả của cái này là a không phải ab
//  khớp nếu b không theo ngay sau a    vd: /a(?!b)/   ac true  |  ab false
//          lưu ý kết quả của cái này là a không phải ac


// khớp nếu chuỗi là ký tự biên:
    //ký tự biên là ký tự nắm giữa ký tự từ + ký tự biên + không phải ký tự từ
    //           hoặc   không phải ký tự từ + ký tự biên + không phải ký tự từ
    //vd:/an\b/        'an'|'an '|ban tot|toi an com true
    //                 'anh trai'|Oanh false