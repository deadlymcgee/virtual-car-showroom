




$(".div-specs-top-level-menu").click(function () {

    if ($(".div-specs-content-container").is(":hidden")) {
        console.log("hidden!");
        $("#section4").removeClass("div-section4-normal")
        $("#section4").css("height", "+=485");
        $(".div-specs-content-container").show();
        $(".div-specs-content-container *").show();
        //scroll up so the interaction is fully visible
        $('html, body').animate({
            scrollTop: $(".div-specs-top-level-menu").offset().top - 70
        }, 1000);
        //(Steve, 2011)
    }
    else if ($(".div-specs-content-container").is(":visible")) {
        console.log("reset the interaction!");
        $("#section4").addClass("div-section4-normal");
        $("#section4").css("height", "");
        $(".div-specs-content-container").hide();
        $(".div-specs-content-container *").hide();
        $.smoothScroll({
            scrollTarget: "#specs",
            speed: 1000
        });
    }
    

});