let showFormBtn = document.querySelector('.footer__form'); // кнопка открыть
let formFixed = document.querySelector('.form-fixed'); // фон
let formContainer = document.querySelector('.form-fixed__container'); // сама форма
let closeForm = document.querySelector('.form-fixed__close'); // кнопка закрыть
let upBtn = document.querySelector('.upButton'); // кнопка наверх
let body = document.body;
let html = document.documentElement;

// Открытие
if (showFormBtn && formFixed) {
    showFormBtn.addEventListener('click', function (e) {
        e.preventDefault();
        formFixed.classList.add('active');
        body.classList.add('no-scroll'); // блокируем скролл страницы
        html.classList.add('no-scroll'); // блокируем скролл страницы
        upBtn.classList.remove('show'); // скрываем кнопку
    });
}

// Закрытие
if (formFixed && formContainer) {
    // при клике на фон
    formFixed.addEventListener('click', function (e) {
        if (!formContainer.contains(e.target)) {
            formFixed.classList.remove('active');
            body.classList.remove('no-scroll'); // разблокируем скролл
            html.classList.remove('no-scroll'); // разблокируем скролл
            upBtn.classList.add('show'); // скрываем кнопку
        }
    });

    // при клике на крестик
    closeForm.addEventListener('click', function () {
        formFixed.classList.remove('active');
        body.classList.remove('no-scroll'); // разблокируем скролл
        html.classList.remove('no-scroll'); // разблокируем скролл
        upBtn.classList.add('show'); // скрываем кнопку
    });

    // закрытие по Esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            formFixed.classList.remove('active');
            body.classList.remove('no-scroll');
            html.classList.remove('no-scroll');
            upBtn.classList.add('show'); // скрываем кнопку
        }
    });
}