const achievementsSwiper = new Swiper('.achievements-swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.achievement-swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.achievement-swiper-button-next',
        prevEl: '.achievement-swiper-button-prev',
    },
    slidesPerView: 1,
    breakpoints: {
        600: {
            slidesPerView: 2
        },
        700: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 4
        },
        900: {
            slidesPerView: 5
        }
        ,
        1000: {
            slidesPerView: 6
        }
    }
});
