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
$('.transaction').on('mouseover', function(e) {
    // calculate how many boxes will be in a "row" 
    var windowWidth = $('.trans_container').width();
    var boxWidth = $('.transaction').outerWidth();
    var boxesPerRow = ~~(windowWidth / boxWidth);
    // Get the total length of the transactions
    if ($(".trans_hide")[0].style.display == "inline-block") {
        var size  = $('.transaction').length;
    }
    else {
        var size  = $('.transaction').not('.trans_hide').length;
    }
    // get the index of the clicked element
    var index = $(e.currentTarget).index();
    // get the column of the clicked element
    var col = (index % boxesPerRow) + 1;
    // calculate how far it is to the end of this row, 
    // and select that element
    var $endOfRow = $('.transaction').eq(index + boxesPerRow - col);
    var gapToOuter = ($('body').width() - windowWidth) /2;
    var gapToContainer = (windowWidth - (boxesPerRow * 210)) /2;
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
        $bottomGuy[0].children[0].style.bottom = "120px";
        // disable the going right-> left for the bottom row
        if (modBottom > 0) {
            $endOfRow[0].children[0].style.right = "auto";
        }
    }

});