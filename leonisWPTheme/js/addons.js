// Nav bar for mobile
open_nav = function(el) {
    if (!$(el).hasClass('active')) {
        $('body, html').addClass('nav-open');
        $(el).addClass('active');
    } else {
        $('body, html').removeClass('nav-open');
        $(el).removeClass('active');
    }
};

// google maps stuff for contact (mainly for the colors)
function initMap() {
    var uluru = {lat: 33.774983, lng: -84.297189};
    var pos_nyc = {lat: 40.75437209999999, lng: -73.97618260000002};
    var map_nyc = new google.maps.Map(document.getElementById('map_nyc'), {
      zoom: 14,
      center: pos_nyc,
      disableDefaultUI: true,
      styles: my_style
    });
    var marker_nyc = new google.maps.Marker({
      position: pos_nyc,
      map: map_nyc,
      icon: {
        url: "wp-content/themes/leonisWPTheme/images/icons/marker-stroked-15.png",
        scaledSize : new google.maps.Size(40, 40)
      }
    });
    var map = new google.maps.Map(document.getElementById('map_atl'), {
      zoom: 12,
      center: uluru,
      disableDefaultUI: true,
      styles: my_style
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map,
      icon: {
          url: "wp-content/themes/leonisWPTheme/images/icons/marker-stroked-15.png",
          scaledSize : new google.maps.Size(40, 40)
      }
    });
  }


var my_style = [
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 0
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 0
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bbbbbb"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 26
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#dddddd"
            },
            {
                "saturation": -100
            },
            {
                "lightness": -3
            },
            {
                "visibility": "on"
            }
        ]
    }
]

$(window).load(function(){
    cssAnimation();
});

$(document).ready(function(){
    // check if there is only one inner page on the overall page
    if ($('.inline_page').length == 1) 
    {   // check whether the page is the news one
        $('#page_title').css({"width" : "unset"});
        if ($('#page_title')[0].baseURI.includes('news-research'))
        {
            // Style it to be a singular page
            //$('.news-container').css({"width": "100%", "padding" : "none", "padding-bottom" : "200px"});//make the news boxes full width
            //$('.news-social-container').css({"display": "none"}); //make the social buttons dissapear
            $('.news-button').css({"display" : "none"}); // make the show all button go away
        }
        if ($('#page_title')[0].baseURI.includes('news/'))
        {
            $('#page_content').css({"width" : "50%", "left" : "50%", "transform" : "translateX(-50%)"});
            $('#page_content img').css({"width": "100%", "height" : "auto", "position" : "relative"});
            var mq = window.matchMedia( "(max-width: 750px)" );
            if (mq.matches) 
            {
                $('#page_content').css({"width" : "90%", "left" : "50%", "transform" : "translateX(-50%)"});
            }
        }
    }
    // show the right amount of transactions on load
    var windowWidth = $('.trans_container').width();
    var boxWidth = $('.transaction').outerWidth() + 10;
    var boxesPerRow = ~~(windowWidth / boxWidth);
    // Work out how many transactions would fit on two rows
    var smallTransactions = boxesPerRow * 2;
    // Work out the total transactions
    var totalTransactions = $('.transaction').length;
    // Display the first two lines of transactions
    for (var item = 0; item < smallTransactions + 1; item++) {
        $($(".trans_hide")[item]).css({"display": "inline-block"});
    }
    // Hide the rest of the transactions 
    for (var item = smallTransactions; item < totalTransactions -1; item++) {
        $($(".trans_hide")[item]).css({"display": "none"});
    }
    // Reset the styling for the bottom and right items (otherwise it'll fuck up)
    for(var i=0; i<$('.transaction').length; i++) {
            var $thisGuy = $('.transaction').eq(i);
            $thisGuy[0].children[0].style.bottom = "auto";
            $thisGuy[0].children[0].style.right = "auto";
    }
    // if there is more than one inner page on the page (i.e is it the main page)
    if ($('.inline_page').length != 1) 
    {   // check whether the page is the team one
        $('#page_430').css({"display" : "none"});
    }
    
    // Make the social media icons hover white
    $('.button-social').hover(
            function() { $(this.parentElement.children[0]).css({"color": "white", "transition" : "0.3s all ease-in-out"}) },
            function() { $(this.parentElement.children[0]).css({"color": "#263318", "transition" : "0.3s all ease-in-out"}) }
    );
    zoomOutMobile();
});

