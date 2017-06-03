$(document).ready(function () {
var navbarHeight = $(".nav-bar-bg").offset().top;
var windowCurrPosition;

$(window).on('scroll', function(){
    windowCurrPosition = $(window).scrollTop();
    if(windowCurrPosition >= navbarHeight){
        $(".nav-bar-bg").addClass('fixed');
    }else{
        $(".nav-bar-bg").removeClass('fixed');
    }
})

});


