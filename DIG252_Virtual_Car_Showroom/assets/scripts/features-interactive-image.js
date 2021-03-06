﻿


$('.features-interactive-image-icon').click(function (event) {
    // Prevent the default event.
    event.preventDefault();

    // darken the image
    $(".features-interactive-image").fadeTo(800, 0.2);
    // features image
    // https://www.bennadel.com/blog/1827-using-jquery-s-slideup-and-slidedown-methods-with-bottom-positioned-elements.htm

    // hide the icons
    $(".features-interactive-image-icon").hide();
    // Get a reference to the container.
    var container = $(".div-features-content");
    // Toggle the slide based on its current
    // visibility.
    if (container.is(":visible")) {
        // Hide - slide up.
        container.slideUp(800);
    } else {
        // Show - slide down.
        container.slideDown(800, function () {
            // show the deactivate button
            $(".features-deativate").fadeTo(1000, 0.8);
        });
    }

});

// close the slide
$(".div-features-content").click(function () {
    // hide the deactivate button
    $(".features-deativate").hide();
    $(this).slideUp(500);
    $(".features-interactive-image").fadeTo(500, 1, function() {
        $(".features-interactive-image-icon").show();
    });
});

// features icon visual cue
$(".features-interactive-image-icon").hover(
    function () {
        $(this).attr({
            "src": "assets/images/features/information-icon-white-bruce.svg"
        });
    },
    function () {
        $(this).attr({
            "src": "assets/images/features/information-icon-green-bruce.svg"
        });
    }
);