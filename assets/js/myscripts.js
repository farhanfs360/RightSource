$(document).ready(function() {

    $('.nurse-slide').slick({
        //centerMode: true,
        //centerPadding: '60px',
        slidesToShow: 3,
        arrows: false,
        dosts: true,
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
            $("a.site-logo img").css("max-width", "100px");
            $("header.header ul.nav").css("gap", "20px");

        } else {
            $(".header.header").removeClass("darkHeader");
            $("a.site-logo img").css("max-width", "155px");
            $("header.header ul.nav").css("gap", "30px");
        }
    });

}); // end of function