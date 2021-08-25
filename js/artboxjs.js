
const slideList = document.querySelector('.slide_list'); 
const slideContents = document.querySelectorAll('.slide_content'); 
const slideBtnNext = document.querySelector('.btn_next'); 
const slideBtnPrev = document.querySelector('.btn_prev'); 
const pagination = document.querySelector('.slide_pagination');
const slideLen = slideContents.length; // slide length : 3
const slideWidth = innerWidth ; // slide width
const slideSpeed = 300; // slide speed
const startNum = 0; 

// cloneNode까지 포함한 width
slideList.style.width = slideWidth * (slideLen + 2) + "px";

const text = ["5만원 이상 무료배송", "5천원 할인 쿠폰 - 아트박스 홈페이지", "신규회원 신규회원 가입시 적립금 5,000원 바로 사용가능"];
let counter = 0;
const elem = document.querySelector(".rotate");
    setInterval(change, 1500);
    function change() {
        elem.innerHTML = text[counter];
            counter++;
            if(counter >= text.length) {
                counter = 0;
            }
    }


const hamburger = document.querySelector(".navicon");
const nav = document.querySelector(".nav__menu");
const navlist = document.querySelector(".nav__list");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("cross");
nav.classList.toggle("show");
    if(nav.className == 'nav__menu show') {
        navlist.style.height = `100vh`;
        navlist.style.display = `block`;
    } else {
        navlist.style.height = 0;
    }
})

// 오른쪽으로 돌렸을때 자연스럽게 보이기 위해 5 1 2 3 4 5 1 이렇게 만드는 것
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

// 복제한 노드 앞뒤로 배치
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);
slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";

// 슬라이드 index
let curIndex = startNum; 
let curSlide = slideContents[curIndex]; //slideContents에 curIndex를 대입함
curSlide.classList.add('slide_active');
console.log(curSlide)

// 다음버튼 클릭 이벤트
slideBtnNext.addEventListener('click', function() {
    if (curIndex <= slideLen - 1) { // 0.1.2
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
  }
    if (curIndex === slideLen - 1) { // 2 마지막 슬라이드에서 다음 버튼 누를때
    setTimeout(function() {
    slideList.style.transition = "0ms";
    slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = -1;
    } // 누를때마다 일어나는 일
    curSlide.classList.remove('slide_active');
    pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
    curSlide = slideContents[++curIndex];
    curSlide.classList.add('slide_active');
    pageDots[curIndex].classList.add('dot_active');
    });


// 이전버튼 클릭 이벤트
slideBtnPrev.addEventListener('click', function() {
    if (curIndex >= 0) { //0.1.2
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * curIndex) + "px, 0px, 0px)"; 
}
    if (curIndex === 0) {
    setTimeout(function() {
    slideList.style.transition = "0ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * slideLen) + "px, 0px, 0px)";
    }, slideSpeed); // slideWidth * slideLen = 4893 (innerwidth*3) 
    curIndex = slideLen;
    }
    curSlide.classList.remove('slide_active');
    pageDots[(curIndex === slideLen) ? 0 : curIndex].classList.remove('dot_active'); //var result = (x > y) ? x : y   // x가 더 크면 x를, 그렇지 않으면 y를 반환함.
    curSlide = slideContents[--curIndex];
    curSlide.classList.add('slide_active');
    pageDots[curIndex].classList.add('dot_active');
    console.log(curIndex,slideLen);    
});

// pagedots 만들기
let pageChild = '';
for (var i = 0; i < slideLen; i++) { 
pageChild += '<li class="dot';
pageChild += (i === startNum) ? ' dot_active' : '';
pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
}
pagination.innerHTML = pageChild;
const pageDots = document.querySelectorAll('.dot');

    
let curDot;
Array.prototype.forEach.call(pageDots, function (dot, i) {
    dot.addEventListener('click', function (e) {
    e.preventDefault();
    curDot = document.querySelector('.dot_active');
    curDot.classList.remove('dot_active');

    curDot = this;
    this.classList.add('dot_active');

    curSlide.classList.remove('slide_active');
    curIndex = Number(this.getAttribute('data-index'));
    curSlide = slideContents[curIndex];
    curSlide.classList.add('slide_active');
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 1)) + "px, 0px, 0px)";
    });
});
