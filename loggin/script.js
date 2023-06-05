// $('#form').find('input, textarea').on('keyup blur focus', function (e) {
  
//   var $this = $(this),
//       label = $this.prev('label');

// 	  if (e.type === 'keyup') {
// 			if ($this.val() === '') {
//           label.removeClass('active highlight');
//         } else {
//           label.addClass('active highlight');
//         }
//     } else if (e.type === 'blur') {
//     	if( $this.val() === '' ) {
//     		label.removeClass('active highlight'); 
// 			} else {
// 		    label.removeClass('highlight');   
// 			}   
//     } else if (e.type === 'focus') {
      
//       if( $this.val() === '' ) {
//     		label.removeClass('highlight'); 
// 			} 
//       else if( $this.val() !== '' ) {
// 		    label.addClass('highlight');
// 			}
//     }

// });




// $('.tab a').on('click', function (e) {
  
//   e.preventDefault();
  
//   $(this).parent().addClass('active');
//   $(this).parent().siblings().removeClass('active');
  
//   target = $(this).attr('href');

//   $('.tab-content > div').not(target).hide();
  
//   $(target).fadeIn(800);
  
// });



if(localStorage.getItem("dangNhap")=="1"){
  document.getElementById("dangKi1").classList.remove("active")
  document.getElementById("dangNhap1").classList.add("active");
  document.getElementById("signup").classList.remove("active")
  document.getElementById("login").classList.add("active")
  localStorage.removeItem("dangNhap")
}

function snackbar(biensnack) {

  var x = document.getElementById("snackbar");
  console.log(x);
  x.innerHTML=biensnack;
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}




let danhSach=JSON.parse(localStorage.getItem("keya"))||[];
let bien=0;
let bienemail=0;
function signUp(){
  checkEmail()
  let first_name=document.getElementById("first_name").value;
  let last_name=document.getElementById("last_name").value;
  let email=document.getElementById("email").value;
  let phone=document.getElementById("phone").value;
  let password=document.getElementById("password").value;
  let gui=document.getElementById("gui");
  validatePassword(password);
let dl={
  first_name:first_name,
  last_name:last_name,
  email:email,
  phone:phone,
  password:password,
}
if(first_name&&last_name&&email&&phone&&password&&bienemail==1&&validatePassword(password)){
  danhSach.forEach(a=>{
    if(a.email==email){
bien=1;
    }
  })
  console.log(bien);
  if(bien==0){
    danhSach.push(dl);
    document.getElementById("dangKi1").classList.remove("active")
document.getElementById("dangNhap1").classList.add("active");
document.getElementById("signup").classList.remove("active")
document.getElementById("signup").classList.remove("in")
document.getElementById("login").classList.add("active")
document.getElementById("login").classList.add("in")
bienemail=0;


snackbar("Đăng Kí Thành Công");
console.log(danhSach);
    localStorage.setItem("keya",JSON.stringify(danhSach));




  }else{
    snackbar("email đã tồn tại");
    bien=0;
  }

}
}

function checkEmail() {
  var email = document.getElementById('email');
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) {
      snackbar('Hay nhap dia chi email hop le.\nExample@gmail.com');
      email.focus;
      return false;
  }
  else
  {
      snackbar('OK roi day, Email nay hop le.');
      bienemail=1;
  }
}
function validatePassword(password1) {
  if (password1.length<6) {
      snackbar("Mật khẩu phải từ 6 kí tự trở lên");
      return false;
  }
  return true;
}



function thu(){
let abc=document.getElementById("thunghiem1");
let abd=document.getElementById("thunghiem2");
console.log(abc);
console.log(abd);
}

function logIn(){
  let biendem=0;
  let trangThai=localStorage.getItem("online");
  if(trangThai==null){
  

  let danhSach=JSON.parse(localStorage.getItem("keya"))||[];
  let email=document.getElementById("email1").value; 
  let password=document.getElementById("password1").value;
if(email=="admin"&&password=="admin"){
  window.location.href ="./admin.html";
}else{


  danhSach.forEach((a)=>{
    if(a.email==email&&a.password==password){
      biendem=1;}
  } );
console.log(biendem);
  if(biendem==1){
    localStorage.setItem("online",email);
    window.location.href ="./webbanhang.html";
    biendem=0;
  }else{
    snackbar("Sai mật tài khoản hoặc mật khẩu")
  }
  
  
 
  }
  // else{
  //   window.location.href ="./webbanhang.html";
  // }

}
}


//chuyển trạng thái khi đã đăng nhập

function checkDangNhap(){
let trangThai=localStorage.getItem("online");
console.log(trangThai);
if(trangThai!=null){
 
  // dangNhap.src="";
  window.location.href ="./webbanhang.html";
  let dangNhap=document.getElementById("dangNhap");
  console.log(dangNhap);
  dangNhap.innerHTML="Đăng Xuất";


}
}
checkDangNhap()
//Đổi đăng nhập thành Đăng Xuất


