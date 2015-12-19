//Function gets the height of the displaying device and makes any element with the class .full-height the same height, works when page loads and resizes.
function deviceHeight() {
    "use strict";
    
    var devHeight = $(window).height();
    $(".full-height").css("height", devHeight);
}

//Functions triggered when page loads
$(document).ready(function () {
    "use strict";

    deviceHeight();
    
});

//Functions triggered when page resize
$(window).resize(function () {
    "use strict";

    deviceHeight();
});