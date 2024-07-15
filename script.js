
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    loop: true,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        340: {
            spaceBetween: 0,
            slidesPerView: 1
        },
        577: {
            spaceBetween: 0,
            slidesPerView: 1
        },
        769: {
            spaceBetween: 0,
            slidesPerView: 1
        },
        992: {
            spaceBetween: 0,
            slidesPerView: 2
        },
        1100: {
            spaceBetween: 0,
            slidesPerView: 2
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

document.addEventListener('DOMContentLoaded', function () {
    const deadline = new Date(2024, 8, 20);
    let timerId = null;
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function countdownTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 30) % 30 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
        $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
        $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
});

