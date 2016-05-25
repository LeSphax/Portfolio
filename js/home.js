$(document).ready(function () {
    var seenAbout = false;
    var seenProject = false;
    var seenPortoFolio = false;
    var seenContact = false;
    
    $('.about').bind('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView && !seenAbout) {
            $(".about-info").removeClass("hide-it");
            $(".about-image").removeClass("hide-it");
            $(".about-info").addClass("fadeInRight");
            $(".about-image").addClass("fadeInLeft");
            seenAbout = true;
        }
    });
    
    $('.project').bind('inview', function (event, isInView, visiblePartX, visblePartY) {
        if (isInView && !seenProject) {
            $(".project-title").addClass("fadeIn");
            $(".project-desc").addClass("fadeIn");
            seenProjectFolio = true;
        }
    });

    $('.portofolio').bind('inview', function (event, isInView, visiblePartX, visblePartY) {
        if (isInView && !seenPortoFolio) {
            $(".protofolio-title").addClass("fadeIn");
            $(".portofolio-icon").addClass("zoomIn");
            $(".portofolio-icon").removeClass("hide-it");
            $(".portofolio-subtitle").addClass("fadeIn");
            $(".portofolio-desc").addClass("fadeIn");
            seenPortoFolio = true;
        }
    });
    
    $('.contact').bind('inview', function (event, isInView, visiblePartX, visblePartY) {
        if (isInView && !seenContact) {
            $(".contact-title").addClass("fadeIn");
            $(".contact-desc").addClass("fadeIn");
            seenContact = true;
        }
    });
});