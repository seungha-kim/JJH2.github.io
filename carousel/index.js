// carousel_btn 클릭하면 동작한다. left_btn, right_btn가 있다.

const carousel__btn = document.querySelectorAll('.carousel__btn');
const left__btn = document.querySelector('.left__btn');
const right__btn = document.querySelector('.right__btn');

// carousel이 총 몇개로 이루어 졌는지 확인하기.
const carousel__list = document.querySelectorAll('.carousel__content');


for (let i = 0; i < 3; i++) {
    carousel__list.classList.a
}

// 클릭 이벤트
carousel__btn.forEach(item => {
    item.addEventListener('click', function () {
        if (item.classList.contains('left__btn')) {
            for(let i = 0; i < 3; i++) {
                carousel
            }
            console.log('left');
        } else if (item.classList.contains('right__btn')) {
            console.log(carousel__list.length);
        };
    });
});