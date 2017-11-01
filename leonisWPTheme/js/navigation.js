//var j = jQuery.noConflict();

open_nav = function(el) {
    if (!$(el).hasClass('active')) {
        $('body, html').addClass('nav-open');
        $(el).addClass('active');
    } else {
        $('body, html').removeClass('nav-open');
        $(el).removeClass('active');
    }
};

//jQuery(document).ready(function(j) {
//    j('div#page').scroll(function() {
//        j('header').addClass('shrink');
//    });     
//    });