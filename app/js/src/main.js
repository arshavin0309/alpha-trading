const mainTypesSwiper = new Swiper('.main-types__swiper', {
    slidesPerView: 3,
    spaceBetween: 20,

    pagination: {
        el: '.main-types__pagination',
    },
});

const mainAnalyticsIcon = new Swiper('.main-analytics__icons', {
    slidesPerView: 5,
    spaceBetween: 20,
});

let mainAnalyticsBtns = new Swiper(".main-analytics__btns", {
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 3,
});

let mainAnalyticsPages = new Swiper(".main-analytics__pages", {
    spaceBetween: 100,

    thumbs: {
        swiper: mainAnalyticsBtns,
    },
});