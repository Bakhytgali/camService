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
    slidesPerView: 4,
    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        760: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 1
        }
    }
});
