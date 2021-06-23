$(document).ready(function() {

    $('.nurse-slide').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        autoplay: true,
        //prevArrow: $('.prev'),
        //nextArrow: $('.next'),
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.vdo-pdf-slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        fade: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        fade: true,
        arrows: false,
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 30) {
            $(".header.header").addClass("darkHeader");
            $("a.site-logo").addClass("site-logo2");
            $("header.header ul.nav").css("gap", "20px");

        } else {
            $(".header.header").removeClass("darkHeader");
            $("a.site-logo").removeClass("site-logo2");
            $("header.header ul.nav").css("gap", "30px");
        }
    });

}); // end of function