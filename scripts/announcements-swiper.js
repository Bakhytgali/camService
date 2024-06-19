document.addEventListener("DOMContentLoaded", () => {
    const announcementsSwiper = new Swiper('.announcements-swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.announcements-swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.announcements-swiper-button-next',
            prevEl: '.announcements-swiper-button-prev',
        },
        slidesPerView: 4
    });

});