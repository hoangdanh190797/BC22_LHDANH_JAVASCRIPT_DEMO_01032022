// DOM
//
var username = document.getElementById("txtUsername");
console.log(username.value);
//Cách viết thứ 2:
var username = document.getElementById("txtUsername").value;
console.log(username);

document.getElementById("btnLogin").onclick = function(){
    // console.log("Login");

    var username = document.getElementById("txtUsername").value;
    console.log(username);
    var password = document.getElementById("txtPassword").value;
    console.log(password);

    var thogBao_user_pass = "Thong tin tai khoan la: <br />" + username + "<br /> " + password;
    document.getElementById("footerLogin").innerHTML = thogBao_user_pass;

};
// Cộng 2 số
document.getElementById("sum__Number").onclick = function(){
    var number__1 = +document.getElementById("first__Number").value;
    var number__2 = +document.getElementById("second__Number").value;
    var kqSum = number__1 + number__2;
    var ketquaCong = "Ket qua la: " + kqSum;
    console.log(ketquaCong);
    document.getElementById("thongBao").innerHTML = ketquaCong;

    //Style inLine
    // document.getElementById("thongBao").style.color = "white";
    // document.getElementById("thongBao").style.backgroundColor = "black";
    // document.getElementById("thongBao").style.fontSize="30px";
    // document.getElementById("thongBao").style.textAlign="center";
    //Style...
    // document.getElementById("thongBao").className = "demo showInfo";
    document.getElementById("thongBao").classList.add("showInfo");
};
//***
// Chuyển kiểu dữ liệu từ String sang Number
// number__1 = parseInt(number__1);
// number__2 = parseInt(number__2);
//***
//Mẹo ép kiểu
// Cách 1: *1 (Tự động chuyển chuỗi thành số)
// Cách 2: Đặt dấu + trước doc...
//***
// Gán kqSum ra thẻ div#thongBao
// document.getElementById("thongBao").innerHTML = ketquaCong;
//***
//Style bằng Javascript
//document.getElementById("thongBao").style.color = "white";
//***

//Về nhà thử sau thay thế class cho ảnh
// document.getElementById("btnOff").onclick = function (){
//     document.getElementById("imgOff").className("imgOn");
// };
// document.getElementById("btnOff").onclick = function (){
// };

document.getElementById("btnOn").onclick = function(){
    document.getElementById("imgOff").src = "./Image/pic_bulbon.gif";
};
document.getElementById("btnOff").onclick = function(){
    document.getElementById("imgOff").src = "./Image/pic_bulboff.gif";
};

//Không cho User click vào nút On

document.getElementById("btnDisabledBtnOn").onclick = function(){
    document.getElementById("btnOn").disabled = true;
};
document.getElementById("btnUnableBtnOn").onclick = function(){
    document.getElementById("btnOn").disabled = false;
};

//
document.getElementById("btnTinhtien").onclick = function(){
    var tongTien = +document.getElementById("txtTongtien").value;
    var phanTramtip = +document.getElementById("phanTramtip").value;
    var soNguoi = +document.getElementById("soNguoi").value;
    var kQua = (tongTien * (phanTramtip/100)) / soNguoi;
    
    //Cách 1:
    // var thogBaotinhTien = "So tien moi nguoi can tra la " + kQua;
    // document.getElementById("footerTientip").innerHTML = thogBaotinhTien;
    //Cách 2:
    // var ketQua = "<div> Mỗi người típ " + kQua + " $</div>";
    // document.getElementById("footerTientip").innerHTML = ketQua;
    //Cách 3:
    var ketQua = "<div>Mỗi người típ ";
    ketQua += kQua;
    ketQua += " $</div>";
    document.getElementById("footerTientip").innerHTML = ketQua;
}
//
