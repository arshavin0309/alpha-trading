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
            'analytics': 0,
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
