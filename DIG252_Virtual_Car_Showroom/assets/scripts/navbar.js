




// change opacity dynamically depending on position
// increase navbar transparency when on home section
var mywindow = $(window);
var section2 = $("#section2");
$(window).on('scroll',
    function () {
        if (mywindow.scrollTop() < section2.offset().top - 50) {
            // check current state to improve performance
            $("#navbar").removeClass("navbar-opaque");
            $("#navbar").addClass("navbar-transparent");
        } else {
            $("#navbar").removeClass("navbar-transparent");
            $("#navbar").addClass("navbar-opaque");
        }
    });
//(taylorleejones, 2013)



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