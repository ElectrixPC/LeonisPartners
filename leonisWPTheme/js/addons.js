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
      zoom: 12,
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



$(document).ready(function(){
    // check if there is only one inner page on the overall page
    if ($('.inline_page').length == 1) 
    {   // check whether the page is the news one
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
    // If there is another page on this page
    //if ($('.inline_page').length != 1) 
    //{   // check whether the page is desktop size
    //    var mq = window.matchMedia( "(min-width: 1000px)" );
    //    if (mq.matches) {
    //        // set it so that there is only 4 boxes that show, over two rows
    //        var newsWindowWidth = $('.news-container')[0].clientWidth;
    //       var newsBoxWidth = $('.news').outerWidth() + 40;
    //        var space = (newsWindowWidth - (newsBoxWidth * 2)) /2;
    //        var spacestr = space + 'px';
    //        $(".news-container").css({"padding-left": spacestr, "padding-right" : spacestr});
    //        var smallNews = 4;
    //        var totalNews = $('.news').length;
    //        if (totalNews > smallNews) {
    //            for (var item = smallNews; item < smallNews; item++) {
    //                $(".news")[item].style = "display: inline-block";
    //            }
    //            for (var item = smallNews -1; item < totalNews -1; item++) {
    //                $(".news")[item].style = "display: none";
    //            }
    //        } 
    //    }
    //    
    //}
    
    // Make the social media icons hover white
    $('.button-social').hover(
            function() { $(this.parentElement.children[0]).css({"color": "white", "transition" : "0.3s all ease-in-out"}) },
            function() { $(this.parentElement.children[0]).css({"color": "#263318", "transition" : "0.3s all ease-in-out"}) }
    );
});

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
        $bottomGuy[0].children[0].style.bottom = "90px";
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
    // if there is more than one inner page on the page (i.e is it the main page)
    //if ($('.inline_page').length != 1) 
    //{   // check whether the page is the news one
    //    // if its definitely not a mobile or tablet
    //    var mq = window.matchMedia( "(min-width: 1000px)" );
    //    if (mq.matches) {
    //        // change the news boxes to only have 4
    //        var newsWindowWidth = $('.news-container')[0].clientWidth;
    //        var newsBoxWidth = $('.news').outerWidth() + 40;
    //        var space = (newsWindowWidth - (newsBoxWidth * 2)) /2;
    //        var spacestr = space + 'px';
    //        $(".news-container").css({"padding-left": spacestr, "padding-right" : spacestr});
    //        var smallNews = 4;
    //        var totalNews = $('.news').length;
    //        if (totalNews > smallNews) {
    //            for (var item = smallNews; item < smallNews; item++) {
    //                $(".news")[item].style = "display: inline-block";
    //            }
    //            for (var item = smallNews -1; item < totalNews -1; item++) {
    //                $(".news")[item].style = "display: none";
    //            }
    //        } 
    //    }
    //}

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
  });

  // Pull up the user enter information for the download
$('.button-file').click(function() {
    var mq = window.matchMedia( "(max-width: 1000px)" );
    $(this.parentElement.parentElement.children[2].children[1]).css({"display" : "block"});
    if (mq.matches) {
        $(this.parentElement.parentElement.children[2]).css({"height":"70%", "width":"90%"});
    }
    else {
        $(this.parentElement.parentElement.children[2]).css({"height":"40%", "width":"30%"});
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
// Services boxes - Show hide on click of each box
$('.box-ma').click(function() {
    $('.services-cr').css({"opacity":"0", "position":"absolute"});
    $('.services-fv').css({"opacity":"0", "position":"absolute"});
    $('.services-ss').css({"opacity":"0", "position":"absolute"});
    $('.services-ma').css({"opacity":"1", "position":"relative"});
});
$('.box-cr').click(function() {
    $('.services-fv').css({"opacity":"0", "position":"absolute"});
    $('.services-ss').css({"opacity":"0", "position":"absolute"});
    $('.services-ma').css({"opacity":"0", "position":"absolute"});
    $('.services-cr').css({"opacity":"1", "position":"relative"});
});
$('.box-fv').click(function() {
    $('.services-cr').css({"opacity":"0", "position":"absolute"});
    $('.services-ss').css({"opacity":"0", "position":"absolute"});
    $('.services-ma').css({"opacity":"0", "position":"absolute"});
    $('.services-fv').css({"opacity":"1", "position":"relative"});
});
$('.box-ss').click(function() {
    $('.services-cr').css({"opacity":"0", "position":"absolute"});
    $('.services-ma').css({"opacity":"0", "position":"absolute"});
    $('.services-fv').css({"opacity":"0", "position":"absolute"});
    $('.services-ss').css({"opacity":"1", "position":"relative"});
});