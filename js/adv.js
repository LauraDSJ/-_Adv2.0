//Function gets the height of the displaying device and makes any element with the class .full-height the same height, works when page loads and resizes.
function deviceHeight() {
    "use strict";
    
    var devHeight = $(window).height();
    $(".full-height").css("height", devHeight);
}

//Function to show the brackets in the navigation when hover 
function navBrackets() {
    "use strict";
    
    $(".nav-selected").hide();
    
    var filename = document.location.href.match(/[^\/]+$/)[0];
    
    if (filename === "index.php") {
        $("#menu-home .nav-selected").show();
    } else {
        if (filename === "our-capabilities.php") {
            $("#menu-capabilities .nav-selected").show();
        } else {
            if (filename === "good-it.php") {
                $("#menu-goodIT .nav-selected").show();
            } else {
                
            }
        }
    }
    
    $(".navbar-nav li a").mouseover(function () {
        $(this).children(".nav-selected").fadeIn();
    });

    $(".navbar-nav li a").mouseleave(function () {
        $(this).children(".nav-selected").fadeOut();
    });
}

//Function to show navigation background when scroll 
function navBG() {
    "use strict";
    
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $(".navbar").addClass("nav-bg");
        } else {
            $(".navbar").removeClass("nav-bg");
        }
    });
}

//Creates a square
function square() {
  var width = $(".square").width();
  $('.square').css('height', width);
}

//Display Karim and Josie Descriptions
function bossDescription() {
    $("#karim-description").hide();
    $("#josie-description").hide();

    $( "#read-more-karim" ).click(function() {
        $( "#karim-description" ).slideToggle( "slow" );
        $( ".show-text" ).toggle();
    });

    $( "#read-more-josie" ).click(function() {
        $( "#josie-description" ).slideToggle( "slow" );
        $( ".show-text" ).toggle();
    });
}

//Functions triggered when page loads
$(document).ready(function () {
    "use strict";

    deviceHeight();
    navBrackets();
    navBG();
    square();
    bossDescription();
    
});

//Functions triggered when page resize
$(window).resize(function () {
    "use strict";

    deviceHeight();
});