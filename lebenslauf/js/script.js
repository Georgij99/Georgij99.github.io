$(document).ready(function () {
    $('.schulbildung__slider').slick({
        infinite: false,
        slidesToShow: 3,
        dots: false,
        dotsClass: 'slick-dots',
        prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                    arrows: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                } 
            }
        ]
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const arrowOnTop = document.querySelector('.on-top');

    window.addEventListener('scroll', () => {
        document.documentElement.scrollTop > 300 ? arrowOnTop.style.visibility = "visible" : arrowOnTop.style.visibility = "hidden";
    });

    arrowOnTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    });
});

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$('.header__list').click(function(event) {
    $('.header__burger,.header__menu').removeClass('active');
    $('body').removeClass('lock');});