var myWidth = 0;

function zoomOutMobile() {
    var viewport = document.querySelector('meta[name="viewport"]');
    var mq = window.matchMedia( "(max-width: 780px)" );
    var mq1 = window.outerWidth > 500;
    var notequal = $('body').width() != 800;
    var diff = $('body').width() - window.outerWidth;
    var portrait = false;
    if (diff > 200) { portrait = true }
    var notcurrent = window.outerWidth != myWidth;
    if (mq.matches && mq1 && notequal && notcurrent ) {
        if ( viewport ) {
        viewport.content = "initial-scale=0.1";
        viewport.content = "width=800";
        myWidth = $('body').width();
        notcurrent = window.outerWidth != myWidth;
        }
    }
    else if ( !mq1 && portrait) {
        viewport.content = "initial-scale=1.0";
        viewport.content = "width=" + $('body').width();
        myWidth = $('body').width();

    }
  }
// show all transactions on click
$(".button-trans").click(function(){
    window.focus();
    // display the hidden tombstones
    $(".trans_hide").css({"display":"inline-block"});
    // reset the existing css for the hover stuff
    for(var i=0; i<$('.transaction').length; i++) {
        var $thisGuy = $('.transaction').eq(i);
        $thisGuy[0].children[0].style.bottom = "auto";
    }
});

