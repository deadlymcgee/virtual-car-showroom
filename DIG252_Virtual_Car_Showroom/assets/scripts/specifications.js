




$(".div-specs-top-level-menu").click(function () {
    var sectionHeight = $("#section4").height();
    var newSectionHeight = String(sectionHeight + 485) + "px !important";
    $("#section4").removeClass("div-section4-normal")
    $("#section4").css("height", "+=485");
    $(".div-specs-content-container").show();
    $(".div-specs-content-container *").show();
});