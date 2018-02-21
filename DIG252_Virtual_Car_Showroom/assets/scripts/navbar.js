



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