// On exit button of transaction, delete the styling from everything on transactions
$('.trans-exit').on('click', function(e) {
    $('.trans-expand').removeAttr( 'style' );
    $('.trans-title').removeAttr( 'style' );
    $('.trans-type').removeAttr( 'style' );
    $('.trans-size').removeAttr( 'style' );
    $('.trans-date').removeAttr( 'style' );
    $('.trans-location').removeAttr( 'style' );
    $('.trans-location-content').removeAttr( 'style' );
    $('.trans-sector').removeAttr( 'style' );
    $('.trans-type-short').removeAttr( 'style' );
    $('.trans-press').removeAttr( 'style' );
    $('img').removeAttr( 'style' );
    $('p').removeAttr('style');
    $('.trans-img1').removeAttr( 'style' );
    $('.trans-img2').removeAttr( 'style' );
    $('.trans-exit').removeAttr( 'style' );

});
// Function for getting the last element in the row/last row
$('.transaction').on('click', function(e) {
    // If the user has pressed the exit button, ignore the rest of this function
    if (e.originalEvent.target.className == "fa fa-times fa-2x") {
        return;
    };
    // If its on a mobile, ignore the rest of the function
    var mq = window.matchMedia( "(max-width: 600px)" );
    if (mq.matches) {
        return;
    }
    // Reset styling before we begin
    $('.trans-expand').removeAttr( 'style' );
    $('.trans-title').removeAttr( 'style' );
    $('.trans-type').removeAttr( 'style' );
    $('.trans-size').removeAttr( 'style' );
    $('.trans-date').removeAttr( 'style' );
    $('.trans-location').removeAttr( 'style' );
    $('.trans-location-content').removeAttr( 'style' );
    $('.trans-sector').removeAttr( 'style' );
    $('.trans-type-short').removeAttr( 'style' );
    $('.trans-press').removeAttr( 'style' );
    $('img').removeAttr( 'style' );
    $('p').removeAttr('style');
    $('.trans-img1').removeAttr( 'style' );
    $('.trans-img2').removeAttr( 'style' );
    $('.trans-exit').removeAttr( 'style' );
    // Set the css for all of the classes in the transaction for onclick
    $(this.children[0]).css({   "z-index": "999",
                                "width": "412px",
                                "height": "615px",
                                "padding": "25px",
                                "background": "white",
                                "color": "black",
                                "border": "none",
                                "transition": ".3s ease",
                                "overflow": "hidden"}); // trans-expand
    $(this.children[0].children[0]).css({"width": "unset", 
                                         "top": "0"});//img1
    $(this.children[0].children[0].children[0]).css({   "transition": "max-width 0.3s ease-in-out", 
                                                         "max-width": "300px", 
                                                            "filter": "none", 
                                                               "top": "unset", 
                                                         "transform": "unset"})//img1 img 
    $(this.children[0].children[1]).css({"display": "block"});//type
    $(this.children[0].children[2].children[0]).css({"transition": "max-width 0.3s ease-in-out",
                                                     "max-height": "125px",
                                                      "max-width": "300px",
                                                         "filter": "none"});//img2 img
    $(this.children[0].children[3]).css({"display": "block"});//title
    $(this.children[0].children[6]).css({"display": "block",
                                      "text-align": "left",
                                        "position": "absolute",
                                          "bottom": "125px"});//size
    $(this.children[0].children[7]).css({"display": "block",
                                      "text-align": "left",
                                        "position": "absolute",
                                          "bottom": "100px"});//date
    $(this.children[0].children[8]).css({"display": "block",
                                      "text-align": "left",
                                        "position": "absolute",
                                          "bottom": "75px"});//location
    $(this.children[0].children[8].children[0]).css({"display": "block"});//location p
    $(this.children[0].children[8].children[1]).css({"bottom"    : "0px",
                                                     "left"      : "105%",
                                                     "transform" : "unset",
                                                     "float"     : "right",
                                                     "width"     : "300%"});//location trans-location-content
    $(this.children[0].children[8].children[1].children[0]).css({"font-weight" : "unset"}); // trans-location-content p                                                                                
    $(this.children[0].children[9]).css({"display": "block",
                                      "text-align": "left",
                                        "position": "absolute",
                                          "bottom": "50px"});//sector
    $(this.children[0].children[10]).css({"display": "block",
                                      "text-align": "left",
                                        "position": "absolute",
                                          "bottom": "25px"});//type short
    $(this.children[0].children[11]).css({"display": "block",
                                      "text-align": "left",
                                        "position": "absolute",
                                          "bottom": "0px"});//press
    $(this.children[0].children[12]).css({"display": "block",
                                       "text-align": "right",
                                         "position": "absolute",
                                              "top": "5px",
                                           "right" : "5px",
                                           "color" : "#263318"});//press
    // if the device is a mobile
    var tr = window.matchMedia( "(max-width: 600px)" );
    if (tr.matches) {
        $(this.children[0]).css({"width": "90%",
                                "height": "600px",
                                "left": "5%"});
        $(this.children[0].children[0].children[0]).css({"max-width": "200px"})//img1 img 
        $(this.children[0].children[2].children[0]).css({"max-width": "200px"});//img2 img
    }
    // calculate how many boxes will be in a "row" 
    var windowWidth = $('.trans_container').width();
    var boxWidth = $('.transaction').outerWidth() + 10;
    var boxesPerRow = ~~(windowWidth / boxWidth);
    var smallTransactions = boxesPerRow * 2;
    var hiddenTransactions = $('.transaction').length - smallTransactions;
    // Get the total length of the transactions
    if ($(".trans_hide")[hiddenTransactions].style.display == "inline-block") {
        var size  = $('.transaction').length;
    }
    else {
        var size = smallTransactions;
    }
    // get the index of the clicked element
    var index = $(e.currentTarget).index();
    // get the column of the clicked element
    var col = (index % boxesPerRow) + 1;
    // calculate how far it is to the end of this row, 
    // and select that element
    var $endOfRow = $('.transaction').eq(index + boxesPerRow - col);
    var gapToOuter = ($('body').width() - windowWidth) /2;
    // Boxes per row * the transaction plus padding
    var gapToContainer = (windowWidth - (boxesPerRow * 208.5)) /2;
    var gap = gapToOuter + gapToContainer + 1; 
    if (!$endOfRow.length) $endOfRow = $('.transaction').last();
    // Set the style at the end of the row to go to the left
    if ((size > boxesPerRow) && (boxesPerRow > 3)) {
        $endOfRow[0].children[0].style.right = String(gap + "px");
    }
    // get the minimum index for the tombstone to go up 
    var minUp = size - boxesPerRow;
    // if the bottom doesnt have a full row, this get it
    var modBottom =  size % boxesPerRow;
    // find the guy
    if (modBottom > 0) minUp = size - modBottom;
    var $bottomGuy = $('.transaction').eq(index);
    if ((index > minUp -1) && (minUp > 1)) {
        $bottomGuy[0].children[0].style.bottom = "100px";
        // disable the going right-> left for the bottom row
        if (modBottom > 0) {
            $endOfRow[0].children[0].style.right = "auto";
        }
    }

});

