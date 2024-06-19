const swiper = new Swiper('.works-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.works-swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.works-swiper-button-next',
        prevEl: '.works-swiper-button-prev',
    },
    slidesPerView: 3
});