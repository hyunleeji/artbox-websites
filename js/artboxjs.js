
const slideList = document.querySelector('.slide_list'); // Slide parent dom
const slideContents = document.querySelectorAll('.slide_content'); // each slide dom
const slideBtnNext = document.querySelector('.btn_next'); // next button
const slideBtnPrev = document.querySelector('.btn_prev'); // prev button
const pagination = document.querySelector('.slide_pagination');
const slideLen = slideContents.length; // slide length : 3
const slideWidth = innerWidth ; // slide width
const slideSpeed = 300; // slide speed
const startNum = 0; // initial slide index (0 ~ 4)

slideList.style.width = slideWidth * (slideLen + 2) + "px";

// Copy first and last slide
let firstChild = slideList.firstElementChild;
let lastChild = slideList.lastElementChild;
let clonedFirst = firstChild.cloneNode(true); // 오른쪽으로 돌렸을때 자연스럽게 보이기 위해 5 1 2 3 4 5 1 이렇게 만듬
let clonedLast = lastChild.cloneNode(true);

// Add copied Slides
slideList.appendChild(clonedFirst);
slideList.insertBefore(clonedLast, slideList.firstElementChild);
slideList.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "px, 0px, 0px)";

let curIndex = startNum; // current slide index (except copied slide)
let curSlide = slideContents[curIndex]; // current slide dom
curSlide.classList.add('slide_active');

/** Next Button Event */
slideBtnNext.addEventListener('click', function() {
    if (curIndex <= slideLen - 1) { //0<=2
    slideList.style.transition = slideSpeed + "ms";
    slideList.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "px, 0px, 0px)";
    }
    if (curIndex === slideLen - 1) {
    setTimeout(function() {
    slideList.style.transition = "0ms";
    slideList.style.transform = "translate3d(-" + slideWidth + "px, 0px, 0px)";
    }, slideSpeed);
    curIndex = -1;
    //이제 이 상황에서 5번 슬라이드일 때, '다음' 버튼을 클릭하면 바로 오른쪽의 1번 복제본으로 자연스럽게 넘어가는 애니메이션을 0.3초 동안 수행한다.
//그리고 0.3초가 지나자마자 (원본) 1번 슬라이드 위치로 이동시킨다. 출처: https://im-developer.tistory.com/97 [Code Playground]
    }
    curSlide.classList.remove('slide_active');
    pageDots[(curIndex === -1) ? slideLen - 1 : curIndex].classList.remove('dot_active');
    curSlide = slideContents[++curIndex];
    curSlide.classList.add('slide_active');
    pageDots[curIndex].classList.add('dot_active');
    });

/** Prev Button Event */
slideBtnPrev.addEventListener('click', function() {
    if (curIndex >= 0) { // 1,2,3,4,0>=0
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
    });
    console.log(curIndex,slideLen);

// Add pagination dynamically
let pageChild = '';
for (var i = 0; i < slideLen; i++) { // 1,2,3 
pageChild += '<li class="dot';
pageChild += (i === startNum) ? ' dot_active' : '';
pageChild += '" data-index="' + i + '"><a href="#"></a></li>';
}
pagination.innerHTML = pageChild;
const pageDots = document.querySelectorAll('.dot'); // each dot from pagination

    
/** Pagination Button Eventpagination */
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

