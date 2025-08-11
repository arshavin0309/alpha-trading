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

//плавный скролл до якорей
let offsets = {};

function updateOffsets() {
    if (window.innerWidth > 1200) {
        offsets = {
            'platform': 80,
            'types': 120,
            'analytics': -40,
            'contact': 0
        };
    } else {
        offsets = {
            'platform': 80,
            'types': 120,
            'analytics': -40,
            'contact': 0
        };
    }
}

// начальное определение
updateOffsets();

// пересчитываем при изменении размера окна
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateOffsets, 150);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetID = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            e.preventDefault();

            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offset = offsets[targetID] || 0;

            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    });
});

let showFormBtn = document.querySelector('.footer__form'); // кнопка открыть
let formFixed = document.querySelector('.form-fixed'); // фон
let formContainer = document.querySelector('.form-fixed__container'); // сама форма

// Открытие
if (showFormBtn && formFixed) {
    showFormBtn.addEventListener('click', function (e) {
        e.preventDefault();
        formFixed.classList.add('active');
    });
}

// Закрытие при клике на фон
if (formFixed && formContainer) {
    formFixed.addEventListener('click', function (e) {
        if (!formContainer.contains(e.target)) {
            formFixed.classList.remove('active');
        }
    });
}

// Дополнительно: закрытие по Esc
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        formFixed.classList.remove('active');
    }
});