$(document).ready(function () {
    // jQuery to collapse the navbar on scroll
    //$(window).scroll(navScroll);

    $('.scrolling-btn').click(function () {
        var id = $(this).attr("data-id");
        $('html, body').animate({
            scrollTop: ($(id).offset().top - 50)
        }, 750);
        return false;
    });

    $('.top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    setFooterExhibitionistHeight();
   // navScroll();
    
    
    $(window).resize(setFooterExhibitionistHeight);
});

function setFooterExhibitionistHeight() {
    $('.footer-exhibitionist').height(($('.footer').height()));
}

/*function navScroll() {
    if ($(".navbar").offset().top > 75) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").removeClass("top-nav-collapse");
    }
}*/
