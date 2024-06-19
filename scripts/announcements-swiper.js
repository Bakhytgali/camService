const announcement = new Swiper('.announcements-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.announcements-swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.announcement-swiper-button-next',
        prevEl: '.announcement-swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        1300: {
            slidesPerView: 4
        },
        940: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 2
        }
    }
});
