console.log("Bài 4: mệnh đề điều kiện - conditional command");

//if else
//boolean
if (true){
    console.log("ahihi đồ chó");
}

//
let a = 8;
if (a < 7){
    console.log(1);
}else{
    console.log(2);
}

//2
let b = 8;
if (b < 7){
    console.log(1);
}else if (b > 7){
    console.log(2);
}else if (b == 8){
    console.log(3);
}

//
//Switch case
let choice = 2;

switch(choice){
    case 1:{
        console.log("hello 1");
        break;
    }
    case 2:{
        console.log("hello 2");
        break;
    }
    case 3:{
        console.log("hello 3");
        break;
    }
    case 4:{
        console.log("hello 4");
        break;
    }
    default:{
        console.log("other choice");
        break;
    }
}

//*Thiếu break thì sẽ bị trôi xuống case dưới
//*Thiếu default thì giống if thiếu else
//các case và default có thể xáo trộn vị trí
//          => nên có break cho default

//Nâng cao: toán tử 3 ngôi
let c; //undefined
//null | tập giá trị
let res;
// underfined, null, chuỗi rỗng ("") --- Đều là false

// if(!res){    //res = undefined = false, !res = true
//     console.log("Không có giá trị");
// }
!res && console.log("Không có giá trị") //viết đỉnh cao (AND đi tìm mệnh đề false)


