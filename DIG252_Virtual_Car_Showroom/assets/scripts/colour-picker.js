


$('.colour-picker-control-inner').on('click', function () {
    var headphonesColor = $(this).attr('data-image');

    $('.active').removeClass('active colour-picker-control-active');
    $('.div-colour-picker-image img[data-image = ' + headphonesColor + ']').addClass('active');
    //$(this).addClass('active');
    $(this)
        .parent()
        .find(".colour-picker-control")
        .addClass("colour-picker-control-active active");

});

$(".colour-picker-control-inner").hover(
    function () {
        $(this)
            .parent()
            .find(".colour-picker-control")
            .addClass("colour-picker-control-hover");
    },
    function () {
        $(this)
            .parent()
            .find(".colour-picker-control")
            .removeClass("colour-picker-control-hover");
    }
);