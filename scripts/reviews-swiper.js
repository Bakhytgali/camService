const reviewsSwiper = new Swiper('.reviews-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.reviews-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.reviews-swiper-button-next',
        prevEl: '.reviews-swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        800: {
            slidesPerView: 2
        },
        1300: {
            slidesPerView: 3
        }
    }
});
