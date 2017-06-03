$(document).ready(function () {

    var navbarHeight = $(".nav-bar-bg").height();
    var navbarTop = $(".nav-bar-bg").offset().top;
    var windowCurrPosition;
    var navbarObjectArray = [];
    // distance of all the sections from the top of the page
    var pageSectionHeightArray = [];
    var selectedNavbar;
    var navbarArray = ['home', 'product', 'quality', 'team', 'contact']
    var currNavSelected;

    // store the jquery object of the navigation bar elements

    $('.home-page-wrap').children().each(function () {
        if (!($(this).hasClass('nav-bar-bg') || $(this).hasClass('footer-wrap'))) {
            // calucltate the distance of the section from the top of the page
            // and add it to the array
            if ($(this).hasClass('products-wrap')) {
                pageSectionHeightArray.push($(this).offset().top - 2* navbarHeight + 1);
            } else {
                pageSectionHeightArray.push($(this).offset().top - 2 * navbarHeight);
            }
        }
    });

    $(".nav-bar-elm").each(function () {
        navbarObjectArray.push($(this));
    })

    console.log('navbarObjectArray', navbarObjectArray, 'pageSectionHeightArray', pageSectionHeightArray);

    // whenever scroll is performed
    $(window).on('scroll', function () {
        // check the window position and navigation bar position
        // if the window current position >= navbar top 
        // fix the navbar onto top
        windowCurrPosition = $(window).scrollTop();
        if (windowCurrPosition >= navbarTop) {
            $(".nav-bar-bg").addClass('fixed');
        } else {
            $(".nav-bar-bg").removeClass('fixed');
        }
        // determine the curr section to highlight on navigation bar
        $(".nav-bar-elm").each(function () {
            if ($(this).hasClass("navbar-selected")) {
                $(this).removeClass("navbar-selected");
            }
        });
        selectedNavbar = determineCurrNavbar(pageSectionHeightArray, windowCurrPosition);
        selectedNavbar.addClass('navbar-selected');
    })

    var determineCurrNavbar = function (pageSectionHeightArray, windowCurrPosition) {
        var selectedIndex;
        for (var i = 0; i < pageSectionHeightArray.length; i++) {
            if (windowCurrPosition > pageSectionHeightArray[i]) {
                selectedIndex = i;
            }
        }
        currNavSelected = navbarArray[selectedIndex];
        console.log('currnav-selected', currNavSelected);
        return navbarObjectArray[selectedIndex];
    }

    var navbarHeight = $(".nav-bar-wrap").height();
    var scrollDelay = 500;
    // smooth scroll for home
    $("#home").click(function () {
        $("html, body").animate({
            scrollTop: $(".parallax-image").offset().top
        }, scrollDelay);
    });

    // smooth scroll for products
    $("#product").click(function () {
        if (navbarArray.indexOf(currNavSelected) < navbarArray.indexOf(navbarArray[1])) {
            // scrolling down
            $("html, body").animate({
                scrollTop: $(".products-wrap").offset().top - navbarHeight + 1
            }, scrollDelay);
        } else {
            // scrolling up
            $("html, body").animate({
                scrollTop: $(".products-wrap").offset().top
            }, scrollDelay);
        }
    });

    // smooth scroll for quality
    $("#quality").click(function () {
        $("html, body").animate({
            scrollTop: $(".qulaity-wrap").offset().top - navbarHeight + 1
        }, scrollDelay);
    });

    // smooth scroll for team
    $("#team").click(function () {
        $("html, body").animate({
            scrollTop: $(".team-wrap").offset().top - navbarHeight + 1
        }, scrollDelay);
    });

    // smooth scroll for contactus
    $("#contact").click(function () {
        $("html, body").animate({
            scrollTop: $(".contact-form-wrap").offset().top - navbarHeight + 1
        }, scrollDelay);
    });

});
