const mainTypesSwiper = new Swiper('.main-types__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        el: '.main-types__pagination',
    },

    breakpoints: {
        500: {
            slidesPerView: 'auto',
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

const mainAnalyticsIcon = new Swiper('.main-analytics__icons', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,           // зацикливание
    freeMode: true,       // плавное скольжение без "остановки на слайде"
    speed: 8000,          // скорость пролистывания (мс)
    autoplay: {
        delay: 0,          // сразу, без паузы
        disableOnInteraction: false,
    },
    breakpoints: {
        1200: {
            slidesPerView: 5,
        },
    },
});

let mainAnalyticsBtns = new Swiper(".main-analytics__btns", {
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        900: {
            slidesPerView: 3,
        }
    }
});

let mainAnalyticsPages = new Swiper(".main-analytics__pages", {
    spaceBetween: 100,

    thumbs: {
        swiper: mainAnalyticsBtns,
    },
});