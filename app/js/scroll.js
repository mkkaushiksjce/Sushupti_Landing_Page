$(document).ready(function () {

    var navbarHeight = $(".nav-bar-wrap").height();
    var scrollDelay = 500;
    // smooth scroll for home
    $("#home").click(function () {
        $("html, body").animate({
            scrollTop: $(".carousel-wrap").offset().top
        }, scrollDelay);
    });

    // smooth scroll for products
    $("#product").click(function () {
        $("html, body").animate({
            scrollTop: $(".products-wrap").offset().top - navbarHeight
        }, scrollDelay);
    });

    // smooth scroll for quality
    $("#quality").click(function () {
        $("html, body").animate({
            scrollTop: $(".qulaity-wrap").offset().top - navbarHeight
        }, scrollDelay);
    });

    // smooth scroll for team
    $("#team").click(function () {
        $("html, body").animate({
            scrollTop: $(".team-wrap").offset().top - navbarHeight
        }, scrollDelay);
    });

    // smooth scroll for contactus
    $("#contact").click(function () {
        $("html, body").animate({
            scrollTop: $(".contact-form-wrap").offset().top - navbarHeight
        }, scrollDelay);
    });

});