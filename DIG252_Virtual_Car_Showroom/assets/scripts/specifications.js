




$(".div-specs-top-level-menu-button-container").click(function () {

    if ($(".div-specs-content-container").is(":hidden")) {
        console.log("hidden!");
        $("#section4").removeClass("div-section4-normal")
        $("#section4").css("height", "+=485");
        $(".div-specs-content-container").show();
        $(".div-specs-second-level-menu-container").show();
        //$(".div-specs-sub-menu").show();
        //scroll up so the interaction is fully visible
        $('html, body').animate({
            scrollTop: $(".div-specs-top-level-menu").offset().top - 70
        }, 1000);
        //(Steve, 2011)
    }


    var selected = $(this).attr("id");
    $('div[class*="specs-sub-menu-category"].active').removeClass("active");
    $(".div-" + selected).addClass("active");


});

$(".div-specs-content-close").click(function() {
    if ($(".div-specs-content-container").is(":visible")) {
        console.log("reset the interaction!");
        $("#section4").addClass("div-section4-normal");
        $("#section4").css("height", "");
        $(".div-specs-content-container").hide();
        //$(".div-specs-content-container *").hide();
        $.smoothScroll({
            scrollTarget: "#specs",
            speed: 1000
        });
    }
})