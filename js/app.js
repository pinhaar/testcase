$(document).foundation();

$('.mobile-menu-button').click(function(){
    $('.mobile-menu').slideDown("slow")
})
$('.close').click(function(){
    $('.mobile-menu').slideUp("slow")
})
$(document).ready(function(){
    $('.header-info-slider').slick({
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        dots:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }
        ]
    });

    $('.three-column-slider').slick({
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                }
            }
        ]
    });
});