window.addEventListener('resize', function(event){
    // Resizing the amount of tranasctions on window resize
    var windowWidth = $('.trans_container').width();
    var boxWidth = $('.transaction').outerWidth() + 10;
    var boxesPerRow = ~~(windowWidth / boxWidth);
    var smallTransactions = boxesPerRow * 2;
    var totalTransactions = $('.transaction').length;
    for (var item = 0; item < smallTransactions + 1; item++) {
        $($(".trans_hide")[item]).css({"display": "inline-block"});
    }
    // Hide the rest of the transactions 
    for (var item = smallTransactions; item < totalTransactions -1; item++) {
        $($(".trans_hide")[item]).css({"display": "none"});
    }
    // remove the styling for the new transactions to stop it bugging out
    for(var i=0; i<$('.transaction').length; i++) {
            var $thisGuy = $('.transaction').eq(i);
            $thisGuy[0].children[0].style.bottom = "auto";
            $thisGuy[0].children[0].style.right = "auto";
    }
    zoomOutMobile();


});
// Make the nav bar smaller/larger on scrolling
$(window).scroll(function() {
    var mq = window.matchMedia( "(min-width: 1000px)" );
    if (mq.matches) {
        if ($(document).scrollTop() > 250) {
        $('header').css({"height" : "60px"})
        } else {
        $('header').css({"height" : "70px"});
        }

    }
    if ($(document).scrollTop() > 250) {
        $('html').addClass('skrollr');
        $('#page_268').css({"display" : "none"});
    }
    else {
        $('#page_268').css({"display" : "block"});
    }
  });

  // Pull up the user enter information for the download
$('.button-file').click(function() {
    var mq = window.matchMedia( "(max-width: 1000px)" );
    $(this.parentElement.parentElement.children[2].children[1]).css({"display" : "block"});
    if (mq.matches) {
        $(this.parentElement.parentElement.children[2]).css({"height":"70%", "width":"90%"});
    }
    else {
        $(this.parentElement.parentElement.children[2]).css({"height":"30%", "width":"30%"});
    }
});

// On submitting the form for the download, quit it
$('.wpcf7-submit').on('click', function(e) {
    $('.wpcf7').css({"height":"0%", "width":"0%"});
    $('.wpcf7-form').css({"display" : "none"});

    if ($(this.parentElement.parentElement.parentElement.parentElement.parentElement.children[1])[0].className == "fa fa-check fa-5x") {
        $($(this.parentElement.parentElement.parentElement.parentElement.parentElement.children[0])[0]).css({"opacity": "0", 
                                                                                                              "height": "0px",
                                                                                                               "width": "0px",
                                                                                                             "padding": "0px"});
        $($(this.parentElement.parentElement.parentElement.parentElement.parentElement.children[1])[0]).css({"opacity": "1", 
                                                                                                              "height": "135px",
                                                                                                               "width": "135px",
                                                                                                             "padding": "25px"});
    }
});
// Team expand/collapse

