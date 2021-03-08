const id__text = document.querySelector(".id__text");	
const pw__text = document.querySelector(".pw__text");
const ckpoint = document.querySelector("#ckpoint");

function  validateCheck() {

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");


if(!id.value){
    id__text.innerText = "아이디를 입력해주세요.";
    id.focus();
    return false; 
}

if(!pw.value){
    pw__text.innerText = "비밀번호를 입력해주세요.";
       pw.focus();
    return false;
}

ckpoint.submit();

}
document.addEventListener('keydown', (e)=>{
if(e.key == "Enter"){
   validateCheck();
}
});
