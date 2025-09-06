let userName=document.getElementById("username");
let userPassword=document.getElementById("password");
let formevent=document.getElementById("form");
let nameerror=document.getElementById("usernameerror");
let passworderror=document.getElementById("userpassworderror");
let flag=0;
formevent.addEventListener("submit",(e)=>{
   
      e.preventDefault();
      return validate();

   
});
function validate(){
   if(userName.value=="")
   {
         nameerror.innerHTML="User Name is empty!";
         flag=0;


   }
   else if(userName.value.length<3)
   {
      nameerror.innerHTML="Minimum 3 character required";
      flag=0;
   }else{
      nameerror.innerHTML="";
      flag=1;
   }
       if(userPassword.value=="")
      {
         passworderror.innerHTML="Password is empty!";
         flag=0;
      }else{
         passworderror.innerHTML="";
         flag=1;
      }
      if(flag){
         return true;
      }else{
         return false;
      }

      

   
};
