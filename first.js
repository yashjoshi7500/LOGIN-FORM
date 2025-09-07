let userName=document.getElementById("username");
let userPassword=document.getElementById("password");
let formEvent=document.getElementById("form");
//let nameError=document.getElementById("usernameerror");
//let passwordError=document.getElementById("userpassworderror");
/*let flag=0;
formevent.addEventListener("submit",(e)=>{
   
      e.
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
*/

formEvent.addEventListener("submit",(e)=>{
   e.preventDefault();
   validate();
});
 
const validate=()=>{
let nameValue=userName.value.trim();
let passwordValue=userPassword.value.trim();

if(nameValue=="")
{
   setErrorMsg(userName,'User Name is empty');
} else if(nameValue.length<3)
{
   setErrorMsg(userName,'Minimum 3 character required ');
} else{
   setSuccess(userName);
}
 
if(passwordValue=="")    
{
   setErrorMsg(userPassword,"User Password is empty");
} else if(passwordValue.length<=5){
   setErrorMsg(userPassword,"Minimum 6 character required");

}



else{
   setSuccess(userPassword);
}
}


function setErrorMsg(element ,Error )
{
   const formControl=element.parentElement;
   const displayError=formControl.querySelector('.error');
  displayError.innerText=Error;
}

function setSuccess(element )
{
   const formControl=element.parentElement;
   const displayError=formControl.querySelector('.error');
  displayError.innerText="";
}