$('.button-team').click(function(e) {
    $('.team').removeAttr( 'style' );
    $('.team-readmore').removeAttr('style');
    $('.team-linkedin').removeAttr('style');
    $('.team-email-address').removeAttr('style');
    $('.team-phone-number').removeAttr('style');
    $('i').removeAttr('style');
    $('p').removeAttr('style');
    $('img').removeAttr('style');
    $('.team-description').removeAttr('style');
    $('.team-experience').removeAttr('style');
    
    $('.team-expand').css({"height": "500px"}); 
    $('.team-close').removeAttr('style');


    var windowWidth = $('.team-container').width();
    var boxWidth = $('.team').outerWidth();
    var boxesPerRow = ~~(windowWidth / boxWidth);
    var currentItem = $(e.currentTarget.parentElement.parentElement).index();

    var hBlockPosition = currentItem % boxesPerRow -1;
    if(hBlockPosition == -1) {
        var hBlockPosition = boxesPerRow -1;
        var vBlockPosition = Math.floor(currentItem / boxesPerRow);
    }
    else {
        var vBlockPosition = Math.floor(currentItem / boxesPerRow) + 1;
    }
    var hPositionStr = '-' + hBlockPosition + '00%';
    var vPositionStr = '-' + vBlockPosition + '20%';
    var mq = window.matchMedia( "(max-width: 1500px)" );
    if (mq.matches) 
    {
        $('.team-expand').css({"height": "0px"});
    }
    else {
        $(this.parentElement.parentElement).css({"transform": "translate(" + hPositionStr + ", " + vPositionStr + ")"});
    }
    $(this.parentElement.parentElement.children[0].children[0]).css({"filter" : "none"}); // img
    $(this.parentElement.parentElement.children[3]).css({"display" : "none"}); // readmore
    $(this.parentElement.parentElement.children[4]).css({"position": "absolute", "display" : "block", "top" : "unset", "left": "300px", "bottom": "10%", "font-size" : "2em"}); // email address
    $(this.parentElement.parentElement.children[4].children[1]).css({"display" : "block"}); // paragraph
    $(this.parentElement.parentElement.children[5]).css({"position": "absolute", "display" : "block", "left": "300px", "width" : "200px", "bottom": "5%", "font-size" : "2em"}); // phone number
    $(this.parentElement.parentElement.children[5].children[1]).css({"display" : "block"}); // paragraph
    $(this.parentElement.parentElement.children[6]).css({"position": "absolute", "display" : "block", "left": "135px", "top": "unset", "font-size" : "2em"}); // linkedin
    $(this.parentElement.parentElement.children[7]).css({"display" : "block"}); // description
    $(this.parentElement.parentElement.children[8]).css({"display" : "block"}); // experience
    $(this.parentElement.parentElement.children[9]).css({"display" : "inline-block", "position" : "absolute", "top" : "-20px", "left" : "1100px"}); // exit button
});


$('.team-close').click(function() {
    $('.team').removeAttr( 'style' );
    $('.team-readmore').removeAttr('style');
    $('.team-linkedin').removeAttr('style');
    $('.team-email-address').removeAttr('style');
    $('.team-phone-number').removeAttr('style');
    $('i').removeAttr('style');
    $('p').removeAttr('style');
    $('.team-description').removeAttr('style');
    $('.team-experience').removeAttr('style');
    $('.team-expand').removeAttr('style');
    $('.team-close').removeAttr('style');
});


// Services boxes - Show hide on click of each box
$('.box-ma').click(function() {
    $('.services-cr').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    $('.services-fv').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    $('.services-ss').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    if($('.services-ma')[0].style.opacity == "1") 
    {
        $('.services-ma').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    }
    else 
    {
        $('.services-ma').css({"opacity":"1", "position":"relative", "max-height" : "2000px"});
    }
    
});
$('.box-cr').click(function() {
    $('.services-fv').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    $('.services-ss').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    $('.services-ma').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    if($('.services-cr')[0].style.opacity == "1") 
    {
        $('.services-cr').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    }
    else 
    {
        $('.services-cr').css({"opacity":"1", "position":"relative", "max-height" : "2000px"});
    }
    
});
$('.box-fv').click(function() {
    $('.services-cr').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    $('.services-ss').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    $('.services-ma').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    if($('.services-fv')[0].style.opacity == "1") 
    {
        $('.services-fv').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    }
    else 
    {
        $('.services-fv').css({"opacity":"1", "position":"relative", "max-height" : "2000px"});
    }
});
$('.box-ss').click(function() {
    $('.services-cr').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    $('.services-ma').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    $('.services-fv').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    if($('.services-ss')[0].style.opacity == "1") 
    {
        $('.services-ss').css({"opacity":"0", "position":"absolute", "max-height" : "0px"});
    }
    else 
    {
        $('.services-ss').css({"opacity":"1", "position":"relative", "max-height" : "2000px"});
    }
});

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    var s = skrollr.init({
     smoothScrollingDuration:10,
     forceHeight:false
 });

}
else{
 $('html').addClass('noSkrollr');
}

