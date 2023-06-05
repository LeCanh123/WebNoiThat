



function snackbar(biensnack) {
    var x = document.getElementById("snackbar");
    x.innerHTML = biensnack;
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

function chuyenBase64(){
let linkAnh2= document.getElementById("linkAnh2")
let linkAnh1= document.getElementById("linkAnh1")
var file = linkAnh1.files[0];
    // console.log("file",file);
    var reader = new FileReader();
    reader.onloadend = function () {
        let linksrc=reader.result;
        linkAnh2.src=reader.result
        localStorage.setItem("linksrc",linksrc)
        
    
        // console.log(reader.result);
    // localStorage.setItem("image", reader.result);
    }
reader.readAsDataURL(file);
}

let linksrc="";
let sanPham=JSON.parse(localStorage.getItem("listSanPham1"))||[];



function themSanPham(){
if(localStorage.getItem("sua1")==null){

    var selectBox = document.getElementById("chonMuc");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    console.log(selectedValue);



let linkAnh= document.getElementById("linkAnh")
let linkAnh1= document.getElementById("linkAnh1")
let tenSanPham= document.getElementById("tenSanPham")
let giaSanPham= document.getElementById("giaSanPham")
let thongTinSanPham= document.getElementById("thongTinSanPham")
let themSanPham= document.getElementById("themSanPham")
//
let linkAnh2= document.getElementById("linkAnh2")
let tenSanPham2= document.getElementById("tenSanPham2")
let giaSanPham2= document.getElementById("giaSanPham2")
let thongTinSanPham2= document.getElementById("thongTinSanPham2")






let bien01=0;
if(localStorage.getItem("linksrc")!=null){
    sanPham.forEach((b01)=>{
        if(b01.link==localStorage.getItem("linksrc")){
            bien01=1;
        }
    })
if(selectedValue!="Chọn Mục"){
if(bien01==0){
if(tenSanPham.value!=""){
if(giaSanPham.value!=""){
if(thongTinSanPham.value!=""){
    tenSanPham2.innerHTML=tenSanPham.value;
    giaSanPham2.innerHTML=giaSanPham.value+"$";
    thongTinSanPham2.innerHTML=thongTinSanPham.value;
    linkAnh2.src=localStorage.getItem("linksrc");
    let a= {link:localStorage.getItem("linksrc"),ten:tenSanPham.value,info:thongTinSanPham.value,gia:giaSanPham.value,danhMuc:selectedValue};
    sanPham.push(a)
    localStorage.setItem("listSanPham1",JSON.stringify(sanPham));



    console.log(a);
    console.log(sanPham);
    localStorage.removeItem("linksrc");
     linkAnh.value= ""
     linkAnh1.value= ""
     tenSanPham.value= ""
     giaSanPham.value= ""
     thongTinSanPham.value= ""
    tenSanPham2.innerHTML="";
    giaSanPham2.innerHTML="$";
    thongTinSanPham2.innerHTML="";
    linkAnh2.src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/anh-chat-ngau.jpg";
    hienThiSanPhamAdmin()


}else{snackbar("Vui lòng nhập thông tin sản phẩm")}
}else{snackbar("Vui lòng nhập giá sản phẩm")}
}else{ snackbar("Vui lòng nhập tên sản phẩm")}}
else{snackbar("Ảnh Sản Phẩm bị trùng");
bien01=0;
}}else{snackbar("Vui Lòng Chọn Danh Mục")}
}else{snackbar("Vui lòng up hình ảnh sản phẩm lên")}

}else{
    

        var selectBox = document.getElementById("chonMuc");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        console.log(selectedValue);
    
    
    
    let linkAnh= document.getElementById("linkAnh")
    let linkAnh1= document.getElementById("linkAnh1")
    let tenSanPham= document.getElementById("tenSanPham")
    let giaSanPham= document.getElementById("giaSanPham")
    let thongTinSanPham= document.getElementById("thongTinSanPham")
    let themSanPham= document.getElementById("themSanPham")
    //
    let linkAnh2= document.getElementById("linkAnh2")
    let tenSanPham2= document.getElementById("tenSanPham2")
    let giaSanPham2= document.getElementById("giaSanPham2")
    let thongTinSanPham2= document.getElementById("thongTinSanPham2")
    
    
    
    
    
    
    let bien01=0;
    if(localStorage.getItem("linksrc")!=null){
        sanPham.forEach((b01)=>{
            if(b01.link==localStorage.getItem("linksrc")){
                bien01=1;
            }
        })
    if(selectedValue!="Chọn Mục"){
    if(bien01==0||localStorage.getItem("sua1")!=null){
    if(tenSanPham.value!=""){
    if(giaSanPham.value!=""){
    if(thongTinSanPham.value!=""){
        tenSanPham2.innerHTML=tenSanPham.value;
        giaSanPham2.innerHTML=giaSanPham.value+"$";
        thongTinSanPham2.innerHTML=thongTinSanPham.value;
        linkAnh2.src=localStorage.getItem("linksrc");
        let a= {link:localStorage.getItem("linksrc"),ten:tenSanPham.value,info:thongTinSanPham.value,gia:giaSanPham.value,danhMuc:selectedValue};
        
        sanPham.forEach((item1,item2)=>{
            if(localStorage.getItem("sua1")==item1.link){
                sanPham.splice(item2,1,a)
            }
        })
        localStorage.setItem("listSanPham1",JSON.stringify(sanPham));
        localStorage.removeItem("sua1");
        document.getElementById("themSanPham").innerHTML="Thêm Sản Phẩm"
    
    
        console.log(a);
        console.log(sanPham);
        localStorage.removeItem("linksrc");
         linkAnh.value= ""
         linkAnh1.value= ""
         tenSanPham.value= ""
         giaSanPham.value= ""
         thongTinSanPham.value= ""
        tenSanPham2.innerHTML="";
        giaSanPham2.innerHTML="$";
        thongTinSanPham2.innerHTML="";
        linkAnh2.src="https://toigingiuvedep.vn/wp-content/uploads/2021/06/anh-chat-ngau.jpg";
        hienThiSanPhamAdmin()
    
    
    }else{alert("Vui lòng nhập thông tin sản phẩm")}
    }else{alert("Vui lòng nhập giá sản phẩm")}
    }else{ alert("Vui lòng nhập tên sản phẩm")}}
    else{    
    alert("Ảnh Sản Phẩm bị trùng");
    bien01=0;
    }}else{alert("Vui Lòng Chọn Danh Mục")}
    }else{alert("Vui lòng up hình ảnh sản phẩm lên")}
    
   

}


}

function xemDemo(){
    let linkAnh= document.getElementById("linkAnh")
    let linkAnh1= document.getElementById("linkAnh1")
    let tenSanPham= document.getElementById("tenSanPham")
    let giaSanPham= document.getElementById("giaSanPham")
    let thongTinSanPham= document.getElementById("thongTinSanPham")
    let themSanPham= document.getElementById("themSanPham")
    //
    let linkAnh2= document.getElementById("linkAnh2")
    let tenSanPham2= document.getElementById("tenSanPham2")
    let giaSanPham2= document.getElementById("giaSanPham2")
    let thongTinSanPham2= document.getElementById("thongTinSanPham2")
    //
    tenSanPham2.innerHTML=tenSanPham.value;
    giaSanPham2.innerHTML=giaSanPham.value+"$";
    thongTinSanPham2.innerHTML=thongTinSanPham.value;
    linkAnh2.src=localStorage.getItem("linksrc");
}    



function changeImage(element) {
    // console.log("11111",element);
    // console.log(element.files);
    var file = element.files[0];
    // console.log("file",file);

    var reader = new FileReader();
    reader.onloadend = function () {
    // console.log('RESULT', reader.result);
    localStorage.setItem("image", reader.result);
    }
    }

function hienThiSanPhamAdmin(){
    sanPhamTrangAdmin=document.getElementById("sanPhamTrangAdmin");
    let sanPham=JSON.parse(localStorage.getItem("listSanPham1"))||[];
    let result="";
    sanPham.forEach((b01)=>{
        result+=`
        <div class="items" id="items3">
             <div class="img img1"><img id="linkAnh2" src="${b01.link}" alt=""></div>
             <div class="name" id="tenSanPham2">${b01.ten}</div>
             <div class="price" id="giaSanPham2">${b01.gia}$</div>
             <div class="gioHang1" onclick="sua1('${b01.link}')">Sửa</div>
             <div class="gioHang1" onclick="xoa1('${b01.link}')">Xoá</div>
             <div class="info" id="thongTinSanPham2">${b01.info}</div>
           </div>
        
        `
    })
    sanPhamTrangAdmin.innerHTML=result;
}
hienThiSanPhamAdmin()

function xoa1(bien1){
    sanPham.forEach((b01,b02)=>{
if(b01.link==bien1){
    sanPham.splice(b02,1);
    localStorage.setItem("listSanPham1",JSON.stringify(sanPham));
}
    })
    hienThiSanPhamAdmin()
}
function sua1(bien1){
    sanPham.forEach((b01,b02)=>{
if(b01.link==bien1){



    let linkAnh= document.getElementById("linkAnh")
    let linkAnh1= document.getElementById("linkAnh1")
    let tenSanPham= document.getElementById("tenSanPham")
    let giaSanPham= document.getElementById("giaSanPham")
    let thongTinSanPham= document.getElementById("thongTinSanPham")
    let themSanPham= document.getElementById("themSanPham")
    tenSanPham.value=b01.ten
    giaSanPham.value=b01.gia
    thongTinSanPham.value=b01.info
  localStorage.setItem("sua1",bien1)
  document.getElementById("themSanPham").innerHTML="Cập Nhật"
}
    })
    hienThiSanPhamAdmin()
}



let trangThai=localStorage.getItem("online");
if(trangThai!=null){
  let dangNhap=document.getElementById("dangNhap");
  dangNhap.href="";
  dangNhap.innerHTML="ĐĂNG XUẤT";
  dangNhap.onclick="dangXuat()";
  dangNhap.addEventListener("click",a=>{
        localStorage.removeItem("online");
        let dangNhap=document.getElementById("dangNhap");
        dangNhap.href="./webbanhang.html";
        dangNhap.innerHTML="ĐĂNG NHẬP";
        localStorage.setItem("dangNhap","1");
        // localStorage.removeItem("gioHangNguoiDung");


  })

}
document.getElementById("dangNhap").addEventListener("click",(a)=>{
  localStorage.setItem("dangNhap","1");

})

function quanLySanPham(){
    window.location.href="./admin.html"
}
function quanLyNguoiDung(){
    let quanLyNguoiDung=document.getElementById("quanLyNguoiDung");
    let nguoiDung=JSON.parse(localStorage.getItem("keya"));
   let result=`        <div class="items010">
   <div class="items010-1">Số Thứ Tự</div>
   <div class="items010-2">Tên Tài Khoản</div>
   <div class="items010-3">Chặn</div>
   <div class="items010-4">Xoá</div>
   </div>`;
    nguoiDung.forEach((a01,a02)=>{
        result+=`
        <div class="items010">
        <div class="items010-1">${a02}</div>
        <div class="items010-2">${a01.email}</div>
        <div class="items010-3" onclick="chanTaiKhoan('${a01.email}')">Chặn</div>
        <div class="items010-4" onclick="xoaTaiKhoan('${a01.email}')">Xoá</div>
        </div>
        
        
        `

    })
    quanLyNguoiDung.innerHTML=result;
}
function xoaTaiKhoan(tenTK){
    console.log(tenTK);
    let nguoiDung=JSON.parse(localStorage.getItem("keya"));
    nguoiDung.forEach((nd1,nd2)=>{
if(nd1.email==tenTK){
    nguoiDung.splice(nd2,1);
    localStorage.setItem("keya",JSON.stringify(nguoiDung));
    quanLyNguoiDung();
    localStorage.removeItem("online");

    let gioHangNguoiDung12=JSON.parse(localStorage.getItem("gioHangNguoiDung"));


    gioHangNguoiDung12.forEach((nd11,nd12)=>{

        if(nd11[0].id==tenTK){

console.log(gioHangNguoiDung12);
            gioHangNguoiDung12.splice(nd12,1);
            console.log(gioHangNguoiDung12);
            localStorage.setItem("gioHangNguoiDung",JSON.stringify(gioHangNguoiDung12))
        }
    })

}

    })
}
function search() {
    let d = document.getElementById("input").value.toUpperCase();
    let c = document.querySelectorAll(".items");
    let a = document.querySelectorAll(".items .name");
    if (d != "") {
      c.forEach(b => {
        b.classList.add("hidden")
  
      })
    }
    if (d == "") {
      c.forEach(b => {
        b.classList.remove("hidden")
      })
    }
    a.forEach(b => {
      let b1 = b.innerHTML.toUpperCase();
      if (b1.indexOf(d) != -1) {
        c.forEach(b => {
          if (b.innerHTML.indexOf(d) != -1) {
            b.classList.remove("hidden");
          }
        })
      }
    })
  }
