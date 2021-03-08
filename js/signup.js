const pw = document.querySelector("#pw");
const name = document.querySelector("#name");
const tel = document.querySelector("#tel");
const ckpoint = document.querySelector("#ckpoint");
const id__text = document.querySelector(".id__text");
const pw__text = document.querySelector(".pw__text");
const cpw__text = document.querySelector(".cpw__text");
const text = document.querySelector(".name__text");
const tel__text = document.querySelector(".tel__text");
const name__text = document.querySelector(".name__text");
const signup__btn = document.querySelector("#signup__button");
//정규표현식을 위한 변수 선언
let isTelChecked = false;
let isNameChecked = false;
let isPwdChecked = false;
let isIdChecked = false;
let regExp = new RegExp("^[가-힣]{2,8}$", "g");

function join() {


    initCheckPwd();
    initCheckName();
    initCheckTel()
    //공백 검사
    const cpw = document.querySelector("#cpw");
    const info_fl = document.querySelector("#info_fl");

    if (!id.value) {
        id__text.innerHTML = '아이디를 입력해주세요';
        return;
    }
    if (!pw.value) {
        pw__text.innerHTML = '비밀번호를 입력해주세요';
        return;
    }
    if (!cpw.value) {
        cpw__text.innerHTML = '비밀번호를 재확인 해주세요';
        return;
    }
    if (!name.value) {
        name__text.innerHTML = '성함을 입력해주세요';
        return;
    }
    if (pw.value != cpw.value) {
        cpw__text.innerHTML = '비밀번호가 일치하지 않습니다.';
        cpw__text.style.color = "red";
        return;
    }

    if (!tel.value) {
        tel__text.innerHTML = '전화번호를 입력해주세요';
        return;
    }
    if (!info_fl.checked) {
        alert("개인정보약관에 동의하세요.");
        return;
    }

    ckpoint.submit();
}

//init함수는 모두 정규표현식 확인
function initCheckPwd() {
    const regExp = new RegExp("^[a-zA-Z0-9!@#$%^&*]{4,10}$", "g");
    if (regExp.exec(pw.value) == null) {
        pw__text.innerText = "최소 4자리부터 최대 10자리까지 가능합니다.";
        pw__text.style.color = "red";
        isPwdChecked = false;
        return;
    } else {
        text.innerText = "";
        isPwdChecked = true;
    }
}


function initCheckName() {

    const regExp = new RegExp("^[가-힣]{2,6}$", "g");

    if (regExp.exec(name.value) == null) {
        name__text.innerText = "옳지않은 이름 입니다.";
        name__text.style.color = "red";
        return;
    } else {
        text.innerText = "";
        isNameChecked = true;
    }
}

function initCheckTel() {
    const regExp = new RegExp("^[01]{2,2}[0-9]{8,9}$", "g");

    if (regExp.exec(tel.value) == null) {
        tel__text.innerText = "휴대전화 번호만 사용가능합니다.";
        tel__text.style.color = "red";
        isPhoneChecked = false;
        return;
    } else {
        text.innerText = "";
        isPhoneChecked = true;
    }
}


//해당 상수에 키업 이벤트 리스너 등록

id.addEventListener('keyup', () => {
    initCheckId();
});

pw.addEventListener('keyup', () => {
    initCheckPwd();
});


name.addEventListener('keyup', () => {
    initCheckName();
});

tel.addEventListener('keyup', () => {
    initCheckTel();
});

document.addEventListener('keydown', (e)=>{
    if(e.key == "Enter"){
        join();
    }
});