/*! skrollr 0.6.15 (2013-10-03) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,G(),at=this,r=r||{},ft=r.constants||{},r.easing)for(var n in r.easing)j[n]=r.easing[n];ht=r.edgeStrategy||"set",st={beforerender:r.beforerender,render:r.render},ct=r.forceHeight!==!1,ct&&(Vt=r.scale||1),ut=r.mobileDeceleration||E,mt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||A,dt={targetTop:at.getScrollTop()},Nt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Nt?(lt=t.getElementById("skrollr-body"),lt&&ot(),W(),xt(o,[y,S],[T])):xt(o,[y,b],[T]),at.refresh(),bt(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Lt||e!==It)&&(Lt=t,It=e,Bt=!0)});var i=R();return function l(){Z(),Tt=i(l)}(),at}var o,a,i=e.skrollr={get:function(){return at},init:function(e){return at||new n(e)},VERSION:"0.6.15"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",m="touchend",g="skrollable",d=g+"-before",v=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",w="linear",k=1e3,E=.004,A=200,x="start",F="end",C="center",D="bottom",H="___skrollable_id",P=/^\s+|\s+$/g,V=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,z=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,O=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,B=/\{\?\}/g,M=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,N=/[a-z\-]+-gradient/g,$="",_="",G=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if($=n.match(e)||+n==n&&t[n].match(e))break;if(!$)return $=_="",r;$=$[0],"-"===$.slice(0,1)?(_=$,$={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[$]):_="-"+$.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[$.toLowerCase()+"RequestAnimationFrame"],r=Dt();return(Nt||!t)&&(t=function(t){var n=Dt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Dt(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[$.toLowerCase()+"CancelAnimationFrame"];return(Nt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},j={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,it=[],Mt=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=mt,f=ht;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var m=i.attributes[u];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name){var d=m.name.match(V);if(null!==d){var v={props:m.value,element:i};s.push(v);var h=d[1];h=h&&ft[h.substr(1)]||0;var y=d[2];/p$/.test(y)?(v.isPercentage=!0,v.offset=((0|y.slice(0,-1))+h)/100):v.offset=(0|y)+h;var T=d[3],b=d[4]||T;T&&T!==x&&T!==F?(v.mode="relative",v.anchors=[T,b]):(v.mode="absolute",T===F?v.isEnd=!0:v.isPercentage||(v.frame=v.offset*Vt,delete v.offset))}}else f=m.value;else c="off"!==m.value;else if(l=t.querySelector(m.value),null===l)throw'Unable to find anchor target "'+m.value+'"'}if(s.length){var S,w,k;!a&&H in i?(k=i[H],S=it[k].styleAttr,w=it[k].classAttr):(k=i[H]=Mt++,S=i.style.cssText,w=At(i)),it[k]={element:i,styleAttr:S,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},xt(i,[g],[])}}}for(kt(),n=0,o=e.length;o>n;n++){var E=it[e[n][H]];E!==r&&(J(E),Q(E))}return at},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=at.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Dt(),o=at.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||k,startTime:n,endTime:n+(t.duration||k),easing:j[t.easing||w],done:t.done},pt.topDiff||(pt.done&&pt.done.call(at,!1),pt=r),at},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(at,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.setScrollTop=function(t,r){return vt=r===!0,Nt?$t=s.min(s.max(t,0),Pt):e.scrollTo(0,t),at},n.prototype.getScrollTop=function(){return Nt?$t:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Pt},n.prototype.on=function(e,t){return st[e]=t,at},n.prototype.off=function(e){return delete st[e],at},n.prototype.destroy=function(){var e=U();e(Tt),wt(),xt(o,[T],[y,b,S]);for(var t=0,n=it.length;n>t;t++)nt(it[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",lt&&i.setStyle(lt,"transform","none"),at=r,lt=r,st=r,ct=r,Pt=0,Vt=1,ft=r,ut=r,zt="down",Ot=-1,It=0,Lt=0,Bt=!1,pt=r,mt=r,gt=r,dt=r,vt=r,Mt=0,ht=r,Nt=!1,$t=0,yt=r};var W=function(){var n,i,l,c,g,d,v,h,y,T,b;bt(o,[f,u,p,m].join(" "),function(e){e.preventDefault();var o=e.changedTouches[0];switch(c=o.clientY,g=o.clientX,y=e.timeStamp,e.type){case f:for(n&&n.blur(),at.stopAnimateTo(),n=e.target;3===n.nodeType;)n=n.parentNode;i=d=c,l=g,h=y;break;case u:v=c-d,b=y-T,at.setScrollTop($t-v,!0),d=c,T=y;break;default:case p:case m:var a=i-c,S=l-g,w=S*S+a*a;if(49>w){n.focus();var k=t.createEvent("MouseEvent");return k.initEvent("click",!0,!0),n.dispatchEvent(k),r}n=r;var E=v/b;E=s.max(s.min(E,3),-3);var A=s.abs(E/ut),x=E*A+.5*ut*A*A,F=at.getScrollTop()-x,C=0;F>Pt?(C=(Pt-F)/x,F=Pt):0>F&&(C=-F/x,F=0),A*=1-C,at.animateTo(0|F+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},Y=function(){var e,t,r,n,a,i,l,c,f;for(c=0,f=it.length;f>c;c++)for(e=it[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++){l=n[a];var u=l.offset;l.isPercentage&&(u*=o.clientHeight,l.frame=u),"relative"===l.mode&&(nt(t),l.frame=at.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,nt(t,!0)),ct&&!l.isEnd&&l.frame>Pt&&(Pt=l.frame)}for(Pt=s.max(Pt,Et()),c=0,f=it.length;f>c;c++){for(e=it[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],l.isEnd&&(l.frame=Pt-l.offset);e.keyFrames.sort(Ht)}},X=function(e,t){for(var r=0,n=it.length;n>r;r++){var o,a,s=it[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,m=u[u.length-1].frame,y=p>f,T=f>m,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(xt(c,[y?d:h],[d,v,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":nt(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=rt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(xt(c,[g,v],[d,h]),s.edge=0);for(var w=0,k=u.length-1;k>w;w++)if(f>=u[w].frame&&u[w+1].frame>=f){var E=u[w],A=u[w+1];for(o in E.props)if(l.call(E.props,o)){var x=(f-E.frame)/(A.frame-E.frame);x=E.props[o].easing(x),a=tt(E.props[o].value,A.props[o].value,x),a=rt(a),i.setStyle(c,o,a)}break}}},Z=function(){Bt&&(Bt=!1,kt());var e,t,n=at.getScrollTop(),o=Dt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),at.setScrollTop(n,!0);else if(!vt){var a=dt.targetTop-n;a&&(dt={startTop:Ot,topDiff:n-Ot,targetTop:n,startTime:qt,endTime:qt+gt}),dt.endTime>=o&&(t=j.sqrt((o-dt.startTime)/gt),n=0|dt.startTop+t*dt.topDiff)}if(Nt&&lt&&i.setStyle(lt,"transform","translate(0, "+-$t+"px) "+yt),vt||Ot!==n){zt=n>Ot?"down":Ot>n?"up":zt,vt=!1;var l={curTop:n,lastTop:Ot,maxTop:Pt,direction:zt},s=st.beforerender&&st.beforerender.call(at,l);s!==!1&&(X(n,at.getScrollTop()),Ot=n,st.render&&st.render.call(at,l)),e&&e.call(at,!1)}qt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=z.exec(l.props));)a=i[1],o=i[2],n=a.match(O),null!==n?(a=n[1],n=n[2]):n=w,o=o.indexOf("!")?K(o):[o.slice(1)],s[a]={value:o,easing:j[n]};l.props=s}},K=function(e){var t=[];return M.lastIndex=0,e=e.replace(M,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),_&&(N.lastIndex=0,e=e.replace(N,function(e){return _+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},Q=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)et(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)et(e.keyFrames[t],n)},et=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},tt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},rt=function(e){var t=1;return B.lastIndex=0,e[0].replace(B,function(){return e[t++]})},nt=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=it[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,xt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=At(n),n.style.cssText=r.styleAttr,xt(n,r.classAttr)))},ot=function(){yt="translateZ(0)",i.setStyle(lt,"transform",yt);var e=c(lt),t=e.getPropertyValue("transform"),r=e.getPropertyValue(_+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(yt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{$&&(n[$+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var at,it,lt,st,ct,ft,ut,pt,mt,gt,dt,vt,ht,yt,Tt,bt=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),_t.push({element:t,name:a,listener:n})},St=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=_t.length;r>t;t++)e=_t[t],St(e.element,e.name,e.listener);_t=[]},kt=function(){var e=at.getScrollTop();Pt=0,ct&&!Nt&&(a.style.height="auto"),Y(),ct&&!Nt&&(a.style.height=Pt+o.clientHeight+"px"),Nt?at.setScrollTop(s.min(at.getScrollTop(),Pt)):at.setScrollTop(e,!0),vt=!0},Et=function(){var e=lt&&lt.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},At=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},xt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Ct(i).replace(Ct(o[l])," ");i=Ft(i);for(var c=0,f=n.length;f>c;c++)-1===Ct(i).indexOf(Ct(n[c]))&&(i+=" "+n[c]);t[a]=Ft(i)},Ft=function(e){return e.replace(P,"")},Ct=function(e){return" "+e+" "},Dt=Date.now||function(){return+new Date},Ht=function(e,t){return e.frame-t.frame},Pt=0,Vt=1,zt="down",Ot=-1,qt=Dt(),It=0,Lt=0,Bt=!1,Mt=0,Nt=!1,$t=0,_t=[]})(window,document);

/*! skrollr-ie 1.0.0 (2013-05-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-ie | Free to use under terms of MIT license */
(function(e,t){"use strict";var r=/hsla?\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)%\s*,\s*(-?[\d.]+)%.*?\)/g,s=/rgba?\(\s*(-?[\d.]+%?)\s*,\s*(-?[\d.]+%?)\s*,\s*(-?[\d.]+%?).*?\)/g,o=/^#[^\s]+$/,l=t.setStyle;t.setStyle=function(e,t,o){l.apply(this,arguments);var a,i=e.style;if("opacity"===t)return i.zoom=1,o>=1&&i.removeAttribute?i.removeAttribute("filter"):i.filter="alpha(opacity="+100*o+")",void 0;if(o.indexOf("hsl")>-1&&(a=!1,o=o.replace(r,function(e,t,r,s){return a=!0,n.hsl(parseFloat(t),parseFloat(r),parseFloat(s))}),a))try{i[t]=o}catch(u){}else if(o.indexOf("rgb")>-1&&(a=!1,o=o.replace(s,function(e,t,r,s){return a=!0,t=parseFloat(t,10),r=parseFloat(r,10),s=parseFloat(s,10),e.indexOf("%")>-1&&(t=255*(t/100),r=255*(r/100),s=255*(s/100)),n.rgb(0|t,0|r,0|s)}),a))try{i[t]=o}catch(u){}else;};var n={hsl:function(e,t,r,s){return e%=360,e/=60,r/=100,t=[r+=t*=(.5>r?r:1-r)/100,r-2*e%1*t,r-=t*=2,r,r+e%1*t,r+t],s=[t[~~e%6],t[(16|e)%6],t[(8|e)%6]],n.rgb(parseInt(255*s[0],10),parseInt(255*s[1],10),parseInt(255*s[2],10))},rgb:function(e,t,r){return"#"+((256+e<<8|t)<<8|r).toString(16).slice(1)}};e.querySelector=e.querySelector||function(t){if(!o.test(t))throw'Unsupported selector "'+t+'". The querySelector polyfill only works for IDs.';return e.getElementById(t.substr(1))}})(document,window.skrollr);
