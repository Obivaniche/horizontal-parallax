if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    new Swiper('.slider', {
        direction: 'vertical',
        speed: 2400,
        mousewheel: {
            enabled: true,
            sensitivity: 2.6
        },
        spaceBetween: 18,
        parallax: true,
        freeMode: true
    });
} else {
    new Swiper('.slider', {
        direction: 'horizontal',
        speed: 2400,
        mousewheel: {
            enabled: true,
            sensitivity: 2.6
        },
        spaceBetween: 18,
        parallax: true,
        freeMode: true
    });
};
