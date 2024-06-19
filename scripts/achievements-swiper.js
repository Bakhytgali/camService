const achievementsSwiper = new Swiper('.achievements-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.achievement-swiper-pagination'
    },
    navigation: {
        nextEl: '.achievement-swiper-button-next',
        prevEl: '.achievement-swiper-button-prev',
    },
    slidesPerView: 3
});
