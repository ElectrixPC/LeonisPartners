open_nav = function(el) {
    if (!$(el).hasClass('active')) {
        $('body, html').addClass('nav-open');
        $(el).addClass('active');
    } else {
        $('body, html').removeClass('nav-open');
        $(el).removeClass('active');
    }
};

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
// button for showing the hidden tombstones
$(document).ready(function(){
    var windowWidth = $('.trans_container').width();
    var boxWidth = $('.transaction').outerWidth() + 8;
    var boxesPerRow = ~~(windowWidth / boxWidth);

    var smallTransactions = boxesPerRow * 2;
    var totalTransactions = $('.transaction').length;
    for (var item = 0; item < smallTransactions; item++) {
        $(".trans_hide")[item].style = "display: inline-block";
    }
    for (var item = smallTransactions -1; item < totalTransactions -1; item++) {
        $(".trans_hide")[item].style = "display: none";
    }
    for(var i=0; i<$('.transaction').length; i++) {
            var $thisGuy = $('.transaction').eq(i);
            $thisGuy[0].children[0].style.bottom = "auto";
            $thisGuy[0].children[0].style.right = "auto";
    }
    $(".button").click(function(){
        window.focus();
        // display the hidden tombstones
        $(".trans_hide").css({"display":"inline-block"});
        // reset the existing css for the hover stuff
        for(var i=0; i<$('.transaction').length; i++) {
            var $thisGuy = $('.transaction').eq(i);
            $thisGuy[0].children[0].style.bottom = "auto";
        }
    });
});
// Function for getting the last element in the row/last row
$('.transaction').on('click', function(e) {
    
    $('.trans-expand').removeAttr( 'style' );
    $('.trans-title').removeAttr( 'style' );
    $('.trans-type').removeAttr( 'style' );
    $('.trans-size').removeAttr( 'style' );
    $('.trans-date').removeAttr( 'style' );
    $('.trans-location').removeAttr( 'style' );
    $('.trans-sector').removeAttr( 'style' );
    $('.trans-type-short').removeAttr( 'style' );
    $('.trans-press').removeAttr( 'style' );
    $('img').removeAttr( 'style' );
    $('p').removeAttr('style');
    $('.trans-img1').removeAttr( 'style' );
    $('.trans-img2').removeAttr( 'style' );


    $(this.children[0]).css({   "z-index": "999",
                                "width": "412px",
                                "height": "615px",
                                //"transition": "width 0.2s ease-in-out",
                                //"transition": "height 0.2s ease-in-out",
                                "padding": "25px",
                                "background": "white",
                                "color": "black",
                                "border": "none",
                                "transition": ".3s ease",
                                "overflow": "hidden"});
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
                                                     "float"     : "right"});//location trans-location-content                               
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

    var tr = window.matchMedia( "(max-width: 600px)" );
    if (tr.matches) {
        $(this.children[0]).css({"width": "90%",
                                "height": "600px",
                                "left": "5%"});
        $(this.children[0].children[0].children[0]).css({"max-width": "200px"})//img1 img 
        $(this.children[0].children[2].children[0]).css({"max-width": "200px"});//img2 img
    }
    
    var windowWidth = $('.trans_container').width();
    var boxWidth = $('.transaction').outerWidth() + 8;
    var boxesPerRow = ~~(windowWidth / boxWidth);
    var totalNumber = boxesPerRow * 2;
    for (var item = 0; item < totalNumber -1; item++) {
        $(".trans_hide")[item].style = "display: inline-block"
    }

    // calculate how many boxes will be in a "row" 
    var windowWidth = $('.trans_container').width();
    var boxWidth = $('.transaction').outerWidth() + 8;
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
    var gapToContainer = (windowWidth - (boxesPerRow * 211)) /2;
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
    var windowWidth = $('.trans_container').width();
    var boxWidth = $('.transaction').outerWidth() + 8;
    var boxesPerRow = ~~(windowWidth / boxWidth);

    var smallTransactions = boxesPerRow * 2;
    var totalTransactions = $('.transaction').length;
    for (var item = 0; item < smallTransactions; item++) {
        $(".trans_hide")[item].style = "display: inline-block";
    }
    for (var item = smallTransactions -1; item < totalTransactions -1; item++) {
        $(".trans_hide")[item].style = "display: none";
    }
    for(var i=0; i<$('.transaction').length; i++) {
            var $thisGuy = $('.transaction').eq(i);
            $thisGuy[0].children[0].style.bottom = "auto";
            $thisGuy[0].children[0].style.right = "auto";
    }
});

$('.button-file').click(function() {
    var mq = window.matchMedia( "(max-width: 1000px)" );
    $('.wpcf7-form').css({"display" : "block"});
    if (mq.matches) {
        $('.wpcf7').css({"height":"70%", "width":"90%"});
    }
    else {
        $('.wpcf7').css({"height":"30%", "width":"30%"});
    }
    
    
});

$('.wpcf7-submit').click(function() {
    $('.wpcf7').css({"height":"0%", "width":"0%"});
    $('.wpcf7-form').css({"display" : "none"});
});

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