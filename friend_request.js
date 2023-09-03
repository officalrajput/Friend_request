let Enviroment = document.querySelector(".Enviroment");
let addingFriend=document.querySelector(".add");
let check=0;
addingFriend.addEventListener('click',function()
{
 if(check == 0)
 {

     Enviroment.style.color="green"
     Enviroment.innerHTML="Friend"
     addingFriend.innerHTML="Remove"
     check = 1;

}
else{
Enviroment.style.color="red"
Enviroment.innerHTML="Stranger"
addingFriend.innerHTML="Add Friend"
 check = 0
}
 
})
