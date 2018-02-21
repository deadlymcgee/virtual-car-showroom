
var smoothScrollActive = false;


// control the scrolling
$('.div-navbar-link').click(function (event) {
    smoothScrollActive = true;
    event.preventDefault();
    $.smoothScroll({
        scrollTarget: "#" + event.target.innerText.toLowerCase(),
        speed: 1500,
        afterScroll: function(options) {
            smoothScrollActive = false;
        }
    });
    event.stopPropagation();

    //return false;
});





var mywindow = $(window);

var section2 = $("#section2");
$(window).on('scroll', function() {
        navbarProps();
    });




// hover effect for all links except logo
$(".div-navbar-link-container > a > .div-navbar-link")
    //.children(".div-navbar-link")
    .hover(function() {
            $(this).addClass("hover");
        },
        function() {
            $(this).removeClass("hover");
    });

// active link effect
$(".div-navbar-link").click(function() {
    $(".div-navbar-link.active").removeClass("active");
    var linkText = $(this).children(".navbar-text").text();
    if (linkText === "OPTIMUS") {
        // find the element with link text "HOME"
        $(".div-navbar-link")
            .filter(function() {
                return $(this).children(".navbar-text").text() === "HOME";
            })
            .addClass("active");

        //var homeLink = $(".div-navbar-link").find("span").text("HOME");
    } else {
        $(this).addClass("active");

    }
});

// change opacity dynamically depending on position
// increase navbar transparency when on home section
// set the active section effect according to scroll position
// do not apply when a smooth scroll event is in progress
function navbarProps() {
    var positionFromTop = mywindow.scrollTop();
    if (positionFromTop < section2.offset().top - 50) {
        // check current state to improve performance
        if (!$("#navbar").hasClass("navbar-transparent")) {
            $("#navbar").removeClass("navbar-opaque");
            $("#navbar").addClass("navbar-transparent");
        }
    }
    if (positionFromTop > section2.offset().top - 50) {
        if (!$("#navbar").hasClass("navbar-opaque")) {
            $("#navbar").removeClass("navbar-transparent");
            $("#navbar").addClass("navbar-opaque");
        }
    }
    //(taylorleejones, 2013)
    // active link effect
    if (!smoothScrollActive) {
        if (positionFromTop >= 0 && positionFromTop < section2.offset().top - 50) {
            var link = $(".div-navbar-link")
                .filter(function () {
                    return $(this).children(".navbar-text").text() === "HOME";
                });
            if (!$(link).hasClass("active")) {
                $(".div-navbar-link.active").removeClass("active");
                $(link).addClass("active");
            }
        }
        if (positionFromTop >= section2.offset().top - 50 && positionFromTop < $("#section3").offset().top - 50) {
            var link = $(".div-navbar-link")
                .filter(function () {
                    return $(this).children(".navbar-text").text() === "FEATURES";
                });
            if (!$(link).hasClass("active")) {
                $(".div-navbar-link.active").removeClass("active");
                $(link).addClass("active");
            }
        }
        if (positionFromTop >= $("#section3").offset().top - 50 && positionFromTop < $("#section4").offset().top - 50) {
            var link = $(".div-navbar-link")
                .filter(function () {
                    return $(this).children(".navbar-text").text() === "COLOUR";
                });
            if (!$(link).hasClass("active")) {
                $(".div-navbar-link.active").removeClass("active");
                $(link).addClass("active");
            }
        }
        if (positionFromTop >= $("#section4").offset().top - 50) {
            var link = $(".div-navbar-link")
                .filter(function () {
                    return $(this).children(".navbar-text").text() === "SPECS";
                });
            if (!$(link).hasClass("active")) {
                $(".div-navbar-link.active").removeClass("active");
                $(link).addClass("active");
            }
        }
    }

}