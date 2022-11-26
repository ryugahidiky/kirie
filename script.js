
function login() {
  password=document.getElementById("password");
   logincontainer=document.getElementById("login");

  if((password.value=="konamichi")||(password.value=="shaden")){
   // logincontainer.style.display="none";
    $(document).ready(function(){
            $("#login").fadeOut();
        });
     $(document).ready(function(){
            $(".main").fadeIn();
        });
  }
  else{
    password.style.backgroundColor="#f5a5a5";
  }
}